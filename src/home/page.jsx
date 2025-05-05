"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, CheckCircle, Users, Briefcase, Award, TrendingUp, Clock, Target } from "lucide-react"
import Services3 from "../Components/Services/ServiceComponent"
import "./home.css"
import "../Components/About/about.css";

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
            staggerChildren: 0.2,
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

export default function page() {
    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="home-hero-section">
                <div className="hero-container">
                    <div className="hero-grid">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Connecting <span className="gradient-text">Exceptional Talent</span> With Visionary Companies
                            </h1>
                            <p className="hero-description">
                                At Regen ITEK, we empower businesses by connecting them with exceptional talent. Our tailored
                                recruitment solutions help you build high-performing teams that drive growth and innovation.
                            </p>
                            <div className="hero-buttons">
                                <Link href="/contact" className="btn-primary">
                                    Contact Us
                                </Link>
                                <Link href="/service" className="btn-secondary">
                                    Our Services
                                </Link>
                            </div>
                        </div>

                        <div className="hero-image-container">
                            <img
                                src="/assets/img/hero/hero-img.png"
                                alt="Recruitment professionals"
                                className="hero-image"
                            />
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="decorative-element">
                    <svg width="400" height="400" viewBox="0 0 200 200">
                        {/* ... */}
                    </svg>
                </div>
            </section>

            {/* Trusted By Section */}
            <AnimatedSection className="trusted-section">
                <div className="trusted-container">
                    <h2 className="trusted-heading">Trusted By Industry Leaders</h2>
                    <div className="trusted-logos">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="trusted-logo">
                                <Image
                                    src={`/placeholder.svg?height=60&width=120&text=LOGO ${i}`}
                                    alt={`Company logo ${i}`}
                                    width={120}
                                    height={60}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <Services3 />

            {/* Why Choose Us Section */}
            {/* <section className="why-choose-section wavy-bg"> */}
            <section className="why-choose-section">
                <div className="section-container">
                    <AnimatedSection className="why-choose-header">
                        <span className="why-choose-badge">Why Choose Us</span>
                        <h2 className="why-choose-heading">What Sets Us Apart</h2>
                        <p className="why-choose-description">
                            At Regen ITEK, we believe in building lasting partnerships—not just placements. Our approach is centered
                            around understanding your unique needs and delivering exceptional results.
                        </p>
                    </AnimatedSection>

                    <div className="why-choose-grid">
                        <AnimatedSection className="why-choose-content">
                            <div className="why-choose-features">
                                {[
                                    {
                                        title: "Industry Expertise",
                                        description:
                                            "Our recruiters specialize in specific industries, ensuring deep understanding of your talent needs.",
                                    },
                                    {
                                        title: "Quality-Focused Approach",
                                        description: "We prioritize quality over quantity, presenting only the most qualified candidates.",
                                    },
                                    {
                                        title: "Transparent Process",
                                        description:
                                            "Our recruitment process is transparent, with regular updates and clear communication.",
                                    },
                                    {
                                        title: "Long-term Partnerships",
                                        description: "We focus on building lasting relationships with both clients and candidates.",
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="feature-item">
                                        <CheckCircle className="feature-icon" />
                                        <div className="feature-content">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                        <AnimatedSection className="why-choose-image-container">
                            <div className="why-choose-image">
                                <Image src="/assets/img/others/home3.jpg" alt="what-sets-us-apart" width={600} height={500} />
                            </div>
                            <div className="why-choose-blob-1"></div>
                            <div className="why-choose-blob-2"></div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {/* <section className="stats-section">
                <div className="stats-container">
                    <AnimatedSection className="stats-grid">
                        {[
                            { number: "500+", label: "Clients Served" },
                            { number: "10,000+", label: "Successful Placements" },
                            { number: "98%", label: "Client Satisfaction" },
                            { number: "15+", label: "Years of Experience" },
                        ].map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </AnimatedSection>
                </div>
            </section> */}

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="section-container">
                    <AnimatedSection className="testimonials-header">
                        <span className="testimonials-badge">Testimonials</span>
                        <h2 className="testimonials-heading">What Our Clients Say</h2>
                        <p className="testimonials-description">
                            Don't just take our word for it. Hear from the businesses we've helped build exceptional teams.
                        </p>
                    </AnimatedSection>

                    <div className="testimonials-grid">
                        {[
                            {
                                name: "Sarah Johnson",
                                position: "HR Director, TechCorp",
                                image: "/placeholder.svg?height=100&width=100",
                                quote:
                                    "Regen ITEK has been instrumental in helping us build our engineering team. Their understanding of our technical requirements and company culture has resulted in excellent hires who have made immediate impacts.",
                            },
                            {
                                name: "Michael Chen",
                                position: "CEO, GrowthStartup",
                                image: "/placeholder.svg?height=100&width=100",
                                quote:
                                    "As a rapidly growing startup, we needed to scale our team quickly without compromising on quality. Regen ITEK delivered exceptional candidates who aligned perfectly with our vision and values.",
                            },
                            {
                                name: "Emily Rodriguez",
                                position: "Operations Manager, GlobalServices",
                                image: "/placeholder.svg?height=100&width=100",
                                quote:
                                    "The contract staffing solutions provided by Regen ITEK helped us navigate seasonal demands efficiently. Their candidates were well-vetted, professional, and ready to contribute from day one.",
                            },
                        ].map((testimonial, index) => (
                            <AnimatedSection key={index} className="testimonial-card">
                                <div className="testimonial-header">
                                    {/* <Image
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        width={60}
                                        height={60}
                                        className="testimonial-image"
                                    /> */}
                                    <div className="testimonial-author">
                                        <h3>{testimonial.name}</h3>
                                        <p>{testimonial.position}</p>
                                    </div>
                                </div>
                                <p className="testimonial-quote">"{testimonial.quote}"</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="blog-section">
                <div className="section-container">
                    <AnimatedSection className="blog-header">
                        <span className="blog-badge">Latest Insights</span>
                        <h2 className="blog-heading">From Our Blog</h2>
                        <p className="blog-description">
                            Stay updated with the latest trends and insights in recruitment and talent acquisition.
                        </p>
                    </AnimatedSection>

                    <div className="blog-grid">
                        {[
                            {
                                title: "5 Strategies for Attracting Top Tech Talent in 2023",
                                excerpt:
                                    "Discover effective strategies to attract and retain the best technology professionals in today's competitive market.",
                                date: "June 15, 2023",
                                image: "/assets/img/blog/placeholder.jpg",
                                category: "Recruitment",
                            },
                            {
                                title: "The Future of Remote Work: Trends and Predictions",
                                excerpt:
                                    "Explore how remote work is evolving and what it means for recruitment and team management in the coming years.",
                                date: "May 28, 2023",
                                image: "/assets/img/blog/placeholder.jpg",
                                category: "Workplace Trends",
                            },
                            {
                                title: "Building Inclusive Teams: A Guide for Modern Businesses",
                                excerpt:
                                    "Learn practical steps to create diverse and inclusive teams that drive innovation and business success.",
                                date: "April 10, 2023",
                                image: "/assets/img/blog/placeholder.jpg",
                                category: "Diversity & Inclusion",
                            },
                        ].map((post, index) => (
                            <AnimatedSection key={index} className="blog-card">
                                <div className="blog-card-image-container">
                                    <Image
                                        src={post.image || "/placeholder.svg"}
                                        alt={post.title}
                                        width={500}
                                        height={300}
                                        className="blog-card-image"
                                    />
                                    <div className="blog-card-category">{post.category}</div>
                                </div>
                                <div className="blog-card-content">
                                    <p className="blog-card-date">{post.date}</p>
                                    <h3 className="blog-card-title">{post.title}</h3>
                                    <p className="blog-card-excerpt">{post.excerpt}</p>
                                    <Link href="/blog" className="blog-card-link">
                                        Read more <ArrowRight className="blog-card-link-icon" />
                                    </Link>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <div className="blog-cta">
                        <Link href="/blog" className="btn-primary">
                            View All Posts
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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
                            <Link href="/service" className="about-cta-button-secondary">
                                Explore Services
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}

// import React from 'react';
// import HeroBanner4 from '../Components/HeroBanner/HeroBanner4';
// import About4 from '../Components/About/About4';
// import Services4 from '../Components/Services/Services4';
// import HowWork3 from '../Components/HowWork/HowWork3';
// import Project3 from '../Components/Project/Project3';
// import Pricing1 from '../Components/Pricing/Pricing1';
// import Testimonial3 from '../Components/Testimonial/Testimonial3';
// import Blog4 from '../Components/Blog/Blog4';
// import Cta3 from '../Components/Cta/Cta3';
// import Services3 from "../Components/Services/Services3"

// const page = () => {
//     return (
//         <div>
//             <HeroBanner4
//                 subtitle="Hi, We are Regen 👋"
//                 title="Regen ITEK"
//                 content="Our tailored staffing solutions streamline the hiring process, saving you time and resources while ensuring the perfect fit."
//                 btnone="Get A Quote"
//                 btnoneurl="/contact"
//                 btntwo="Start Now"
//                 btntwourl="/service"
//                 shape1="/assets/img/shapes/hero4-image-shape.png"
//             ></HeroBanner4>
//             <About4
//                 image1="/assets/img/about/about-img2.jpg"
//                 image2="/assets/img/about/about-img1.jpg"
//                 image3="/assets/img/about/about-img3.jpg"
//                 shape1="/assets/img/shapes/about3-shape1.png"
//                 subTitle="About Us 👋"
//                 Title="Choose Excellence. Elevate Your Hiring Experience."
//                 content="Our journey began with a vision to empower businesses of all sizes with cutting-edge technology solutions tailored to their unique needs. Our team of experienced professionals brings together a diverse range"
//                 expNum="25"
//                 expCon="Years Experience"
//                 featurelist={[
//                     "Hiring Services",
//                     "Tech Solutions",
//                     "IT Consulting",
//                 ]}
//                 btnName="Read More"
//                 btnUrl="/about"
//             ></About4>
//             <Services3></Services3>
//         </div>
//     );
// };

// export default page;