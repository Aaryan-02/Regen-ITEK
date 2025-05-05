"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Search, ArrowRight, TrendingUp, Filter, X, ChevronDown } from "lucide-react"
import BlogCard from "./BlogCard"
import FeaturedPost from "./FeaturedPost"
import { blogPosts, categories, tags } from "./blog-data"
import Link from "next/link"
import './Blog.css';
import "../About/about.css";


// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const AnimatedSection = ({ children, className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeIn} className={className}>
      {children}
    </motion.div>
  )
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Get featured post (most recent)
  const featuredPost = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))[0]

  // Filter posts based on search term, category, and tags
  const filteredPosts = blogPosts.filter((post) => {
    // Don't include featured post in the regular listing
    if (post.id === featuredPost.id) return false

    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag))

    return matchesSearch && matchesCategory && matchesTags
  })

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All")
    setSelectedTags([])
    setCurrentPage(1)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="blog-hero">
        {/* <div className="blog-hero-pattern"></div> */}
        <div className="container">
          <div className="blog-hero-content">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="blog-badge">Our Blog</span>
              <h1 className="blog-title">
                Insights & <span className="blog-title-highlight">Perspectives</span>
              </h1>
              <p className="blog-description">
                Stay updated with the latest trends and insights in recruitment, talent acquisition, and workplace
                management from our industry experts.
              </p>
              <div className="blog-search">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="blog-search-input"
                />
                <Search className="blog-search-icon" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section section-white">
        <div className="container">
          <AnimatedSection className="section-title">
            <TrendingUp className="section-title-icon" />
            Featured Article
          </AnimatedSection>
          <FeaturedPost post={featuredPost} />
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-container">
            <div className="filter-actions">
              <button onClick={() => setShowFilters(!showFilters)} className="filter-button">
                <Filter className="filter-button-icon" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </button>

              {selectedTags.length > 0 || selectedCategory !== "All" ? (
                <button onClick={clearFilters} className="clear-button">
                  <X className="clear-button-icon" />
                  Clear Filters
                </button>
              ) : null}
            </div>

            <div className="filter-count">
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
            </div>
          </div>

          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="filter-panel"
            >
              <div className="filter-grid">
                <div>
                  <h3 className="filter-heading">
                    <ChevronDown className="filter-heading-icon" />
                    Categories
                  </h3>
                  <div className="filter-tags">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedCategory(category)
                          setCurrentPage(1)
                        }}
                        className={`filter-tag ${selectedCategory === category ? "filter-tag-active" : "filter-tag-inactive"
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="filter-heading">
                    <ChevronDown className="filter-heading-icon" />
                    Tags
                  </h3>
                  <div className="filter-tags">
                    {tags.map((tag, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          handleTagToggle(tag)
                          setCurrentPage(1)
                        }}
                        className={`filter-tag ${selectedTags.includes(tag) ? "filter-tag-active" : "filter-tag-inactive"
                          }`}
                      >
                        {selectedTags.includes(tag) && <Check className="filter-tag-icon" />}
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section section-white">
        <div className="container">
          {currentPosts.length > 0 ? (
            <>
              <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="blog-grid">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <div className="pagination-container">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="pagination-button"
                    >
                      Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`pagination-number ${currentPage === page ? "pagination-number-active" : ""}`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="pagination-button"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="no-results">
              <Image
                src="/placeholder.svg?height=120&width=120&text=🔍"
                alt="No results"
                width={120}
                height={120}
                className="no-results-image"
              />
              <h3 className="no-results-title">No articles found</h3>
              <p className="no-results-text">Try adjusting your search or filter criteria.</p>
              <button onClick={clearFilters} className="no-results-button">
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-container">
          <AnimatedSection className="about-cta-content">
            <h2 className="about-cta-heading">Ready to Build Your Dream Team?</h2>
            <p className="about-cta-description">
              Partner with Regen ITEK to connect with exceptional talent that will drive your business forward.
            </p>
            <div className="about-cta-buttons">
              <Link href="/contact" className="about-cta-button-primary">
              Contact Us
              </Link>
              <Link href="/services" className="about-cta-button-secondary">
                Explore Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

function Check(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
