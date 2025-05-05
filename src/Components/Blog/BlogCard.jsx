"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, Tag } from "lucide-react"
import './Blog.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function BlogCard({ post }) {
  // Calculate reading time (approx 200 words per minute)
  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 200))

  return (
    <motion.div variants={fadeIn} className="blog-card">
      <div className="blog-card-image-container">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={400}
            className="blog-card-image"
          />
          <div className="blog-card-category">{post.category}</div>
        </Link>
      </div>
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <div className="blog-card-meta-item">
            <Calendar className="blog-card-meta-icon" />
            {post.date}
          </div>
          <div className="blog-card-meta-item">
            <User className="blog-card-meta-icon" />
            {post.author}
          </div>
          <div className="blog-card-meta-item">
            <Clock className="blog-card-meta-icon" />
            {readingTime} min read
          </div>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="blog-card-title">{post.title}</h3>
        </Link>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-tags">
          {post.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="blog-card-tag">
              <Tag className="blog-card-tag-icon" />
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && <span className="blog-card-tag">+{post.tags.length - 3} more</span>}
        </div>
        <Link href={`/blog/${post.slug}`} className="blog-card-link">
          Read more <ArrowRight className="blog-card-link-icon" />
        </Link>
      </div>
    </motion.div>
  )
}

function ArrowRight(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
