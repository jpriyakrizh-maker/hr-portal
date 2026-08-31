import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FaLocationDot,
  FaPhoneVolume,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCircleCheck,
  FaTriangleExclamation,
  FaShieldHalved,
  FaHeadset
} from 'react-icons/fa6';
import SplitText from '../components/SplitText';
import './Contact.css';

const servicesOptions = [
  'Faucet & Leak Repair',
  'Remodeling Service',
  'Drain Cleaning & Repair',
  'Sewer Repair & Cleaning',
  'Water Line Repair',
  'Gas Line Services',
  'Emergency Plumbing Service',
  'Other Plumbing Request'
];

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.state && location.state.selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: location.state.selectedService
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a plumbing service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your plumbing request';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 900);
  };

  return (
    <div className="contact-page">
      {/* Header Banner with SplitText */}
      <section className="page-header">
        <div className="container text-center">
          <span className="page-header-tag" data-aos="fade-down">
            We're Ready to Help 24/7
          </span>
          <h1 className="page-header-title">
            <SplitText
              text="Get In Touch"
              className="page-split-heading"
              delay={50}
            />
          </h1>
          <p className="page-header-subtitle" data-aos="fade-up" data-aos-delay="200">
            Have an urgent pipe emergency or planning a major remodeling project? Contact our master plumbers today.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Contact Details */}
            <div className="contact-info-col" data-aos="fade-right" data-aos-duration="800">
              <span className="section-tag">Direct Support</span>
              <h2 className="contact-info-title">Let's Discuss Your Plumbing Project</h2>
              <p className="contact-info-desc">
                Our service technicians and customer care specialists are on call around the clock. Reach out via phone, email, or visit our local headquarters.
              </p>

              <div className="contact-cards-list">
                {/* Address */}
                <div className="contact-info-card">
                  <div className="info-icon-box">
                    <FaLocationDot />
                  </div>
                  <div className="info-card-text">
                    <h4>Service Headquarters</h4>
                    <p>742 Evergreen Terrace, Suite 100, Springfield, IL 62704</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-card">
                  <div className="info-icon-box phone-icon-box">
                    <FaPhoneVolume />
                  </div>
                  <div className="info-card-text">
                    <h4>Direct Dispatch Line</h4>
                    <p>
                      <a href="tel:8005557473">(800) 555-PIPE / (800) 555-7473</a>
                    </p>
                    <span className="info-note">Toll-free 24/7 hotline</span>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-card">
                  <div className="info-icon-box">
                    <FaEnvelope />
                  </div>
                  <div className="info-card-text">
                    <h4>Email Inquiries</h4>
                    <p>
                      <a href="mailto:support@plumbingx.com">support@plumbingx.com</a>
                    </p>
                    <span className="info-note">Quick response within 1 hour</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="contact-info-card">
                  <div className="info-icon-box">
                    <FaClock />
                  </div>
                  <div className="info-card-text">
                    <h4>Working Hours</h4>
                    <p>Monday - Friday: 7:00 AM – 8:00 PM</p>
                    <p>Saturday - Sunday: 8:00 AM – 6:00 PM</p>
                    <span className="info-badge">Emergency Service: 24 Hours / 7 Days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form with AOS zoom-in */}
            <div className="contact-form-col">
              <div
                className="contact-form-card"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                <div className="form-card-header">
                  <h3>Request A Free Quote</h3>
                  <p>Fill out the details below and we'll confirm your appointment promptly.</p>
                </div>

                {submitted ? (
                  <div className="form-success-banner">
                    <div className="success-icon-wrap">
                      <FaCircleCheck />
                    </div>
                    <h4>Thank You! Your Request Has Been Sent.</h4>
                    <p>
                      One of our certified plumbing specialists will review your project details and call you back within 15 minutes.
                    </p>
                    <button
                      className="btn-primary"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form className="quote-form" onSubmit={handleSubmit} noValidate>
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="name">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? 'error' : ''}`}
                      />
                      {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    {/* Email & Phone Row */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">
                          Email Address <span className="req">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`form-input ${errors.email ? 'error' : ''}`}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">
                          Phone Number <span className="req">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`form-input ${errors.phone ? 'error' : ''}`}
                        />
                        {errors.phone && <span className="error-text">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Select Service */}
                    <div className="form-group">
                      <label htmlFor="service">
                        Select Service <span className="req">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`form-input form-select ${errors.service ? 'error' : ''}`}
                      >
                        <option value="">-- Choose a Plumbing Service --</option>
                        {servicesOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && <span className="error-text">{errors.service}</span>}
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label htmlFor="message">
                        Describe Your Issue / Project <span className="req">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Please tell us about the issue, location, or preferred appointment time..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                      ></textarea>
                      {errors.message && <span className="error-text">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-primary form-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FaPaperPlane />
                        </>
                      )}
                    </button>

                    <div className="form-privacy-note">
                      <FaShieldHalved /> Your information is secure and never shared with third parties.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
