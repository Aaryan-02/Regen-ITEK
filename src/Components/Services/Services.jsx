"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { CheckCircle, Users, Award, TrendingUp, Clock, Target, Briefcase } from "lucide-react"
import "./services.css"

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const AnimatedSection = ({ children, className, id }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [controls, isInView])

    return (
        <motion.div id={id} ref={ref} initial="hidden" animate={controls} variants={fadeIn} className={className}>
            {children}
        </motion.div>
    )
}

export default function Services() {
    return (
        <>
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <div className="services-hero-content">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <span className="services-badge">Our Services</span>
                            <h1 className="services-title">
                                Comprehensive <span className="services-title-highlight">Recruitment Solutions</span> For Your Business
                            </h1>
                            <p className="services-description">
                                Whether you're looking for permanent employees, contract staff, or executive talent, we have the expertise
                                and network to connect you with exceptional professionals who will drive your business forward.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section section-white">
                <div className="container">
                    {/* <AnimatedSection className="services-overview-header">
                        <h2 className="services-overview-title">Our Recruitment Services</h2>
                        <p className="services-overview-description">
                            Whether you're looking for permanent employees, contract staff, or executive talent, we have the expertise
                            and network to connect you with exceptional professionals who will drive your business forward.
                        </p>
                    </AnimatedSection> */}

                    <div className="services-grid">
                        {[
                            {
                                id: "permanent",
                                icon: <Users className="service-icon" />,
                                title: "Permanent Recruitment",
                                description:
                                    "Find the perfect long-term additions to your team with our thorough permanent recruitment services. We identify candidates who not only have the right skills but also align with your company culture and values.",
                                features: [
                                    "Comprehensive candidate screening",
                                    "Cultural fit assessment",
                                    "Skills verification",
                                    "Background checks",
                                    "Onboarding support",
                                ],
                            },
                            {
                                id: "contract",
                                icon: <Briefcase className="service-icon" />,
                                title: "Contract Staffing",
                                description:
                                    "Access specialized talent for short-term projects or seasonal demands with flexible contract staffing. Our contract professionals are ready to hit the ground running and deliver results quickly.",
                                features: [
                                    "Rapid deployment",
                                    "Specialized skill sets",
                                    "Flexible engagement terms",
                                    "Performance monitoring",
                                    "Contract-to-hire options",
                                ],
                            },
                            {
                                id: "executive",
                                icon: <Award className="service-icon" />,
                                title: "Executive Search",
                                description:
                                    "Identify and attract top-tier leadership talent to drive your organization forward. Our executive search process is discreet, thorough, and focused on finding transformative leaders.",
                                features: [
                                    "C-suite and leadership recruitment",
                                    "Confidential search process",
                                    "In-depth leadership assessment",
                                    "Industry-specific expertise",
                                    "Long-term success tracking",
                                ],
                            },
                            {
                                id: "project",
                                icon: <TrendingUp className="service-icon" />,
                                title: "Project-Based Hiring",
                                description:
                                    "Assemble specialized teams for specific projects with our project-based hiring solutions. We help you scale your workforce up or down based on project demands.",
                                features: [
                                    "Team composition planning",
                                    "Project timeline alignment",
                                    "Skill gap analysis",
                                    "Team integration support",
                                    "Project completion transitions",
                                ],
                            },
                            {
                                id: "talent",
                                icon: <Target className="service-icon" />,
                                title: "Talent Acquisition Strategy",
                                description:
                                    "Develop comprehensive strategies to attract and retain the best talent in your industry. We help you build a strong employer brand and effective recruitment processes.",
                                features: [
                                    "Employer brand development",
                                    "Recruitment process optimization",
                                    "Talent market analysis",
                                    "Diversity and inclusion strategies",
                                    "Retention planning",
                                ],
                            },
                            {
                                id: "consulting",
                                icon: <Clock className="service-icon" />,
                                title: "HR Consulting",
                                description:
                                    "Optimize your HR processes and policies with our expert consulting services. We help you create an environment where talent can thrive and contribute to business success.",
                                features: [
                                    "HR policy development",
                                    "Compensation structure design",
                                    "Performance management systems",
                                    "Employee engagement programs",
                                    "Succession planning",
                                ],
                            },
                        ].map((service, index) => (
                            <AnimatedSection key={index} id={service.id} className="service-card">
                                <div>{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <h4 className="service-features-title">Key Features:</h4>
                                <ul className="service-features-list">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="service-feature-item">
                                            <CheckCircle className="service-feature-icon" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="service-button">
                                    Get Started
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            {/* <section className="process-section section-gray section-wavy"> */}
            <section className="process-section">
                <div className="container">
                    <AnimatedSection className="process-header">
                        <span className="process-badge">Our Approach</span>
                        <h2 className="process-title">Our Recruitment Process</h2>
                        <p className="process-description">
                            We follow a structured, transparent process designed to identify the best talent for your specific needs.
                        </p>
                    </AnimatedSection>

                    <div className="process-grid">
                        <AnimatedSection>
                            <div className="process-image-container">
                                <div className="process-image">
                                    <Image
                                        src="/assets/img/service/process.jpg"
                                        alt="Our recruitment process"
                                        width={600}
                                        height={500}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="process-image-blob-1"></div>
                                <div className="process-image-blob-2"></div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection className="process-steps">
                            {[
                                {
                                    number: "01",
                                    title: "Understanding Your Needs",
                                    description:
                                        "We begin by thoroughly understanding your business, culture, and specific talent requirements.",
                                },
                                {
                                    number: "02",
                                    title: "Strategic Sourcing",
                                    description:
                                        "We leverage our extensive network and advanced sourcing techniques to identify qualified candidates.",
                                },
                                {
                                    number: "03",
                                    title: "Rigorous Screening",
                                    description:
                                        "Candidates undergo comprehensive screening, including skills assessment, cultural fit evaluation, and reference checks.",
                                },
                                {
                                    number: "04",
                                    title: "Presentation & Selection",
                                    description:
                                        "We present a shortlist of top candidates and support you through the interview and selection process.",
                                },
                                {
                                    number: "05",
                                    title: "Offer & Onboarding",
                                    description:
                                        "We assist with offer negotiation and provide support throughout the onboarding process.",
                                },
                            ].map((step, index) => (
                                <div key={index} className="process-step">
                                    <div className="process-step-number-container">
                                        <div className="process-step-number">{step.number}</div>
                                    </div>
                                    <div className="process-step-content">
                                        <h3 className="process-step-title">{step.title}</h3>
                                        <p className="process-step-description">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="industries-section section-white">
                <div className="container">
                    <AnimatedSection className="industries-header">
                        <span className="industries-badge">Our Expertise</span>
                        <h2 className="industries-title">Industries We Serve</h2>
                        <p className="industries-description">
                            We have specialized recruiters with deep knowledge of various industries, ensuring we understand the
                            unique talent needs of your sector.
                        </p>
                    </AnimatedSection>

                    <div className="industries-grid">
                        {[
                            {
                                title: "Technology & IT",
                                description:
                                    "From software developers to IT leaders, we connect tech companies with the digital talent they need to innovate and grow.",
                                image: "/assets/img/service/industry-1.jpg",
                            },
                            {
                                title: "Finance & Banking",
                                description:
                                    'We help financial institutions find professionals who combine technical expertise with regulatory "We help financial institutions find professionals who combine technical expertise with regulatory knowledge and business acumen.',
                                image: "/assets/img/service/industry-2.jpg",
                            },
                            {
                                title: "Healthcare & Life Sciences",
                                description:
                                    "Our specialists understand the unique requirements of healthcare organizations and can source qualified clinical and administrative talent.",
                                image: "/assets/img/service/industry-3.jpg",
                            },
                            {
                                title: "Manufacturing & Engineering",
                                description:
                                    "We connect manufacturing companies with engineering talent and skilled professionals who drive operational excellence.",
                                image: "/assets/img/service/industry-4.jpg",
                            },
                            {
                                title: "Retail & E-commerce",
                                description:
                                    "From digital marketers to supply chain experts, we help retail businesses find talent that enhances customer experience and drives sales.",
                                image: "/assets/img/service/industry-5.jpg",
                            },
                            {
                                title: "Professional Services",
                                description:
                                    "We support consulting firms, legal practices, and other service providers with finding specialized professional talent.",
                                image: "/assets/img/service/industry-6.jpg",
                            },
                        ].map((industry, index) => (
                            <AnimatedSection key={index} className="industry-card">
                                <div className="industry-card-overlay"></div>
                                <Image
                                    src={industry.image || "/placeholder.svg"}
                                    alt={industry.title}
                                    width={400}
                                    height={300}
                                    className="industry-card-image"
                                />
                                <div className="industry-card-content">
                                    <h3 className="industry-card-title">{industry.title}</h3>
                                    <p className="industry-card-description">{industry.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section section-gray">
                <div className="container">
                    <AnimatedSection className="testimonials-header">
                        <span className="testimonials-badge">Client Success</span>
                        <h2 className="testimonials-title">What Our Clients Say</h2>
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
                                    <div>
                                        <h3 className="testimonial-author-name">{testimonial.name}</h3>
                                        <p className="testimonial-author-position">{testimonial.position}</p>
                                    </div>
                                </div>
                                <p className="testimonial-quote">"{testimonial.quote}"</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section section-white">
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
                                    question: "How long does the recruitment process typically take?",
                                    answer:
                                        "The timeline varies depending on the position and specific requirements, but we typically present qualified candidates within 2-3 weeks. Our goal is to balance thoroughness with efficiency to help you fill critical roles quickly.",
                                },
                                {
                                    question: "What makes Regen ITEK different from other recruitment agencies?",
                                    answer:
                                        "We differentiate ourselves through our industry-specific expertise, quality-focused approach, transparent process, and commitment to building long-term partnerships. We don't just fill positions; we help build teams that drive business success.",
                                },
                                {
                                    question: "How do you ensure candidates are a good fit for our company?",
                                    answer:
                                        "We take time to understand not just your technical requirements but also your company culture, values, and work environment. Our screening process includes thorough skills assessment, cultural fit evaluation, and reference checks to ensure alignment.",
                                },
                                {
                                    question: "Do you offer any guarantees on your placements?",
                                    answer:
                                        "Yes, we stand behind our placements with a replacement guarantee. If a candidate doesn't work out within a specified period, we'll find a replacement at no additional cost. The specific terms vary by service type and will be outlined in our agreement.",
                                },
                                {
                                    question: "What industries and positions do you specialize in?",
                                    answer:
                                        "We have specialized recruiters across multiple industries, including technology, finance, healthcare, manufacturing, retail, and professional services. We recruit for a wide range of positions, from entry-level to executive leadership.",
                                },
                                {
                                    question: "How are your fees structured?",
                                    answer:
                                        "Our fee structure varies based on the service type and complexity of the search. For permanent placements, we typically work on a contingency basis with a percentage of the first-year salary. For contract staffing, we charge a markup on the hourly rate. We're transparent about our fees and will provide detailed information during our initial consultation.",
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
                        <h2 className="cta-title">Ready to Build Your Dream Team?</h2>
                        <p className="cta-description">
                            Partner with Regen ITEK to connect with exceptional talent that will drive your business forward.
                        </p>
                        <div className="cta-buttons">
                            <Link href="/contact" className="cta-button-primary">
                                Get Started
                            </Link>
                            <Link href="/contact" className="cta-button-secondary">
                                Schedule a Consultation
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    )
}
