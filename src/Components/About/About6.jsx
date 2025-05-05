"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, Award, TrendingUp, Clock, Target, Briefcase } from "lucide-react"
import "./about.css"

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

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-content">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="about-badge">About Us</span>
              <h1 className="about-heading">
                We Connect <span className="about-heading-highlight">Exceptional Talent</span> With Visionary Companies
              </h1>
              <p className="about-description">
                At Regen ITEK, we empower businesses by connecting them with exceptional talent. As a forward-thinking
                recruitment and staffing agency, we specialize in helping organizations build high-performing teams that
                drive growth and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-story-section">
        <div className="about-container">
          <div className="about-story-grid">
            <AnimatedSection>
              <div className="about-story-image-container">
                <div className="about-story-image">
                  <Image src="/assets/img/about/about-img.jpg" alt="Our story" width={600} height={600} />
                </div>
                <div className="about-story-blob-1"></div>
                <div className="about-story-blob-2"></div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="about-story-content">
              {/* <span className="about-badge">Our Story</span> */}
              <h2 className="about-heading">A Journey of Growth and Excellence</h2>
              <p className="about-description">
                Founded in 2010, Regen ITEK began with a simple mission: to transform how businesses connect with
                talent. What started as a small team of passionate recruiters has grown into a leading staffing agency
                serving clients across multiple industries.
              </p>
              <p className="about-description">
                Our journey has been defined by a commitment to excellence, innovation, and building lasting
                relationships. We've evolved our services and approach to meet the changing needs of the modern
                workplace, but our core values remain the same.
              </p>
              <p className="about-description">
                Today, we're proud to be trusted partners to hundreds of businesses, from innovative startups to
                established enterprises, helping them build teams that drive success.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="about-mission-section">
        <div className="about-container">
          <AnimatedSection className="about-mission-header">
            <span className="about-badge">Our Purpose</span>
            <h2 className="about-heading">Mission & Vision</h2>
          </AnimatedSection>

          <div className="about-mission-grid">
            <AnimatedSection className="about-mission-card">
              <div className="about-mission-icon">
                <Target className="about-mission-icon" />
              </div>
              <h3 className="about-mission-title">Our Mission</h3>
              <p className="about-mission-text">
                To empower organizations by connecting them with exceptional talent that drives growth, innovation, and
                success. We strive to create meaningful partnerships that transform businesses and careers.
              </p>
              <p className="about-mission-text">
                We believe in the power of the right match—bringing together the right talent with the right opportunity
                at the right time. Our mission is to make these connections with integrity, expertise, and a deep
                understanding of our clients' and candidates' needs.
              </p>
            </AnimatedSection>

            <AnimatedSection className="about-mission-card">
              <div className="about-mission-icon">
                <TrendingUp className="about-mission-icon" />
              </div>
              <h3 className="about-mission-title">Our Vision</h3>
              <p className="about-mission-text">
                To be the most trusted and innovative talent partner, recognized for transforming how organizations
                build and manage their teams in an evolving global workplace.
              </p>
              <p className="about-mission-text">
                We envision a future where every organization has access to the talent they need to thrive, and every
                professional can find opportunities that align with their skills, values, and aspirations. We're
                committed to making this vision a reality through continuous innovation and excellence in everything we
                do.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="about-values-section">
        <div className="about-container">
          <AnimatedSection className="about-values-header">
            <span className="about-badge">Our Foundation</span>
            <h2 className="about-heading">Our Core Values</h2>
            <p className="about-description">
              These principles guide everything we do, from how we interact with clients and candidates to how we make
              decisions and build our team.
            </p>
          </AnimatedSection>

          <div className="about-values-grid">
            {[
              {
                icon: <Award className="about-value-icon" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every interaction, process, and outcome. We're committed to delivering exceptional results that exceed expectations.",
              },
              {
                icon: <Users className="about-value-icon" />,
                title: "Partnership",
                description:
                  "We build genuine partnerships based on trust, transparency, and mutual success. We're invested in our clients' and candidates' long-term growth.",
              },
              {
                icon: <Target className="about-value-icon" />,
                title: "Integrity",
                description:
                  "We operate with unwavering integrity, honesty, and ethical standards. We do what's right, even when it's challenging.",
              },
              {
                icon: <TrendingUp className="about-value-icon" />,
                title: "Innovation",
                description:
                  "We embrace innovation and continuous improvement, constantly seeking better ways to serve our clients and adapt to changing market needs.",
              },
              {
                icon: <Briefcase className="about-value-icon" />,
                title: "Expertise",
                description:
                  "We pride ourselves on deep industry knowledge and recruitment expertise that enables us to make meaningful connections.",
              },
              {
                icon: <Clock className="about-value-icon" />,
                title: "Responsiveness",
                description:
                  "We value timely communication and quick action, recognizing that speed often makes the difference in securing top talent.",
              },
            ].map((value, index) => (
              <AnimatedSection key={index} className="about-value-card">
                <div>{value.icon}</div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="about-team-section">
        <div className="about-container">
          <AnimatedSection className="about-team-header">
            <span className="about-badge">Our People</span>
            <h2 className="about-heading">Meet Our Leadership Team</h2>
            <p className="about-description">
              Our team of experienced recruitment professionals is passionate about connecting exceptional talent with
              visionary companies.
            </p>
          </AnimatedSection>

          <div className="about-team-grid">
            {[
              {
                name: "Alexandra Chen",
                position: "Chief Executive Officer",
                bio: "With over 15 years of experience in recruitment and business leadership, Alexandra leads our company with vision and strategic direction.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Marcus Johnson",
                position: "Chief Operations Officer",
                bio: "Marcus oversees our day-to-day operations, ensuring we deliver exceptional service and results to our clients and candidates.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Sophia Rodriguez",
                position: "Director of Talent Acquisition",
                bio: "Sophia leads our talent acquisition strategies, leveraging her extensive network and industry expertise to connect with exceptional professionals.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Kim",
                position: "Director of Client Services",
                bio: "David works closely with our clients to understand their unique needs and develop tailored recruitment solutions that drive results.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Priya Patel",
                position: "Head of Technology Recruitment",
                bio: "Priya specializes in technology recruitment, helping companies build innovative tech teams that drive digital transformation.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "James Wilson",
                position: "Head of Executive Search",
                bio: "James leads our executive search practice, connecting organizations with transformative leadership talent.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <AnimatedSection key={index} className="about-team-card">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="about-team-image"
                />
                <div className="about-team-content">
                  <h3 className="about-team-name">{member.name}</h3>
                  <p className="about-team-position">{member.position}</p>
                  <p className="about-team-bio">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      
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
