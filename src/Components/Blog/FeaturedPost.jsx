"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, Tag, ArrowRight } from "lucide-react"
import './Blog.css';

export default function FeaturedPost({ post }) {
  // Calculate reading time (approx 200 words per minute)
  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(wordCount / 200))

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="featured-post"
    >
      <div className="featured-post-grid">
        <div className="featured-post-image-container">
          <Link href={`/blog/${post.slug}`}>
            <Image
              src="/assets/img/blog/placeholder.jpg"
              alt={post.title}
              width={800}
              height={600}
              className="featured-post-image"
            />
            <div className="featured-post-badge">Featured</div>
            <div className="featured-post-category">{post.category}</div>
          </Link>
        </div>
        <div className="featured-post-content">
          <div className="featured-post-meta">
            <div className="featured-post-meta-item">
              <Calendar className="featured-post-meta-icon" />
              {post.date}
            </div>
            <div className="featured-post-meta-item">
              <User className="featured-post-meta-icon" />
              {post.author}
            </div>
            <div className="featured-post-meta-item">
              <Clock className="featured-post-meta-icon" />
              {readingTime} min read
            </div>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h3 className="featured-post-title">{post.title}</h3>
          </Link>
          <p className="featured-post-excerpt">{post.excerpt}</p>
          <div className="featured-post-tags">
            {post.tags.map((tag, i) => (
              <span key={i} className="featured-post-tag">
                <Tag className="featured-post-tag-icon" />
                {tag}
              </span>
            ))}
          </div>
          <div className="featured-post-footer">
            {/* <Image
              src="/assets/img/blog/placeholder.jpg"
              alt={post.author}
              width={40}
              height={40}
              className="featured-post-author-image"
            /> */}
            <div>
              <p className="featured-post-author-name">{post.author}</p>
              <p className="featured-post-author-title">{post.authorTitle}</p>
            </div>
            <Link href={`/blog/${post.slug}`} className="featured-post-link">
              Read Article <ArrowRight className="featured-post-link-icon" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
