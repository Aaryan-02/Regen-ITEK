"use client";

import React, { useState } from 'react';
import { FaUserTie, FaLaptopCode, FaChartLine, FaBriefcase, FaHeadset, FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Services6.css';

const Service6 = () => {
  const [activeTab, setActiveTab] = useState('staffing');

  const services = [
    {
      id: 'staffing',
      title: 'Staffing Solutions',
      icon: <FaUserTie size={36} className="service-icon" />,
      description: 'Our comprehensive staffing solutions are designed to streamline your hiring process.',
      features: [
        'Technical Talent Acquisition',
        'Contract-to-Hire Placements',
        'Executive Search',
        'Project-Based Staffing',
        'Remote Team Building'
      ],
      details: 'Our experienced recruiters leverage industry expertise and advanced screening methodologies to identify candidates who not only possess the required technical skills but also align with your company culture. We handle everything from initial sourcing to final placement, reducing your time-to-hire while maintaining exceptional quality standards.'
    },
    {
      id: 'development',
      title: 'Software Development',
      icon: <FaLaptopCode size={36} className="service-icon" />,
      description: 'Custom software solutions tailored to your unique business requirements.',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'Enterprise Software Solutions',
        'API Integration Services',
        'Legacy System Modernization'
      ],
      details: 'Our development team employs industry best practices and cutting-edge technologies to deliver scalable, secure, and performance-optimized solutions. We follow an agile methodology that ensures transparency throughout the development lifecycle, from initial concept to deployment and ongoing maintenance.'
    },
    {
      id: 'consulting',
      title: 'IT Consulting',
      icon: <FaChartLine size={36} className="service-icon" />,
      description: 'Strategic technology guidance to optimize your business operations.',
      features: [
        'Technology Assessment',
        'Digital Transformation Strategy',
        'IT Infrastructure Planning',
        'Security Audits',
        'Cloud Migration Strategy'
      ],
      details: 'Our consultants bring decades of combined experience across various industries to provide practical, actionable recommendations. We begin by deeply understanding your business goals, then develop comprehensive roadmaps that align technology initiatives with your strategic objectives, ensuring maximum ROI on your technology investments.'
    },
    {
      id: 'managed',
      title: 'Managed IT Services',
      icon: <FaServer size={36} className="service-icon" />,
      description: 'Comprehensive IT management to keep your systems running smoothly.',
      features: [
        '24/7 System Monitoring',
        'Network Management',
        'Cloud Infrastructure Support',
        'Cybersecurity Services',
        'Disaster Recovery Planning'
      ],
      details: 'Our proactive approach to IT management helps prevent issues before they impact your business. With round-the-clock monitoring, regular maintenance, and rapid response protocols, we ensure your critical systems maintain optimal performance. Our tiered service plans allow you to select the exact level of support your organization needs.'
    },
    {
      id: 'project',
      title: 'Project Management',
      icon: <FaBriefcase size={36} className="service-icon" />,
      description: 'Expert oversight to ensure your technology initiatives succeed.',
      features: [
        'Full Project Lifecycle Management',
        'Resource Allocation',
        'Risk Assessment & Mitigation',
        'Timeline & Budget Adherence',
        'Stakeholder Communication'
      ],
      details: 'Our certified project managers apply proven methodologies to plan, execute, and deliver technology projects on time and within budget. We establish clear milestones, transparent reporting mechanisms, and effective communication channels to keep all stakeholders informed and aligned throughout the project lifecycle.'
    },
    {
      id: 'support',
      title: 'Technical Support',
      icon: <FaHeadset size={36} className="service-icon" />,
      description: 'Responsive assistance for all your technology challenges.',
      features: [
        'End-User Help Desk',
        'Hardware Troubleshooting',
        'Software Support',
        'Network Issue Resolution',
        'Security Incident Response'
      ],
      details: 'Our dedicated support team offers multi-tiered technical assistance through various channels including phone, email, and live chat. We maintain comprehensive knowledge bases and employ ticket tracking systems to ensure efficient resolution of all issues, from routine troubleshooting to complex technical challenges.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Our Expertise</span>
          <h2 className="section-title">Comprehensive Technology Services</h2>
          <p className="section-description">
            From talent acquisition to complete technology solutions, we provide end-to-end services 
            to empower your business growth and digital transformation.
          </p>
        </div>

        {/* Services Navigation */}
        <div className="services-navigation">
          <div className="tab-container">
            {services.map(service => (
              <button
                key={service.id}
                className={`tab-button ${activeTab === service.id ? 'active' : ''}`}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Services Content */}
        {services.map(service => (
          activeTab === service.id && (
            <motion.div
              key={service.id}
              className="service-content"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Left Side - Content */}
              <motion.div className="service-details" variants={itemVariants}>
                <div className="icon-container">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <p className="service-text">{service.details}</p>
                
                <h4 className="features-title">Key Features</h4>
                <ul className="features-list">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="feature-item"
                      variants={itemVariants}
                    >
                      <span className="feature-bullet"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  className="learn-more-btn"
                  variants={itemVariants}
                >
                  Learn More
                  <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </motion.button>
              </motion.div>
              
              {/* Right Side - Illustration */}
              <motion.div
                className="service-image-container"
                variants={itemVariants}
              >
                <div className="service-image-wrapper">
                  <img
                    src={`/assets/img/services/${service.id}.jpg`}
                    alt={service.title}
                    className="service-image"
                    // onError={(e) => {
                    //   e.target.src = "/assets/img/services/placeholder.jpg";
                    // }}
                  />
                </div>
                
                <div className="why-choose-container">
                  <h4 className="why-choose-title">Why Choose Our {service.title}</h4>
                  <ul className="why-choose-list">
                    <li className="why-choose-item">
                      <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Industry-leading expertise with proven results</span>
                    </li>
                    <li className="why-choose-item">
                      <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Customized approach tailored to your needs</span>
                    </li>
                    <li className="why-choose-item">
                      <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Transparent communication and reporting</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )
        ))}

        {/* Stats Section */}
        {/* <div className="stats-section">
          <h3 className="stats-title">Why Businesses Trust Regen ITEK</h3>
          <div className="stats-container">
            {[
              { number: '500+', label: 'Clients Served' },
              { number: '1500+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '25+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="stat-number">{stat.number}</h4>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">Ready to transform your business?</h3>
            <p className="cta-description">
              Schedule a consultation with our experts to discuss your specific needs and discover how our services can elevate your business.
            </p>
            <div className="cta-buttons">
              <button className="primary-button">Schedule Consultation</button>
              <button className="secondary-button">View Case Studies</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service6;