"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
// import { useToast } from "@/components/ui/use-toast"
import "./contactus.css"

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

export default function ContactUs() {
  // const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    type: "client", // client or candidate
    resume: null, // Add this line for resume file
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // toast({
      //   title: "Message sent successfully!",
      //   description: "We'll get back to you as soon as possible.",
      //   variant: "success",
      // })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        type: formData.type,
        resume: null,
      })
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="contact-badge">Contact Us</span>
              <h1 className="contact-title">
                Let's <span className="contact-title-highlight">Connect</span>
              </h1>
              <p className="contact-description">
                Have questions or ready to start a conversation? We're here to help you find the right talent or
                opportunity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <section className="contact-form-section section-gray section-wavy"> */}
      <section className="contact-form-section">
        <div className="container">
          <AnimatedSection className="contact-form-container">
            <div className="contact-form-card">
              <div className="contact-form-grid">
                <div className="contact-form-sidebar">
                  <div className="contact-sidebar-content">
                    <h2 className="contact-sidebar-title">Get in Touch</h2>
                    <p className="contact-sidebar-text">
                      Whether you're looking to hire exceptional talent or find your next career opportunity, we're here
                      to help. Fill out the form and we'll get back to you as soon as possible.
                    </p>
                    <div className="contact-sidebar-info">
                      <div className="contact-sidebar-info-item">
                        <MapPin className="contact-sidebar-info-icon" />
                        <span className="contact-sidebar-info-text">
                          {/* 123 Business Avenue, Suite 500
                          <br /> */}
                          Mumbai, MU 10001
                        </span>
                      </div>
                      <div className="contact-sidebar-info-item">
                        <Phone className="contact-sidebar-info-icon" />
                        <div className="contact-sidebar-info-text">
                          <a href="tel:+12345678900" className="contact-sidebar-info-link">
                            +1 (234) 567-8900
                          </a>
                          <br />
                          <a href="tel:+12345678901" className="contact-sidebar-info-link">
                            +1 (234) 567-8901
                          </a>
                        </div>
                      </div>
                      <div className="contact-sidebar-info-item">
                        <Mail className="contact-sidebar-info-icon" />
                        <div className="contact-sidebar-info-text">
                          <a href="mailto:info@regenitek.com" className="contact-sidebar-info-link">
                            info@regenitek.com
                          </a>
                          <br />
                          <a href="mailto:hr@regenitek.com" className="contact-sidebar-info-link">
                            hr@regenitek.com
                          </a>
                        </div>
                      </div>
                      <div className="contact-sidebar-info-item">
                        <Clock className="contact-sidebar-info-icon" />
                        <span className="contact-sidebar-info-text">
                          Monday - Friday
                          <br />
                          9:00 AM - 6:00 PM EST
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/regen-only-logo-white.jpg-PkPxmIJh5xiP67NoPpepU9Ygxn9MKF.jpeg"
                      alt="Regen ITEK Logo"
                      width={150}
                      height={50}
                      className="contact-sidebar-logo"
                    /> */}
                  </div>
                </div>
                <div className="contact-form-content">
                  <div className="contact-form-tabs">
                    <button
                      className={`contact-form-tab ${formData.type === "client" ? "active" : ""}`}
                      onClick={() => setFormData((prev) => ({ ...prev, type: "client" }))}
                    >
                      I'm looking to hire
                    </button>
                    <button
                      className={`contact-form-tab ${formData.type === "candidate" ? "active" : ""}`}
                      onClick={() => setFormData((prev) => ({ ...prev, type: "candidate" }))}
                    >
                      I'm looking for a job
                    </button>
                  </div>
                  <div>
                    <h3 className="contact-form-heading">
                      {formData.type === "client"
                        ? "Tell us about your hiring needs"
                        : "Tell us about your career interests"}
                    </h3>
                    <p className="contact-form-subheading">
                      {formData.type === "client"
                        ? "Complete the form below and one of our recruitment specialists will contact you shortly."
                        : "Share your information below and our team will help you find the right opportunity."}
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-form-row">
                      <div className="contact-form-field">
                        <label htmlFor="name" className="contact-form-label">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="contact-form-input"
                        />
                      </div>
                      <div className="contact-form-field">
                        <label htmlFor="email" className="contact-form-label">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="contact-form-input"
                        />
                      </div>
                    </div>
                    <div className="contact-form-row">
                      <div className="contact-form-field">
                        <label htmlFor="phone" className="contact-form-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="contact-form-input"
                        />
                      </div>
                      <div className="contact-form-field">
                        <label htmlFor="company" className="contact-form-label">
                          {formData.type === "client" ? "Company Name" : "Current/Last Company"}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="contact-form-input"
                        />
                      </div>
                    </div>
                    {formData.type === "candidate" && (
                      <div className="contact-form-field">
                        <label htmlFor="resume" className="contact-form-label">
                          Resume/CV *
                        </label>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          onChange={handleFileChange}
                          required
                          accept=".pdf,.doc,.docx"
                          className="contact-form-file-input"
                        />
                        <p className="contact-form-file-help">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                      </div>
                    )}
                    <div className="contact-form-field">
                      <label htmlFor="subject" className="contact-form-label">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="contact-form-input"
                      />
                    </div>
                    <div className="contact-form-field">
                      <label htmlFor="message" className="contact-form-label">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="contact-form-textarea"
                      ></textarea>
                    </div>
                    <div className="contact-form-checkbox-container">
                      <input type="checkbox" required id="privacy-policy" className="contact-form-checkbox" />
                      <label htmlFor="privacy-policy" className="contact-form-checkbox-label">
                        I agree to the{" "}
                        <Link href="/privacy-policy" className="contact-form-checkbox-link">
                          Privacy Policy
                        </Link>{" "}
                        and consent to having my data processed.
                      </label>
                    </div>
                    <button type="submit" disabled={isSubmitting} className="contact-form-button">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="contact-form-spinner"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="contact-form-button-icon" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="map-section section-white">
        <div className="container">
          <AnimatedSection className="map-header">
            <h2 className="map-title">Our Location</h2>
            <p className="map-description">
              Visit our office to meet our team and discuss your recruitment needs in person.
            </p>
          </AnimatedSection>
          <AnimatedSection className="map-frame">
            <div className="map-placeholder">
              <p>Interactive map would be displayed here</p>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=1200&text=MAP"
              alt="Office location map"
              width={1200}
              height={400}
              className="map-image"
            />
          </AnimatedSection>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="faq-section section-gray">
        <div className="container">
          <AnimatedSection className="faq-header">
            <span className="faq-badge">Common Questions</span>
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <p className="faq-description">
              Find answers to common questions about our recruitment services and process.
            </p>
          </AnimatedSection>

          <div className="faq-container">
            <div className="faq-list">
              {[
                {
                  question: "How quickly can you help us fill a position?",
                  answer:
                    "Our timeline varies depending on the position and specific requirements, but we typically present qualified candidates within 2-3 weeks. For urgent needs, we can expedite the process while maintaining our quality standards.",
                },
                {
                  question: "What industries do you specialize in?",
                  answer:
                    "We have specialized recruiters across multiple industries, including technology, finance, healthcare, manufacturing, retail, and professional services. Each recruiter has deep knowledge of their industry, ensuring we understand your specific talent needs.",
                },
                {
                  question: "How do you screen candidates?",
                  answer:
                    "Our screening process includes thorough skills assessment, cultural fit evaluation, reference checks, and when necessary, technical assessments. We take time to understand not just technical requirements but also your company culture to ensure alignment.",
                },
                {
                  question: "What should I bring to a meeting with a recruiter?",
                  answer:
                    "If you're a job seeker, bring your updated resume, portfolio (if applicable), and be prepared to discuss your career goals, skills, and experience. If you're an employer, bring information about the position, team structure, and company culture to help us find the right match.",
                },
              ].map((faq, index) => (
                <AnimatedSection key={index} className="faq-item">
                  <h3 className="faq-question">{faq.question}</h3>
                  <p className="faq-answer">{faq.answer}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <AnimatedSection className="cta-container">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Whether you're looking to hire exceptional talent or find your next career opportunity, we're here to
              help.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="cta-button-primary">
                Contact Us Now
              </Link>
              <Link href="/services" className="cta-button-secondary">
                Explore Our Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
