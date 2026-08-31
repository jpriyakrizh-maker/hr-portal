import React from 'react';
import {
  FaCalendarCheck,
  FaFileInvoiceDollar,
  FaWrench,
  FaAward,
  FaCheckDouble,
  FaShieldHalved
} from 'react-icons/fa6';
import SplitText from '../components/SplitText';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { servicesData } from '../data/servicesData';
import './Services.css';

const processSteps = [
  {
    step: '01',
    title: 'Easy Scheduling',
    description: 'Book online in 60 seconds or call our 24/7 emergency dispatch line directly.',
    icon: FaCalendarCheck
  },
  {
    step: '02',
    title: 'Thorough Inspection',
    description: 'Master plumbers inspect the issue with advanced acoustic and camera diagnostic gear.',
    icon: FaWrench
  },
  {
    step: '03',
    title: 'Transparent Pricing',
    description: 'We present clear upfront pricing with zero hidden charges before work begins.',
    icon: FaFileInvoiceDollar
  },
  {
    step: '04',
    title: 'Flawless Execution',
    description: 'We complete the repair cleanly and back all parts and labor with our 100% guarantee.',
    icon: FaAward
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Page Header with SplitText */}
      <section className="page-header">
        <div className="container text-center">
          <span className="page-header-tag" data-aos="fade-down">
            Comprehensive Plumbing Solutions
          </span>
          <h1 className="page-header-title">
            <SplitText
              text="Our Services"
              className="page-split-heading"
              delay={50}
            />
          </h1>
          <p className="page-header-subtitle" data-aos="fade-up" data-aos-delay="200">
            Professional, dependable plumbing services tailored for homeowners, property managers, and businesses.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-main-section">
        <div className="container">
          <div className="services-responsive-grid">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Workflow Process */}
      <section className="service-process-section">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">Our Simple 4-Step Process</h2>
            <p className="section-subtitle">
              We make resolving your plumbing headaches effortless, fast, and stress-free.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="process-card"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <span className="process-step-num">{item.step}</span>
                  <div className="process-icon-box">
                    <Icon />
                  </div>
                  <h3 className="process-card-title">{item.title}</h3>
                  <p className="process-card-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="service-guarantee-section">
        <div className="container">
          <div className="guarantee-box" data-aos="fade-up">
            <div className="guarantee-icon-wrap">
              <FaShieldHalved />
            </div>
            <div className="guarantee-content">
              <h3>The Plumbing X 100% Workmanship Warranty</h3>
              <p>
                Every pipe repair, drain clearing, and fixture installation is backed by our comprehensive warranty. If it is not done right the first time, we return and make it right at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Services;
