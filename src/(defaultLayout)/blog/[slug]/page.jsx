"use client"

import { useEffect, useRef, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { Calendar, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Copy, ArrowLeft, Bookmark } from "lucide-react"
import { blogPosts } from "../../../Components/Blog/blog-data"
import BlogCard from "../../../Components/Blog/BlogCard"
import '../../../Components/Blog/Blog.css';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

export default function BlogPost() {
    const params = useParams()
    const router = useRouter()
    // const { toast } = useToast()
    const [post, setPost] = useState(null)
    const [relatedPosts, setRelatedPosts] = useState([])
    const [readingProgress, setReadingProgress] = useState(0)
    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        // Find the post based on slug
        const currentPost = blogPosts.find((p) => p.slug === params.slug)

        if (!currentPost) {
            router.push("/blog")
            return
        }

        setPost(currentPost)

        // Find related posts (same category or shared tags)
        const related = blogPosts
            .filter((p) => p.id !== currentPost.id)
            .filter((p) => p.category === currentPost.category || p.tags.some((tag) => currentPost.tags.includes(tag)))
            .slice(0, 3)

        setRelatedPosts(related)

        // Reading progress
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setReadingProgress(progress)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [params.slug, router])

    if (!post) return null

    // Calculate reading time (approx 200 words per minute)
    const wordCount = post.content.split(/\s+/).length
    const readingTime = Math.max(1, Math.ceil(wordCount / 200))

    const handleShare = (platform) => {
        const url = window.location.href
        const text = `Check out this article: ${post.title}`

        let shareUrl
        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
                break
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
                break
            case "linkedin":
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
                break
            case "copy":
                navigator.clipboard.writeText(url)
                // toast({
                //     title: "Link copied!",
                //     description: "The article link has been copied to your clipboard.",
                //     variant: "success",
                // })
                return
        }

        if (shareUrl) {
            window.open(shareUrl, "_blank", "width=600,height=400")
        }
    }

    const toggleSave = () => {
        setIsSaved(!isSaved)
        // toast({
        //     title: isSaved ? "Article removed from bookmarks" : "Article bookmarked!",
        //     description: isSaved
        //         ? "The article has been removed from your saved items."
        //         : "The article has been added to your bookmarks.",
        //     variant: "success",
        // })
    }

    return (
        <>
            {/* Reading Progress Bar */}
            <div className="reading-progress" style={{ width: `${readingProgress}%` }} />

            {/* Hero Section */}
            <section className="post-hero">
                <div className="post-container">
                    <div className="post-content-container">
                        <Link href="/blog" className="post-back-link">
                            <ArrowLeft className="post-back-icon" />
                            Back to all articles
                        </Link>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <div className="post-meta-badges">
                                <span className="post-category-badge">{post.category}</span>
                                <span className="post-reading-time">
                                    <Clock className="post-reading-icon" />
                                    {readingTime} min read
                                </span>
                            </div>

                            <h1 className="post-title">{post.title}</h1>

                            <div className="post-author-bar">
                                <div className="post-author">
                                    {/* <Image
                                        src={post.authorImage || "/assets/img/blog/blog2-img2.png"}
                                        alt={post.author}
                                        width={48}
                                        height={48}
                                        className="post-author-image"
                                    /> */}
                                    <div>
                                        <p className="post-author-name">{post.author}</p>
                                        <div className="post-author-date">
                                            <Calendar className="post-author-date-icon" />
                                            {post.date}
                                        </div>
                                    </div>
                                </div>

                                <div className="post-actions">
                                    <button
                                        onClick={toggleSave}
                                        className="post-action-button"
                                        aria-label={isSaved ? "Remove from bookmarks" : "Save article"}
                                    >
                                        <Bookmark className={`post-action-icon ${isSaved ? "active" : ""}`} />
                                    </button>
                                    <button onClick={() => handleShare("copy")} className="post-action-button" aria-label="Copy link">
                                        <Copy className="post-action-icon" />
                                    </button>
                                    <button
                                        onClick={() => handleShare("facebook")}
                                        className="post-action-button"
                                        aria-label="Share on Facebook"
                                    >
                                        <Facebook className="post-action-icon" />
                                    </button>
                                    <button
                                        onClick={() => handleShare("twitter")}
                                        className="post-action-button"
                                        aria-label="Share on Twitter"
                                    >
                                        <Twitter className="post-action-icon" />
                                    </button>
                                    <button
                                        onClick={() => handleShare("linkedin")}
                                        className="post-action-button"
                                        aria-label="Share on LinkedIn"
                                    >
                                        <Linkedin className="post-action-icon" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="post-image-section">
                <div className="post-container">
                    <div className="post-image-container">
                        <div className="post-featured-image">
                            <Image
                                src="/assets/img/blog/placeholder.jpg"
                                alt={post.title}
                                width={1200}
                                height={675}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="post-content-section">
                <div className="post-container">
                    <div className="post-content">
                        <AnimatedSection>
                            <div>
                                <p className="post-excerpt">{post.excerpt}</p>

                                {post.content.split("\n\n").map((paragraph, idx) => (
                                    <p key={idx} className="post-paragraph">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <div className="post-tags">
                                {post.tags.map((tag, i) => (
                                    <Link key={i} href={`/blog?tag=${tag}`} className="post-tag">
                                        <Tag className="post-tag-icon" />
                                        {tag}
                                    </Link>
                                ))}
                            </div>

                            {/* Author Bio */}
                            <div className="post-author-bio">
                                <div className="post-author-bio-container">
                                    {/* <Image
                                        src={post.authorImage || "/placeholder.svg?height=100&width=100"}
                                        alt={post.author}
                                        width={80}
                                        height={80}
                                        className="post-author-bio-image"
                                    /> */}
                                    <div className="post-author-bio-content">
                                        <h3 className="post-author-bio-name">About {post.author}</h3>
                                        <p className="post-author-bio-title">{post.authorTitle}</p>
                                        <p className="post-author-bio-text">
                                            {post.authorBio ||
                                                "Industry expert with years of experience in recruitment and talent acquisition."}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Share Section */}
                            <div className="post-share-section">
                                <h3 className="post-share-title">
                                    <Share2 className="post-share-icon" />
                                    Share this article
                                </h3>
                                <div className="post-share-buttons">
                                    <button
                                        onClick={() => handleShare("facebook")}
                                        className="post-share-button post-share-button-facebook"
                                    >
                                        <Facebook className="post-share-button-icon" />
                                        Facebook
                                    </button>
                                    <button
                                        onClick={() => handleShare("twitter")}
                                        className="post-share-button post-share-button-twitter"
                                    >
                                        <Twitter className="post-share-button-icon" />
                                        Twitter
                                    </button>
                                    <button
                                        onClick={() => handleShare("linkedin")}
                                        className="post-share-button post-share-button-linkedin"
                                    >
                                        <Linkedin className="post-share-button-icon" />
                                        LinkedIn
                                    </button>
                                    <button onClick={() => handleShare("copy")} className="post-share-button post-share-button-copy">
                                        <Copy className="post-share-button-icon" />
                                        Copy Link
                                    </button>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
                <section className="related-posts-section">
                    <div className="post-container">
                        <AnimatedSection className="related-posts-title">Related Articles</AnimatedSection>

                        <div className="related-posts-grid">
                            {relatedPosts.map((relatedPost) => (
                                <BlogCard key={relatedPost.id} post={relatedPost} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            {/* <section className="newsletter-section">
                <div className="post-container">
                    <AnimatedSection className="newsletter-container">
                        <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
                        <p className="newsletter-description">
                            Stay updated with our latest insights, trends, and tips delivered directly to your inbox.
                        </p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your email" className="newsletter-input" />
                            <button className="newsletter-button">Subscribe</button>
                        </div>
                    </AnimatedSection>
                </div>
            </section> */}
        </>
    )
}
