"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, Briefcase, Award, TrendingUp, Clock, Target } from "lucide-react"

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

const ServiceComponent = () => {
  return (
    <div className="service3 sp">
      <div className="container">

        <div className="row">
          <AnimatedSection className="services-header">
            <span className="services-badge">Our Services</span>
            <h2 className="services-heading">Comprehensive Recruitment Solutions</h2>
            <p className="services-description">
              We offer tailored hiring solutions that align with your unique business goals, helping you build
              high-performing teams that drive growth and innovation.
            </p>
          </AnimatedSection>
        </div>

        {/* <div className="space30"></div> */}
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="" data-aos="fade-right" data-aos-duration="700">
              <div className="service3-box">
                <div className="">
                  <div className="icon">
                    <Users className="service-icon" />
                  </div>
                </div>
                <div className="heading3">
                  <h4>Permanent Recruitment</h4>
                  <div className="space16"></div>
                  <p>Find the perfect long-term additions to your team with our thorough permanent recruitment services.</p>
                </div>
              </div>
            </div>

            <div className="" data-aos="fade-right" data-aos-duration="1100">
              <div className="service3-box">
                <div className="">
                  <div className="icon">
                    <Briefcase className="service-icon" />
                  </div>
                </div>
                <div className="heading3">
                  <h4>Contract Staffing</h4>
                  <div className="space16"></div>
                  <p>Access specialized talent for short-term projects or seasonal demands with flexible contract staffing.</p>
                </div>
              </div>
            </div>

            <div className="" data-aos="fade-right" data-aos-duration="900">
              <div className="service3-box">
                <div className="">
                  <div className="icon">
                    <Award className="service-icon" />
                  </div>
                </div>
                <div className="heading3">
                  <h4>Executive Search</h4>
                  <div className="space16"></div>
                  <p>Identify and attract top-tier leadership talent to drive your organization forward.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-4">
            <div className="main-image image-anime">
              <Image src="/assets/img/service/services.jpg" alt="img" width={416} height={577} />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="" data-aos="fade-left" data-aos-duration="700">
              <div className="service3-box">
                <div className="">
                  <div className="icon">
                    <TrendingUp className="service-icon" />
                  </div>
                </div>
                <div className="heading3">
                  <h4>Project-Based Hiring</h4>
                  <div className="space16"></div>
                  <p>Assemble specialized teams for specific projects with our project-based hiring solutions.</p>
                </div>
              </div>
            </div>

            <div className="" data-aos="fade-left" data-aos-duration="1100">
              <div className="service3-box">
                <div className="">
                  <div className="icon">
                    <Target className="service-icon" />
                  </div>
                </div>
                <div className="heading3">
                  <h4>Talent Acquisition</h4>
                  <div className="space16"></div>
                  <p>Develop comprehensive strategies to attract and retain the best talent in your industry.</p>
                </div>
              </div>
            </div>

            <div className="" data-aos="fade-left" data-aos-duration="900">
              <div className="service3-box">
                <div className="">
                  <div className="icon">
                    <Clock className="service-icon" />
                  </div>
                </div>
                <div className="heading3">
                  <h4>HR Consulting</h4>
                  <div className="space16"></div>
                  <p>Optimize your HR processes and policies with our expert consulting services.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="services-cta">
            <Link href="/service" className="btn-primary">
              View All Services
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;