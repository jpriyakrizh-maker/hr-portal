import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import './About.css';

export default function About() {
  const { showToast } = useShop();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all fields', null, 'Required fields missing');
      return;
    }

    setIsSubmitted(true);
    showToast(
      `Thank you, ${formData.name}!`,
      null,
      'Your message has been sent to our floral studio.'
    );
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className="about-page">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-rose" style={{ top: '6%', right: '5%' }} />
      <div className="ambient-glow glow-gold" style={{ top: '45%', left: '4%' }} />

      {/* =========================================================================
          ABOUT HERO
          ========================================================================= */}
      <section className="about-hero-section">
        <div className="container about-hero-content" data-aos="fade-up" data-aos-duration="900">
          <div className="hero-star-deco" data-aos="zoom-in" data-aos-delay="200">
            ✦
          </div>

          <h1 className="about-hero-title">OUR STORY</h1>

          <p className="about-hero-subtitle">
            Flowers made with care, created for beautiful moments.
          </p>

          <div className="about-hero-divider">
            <span className="star-line">───────</span>
            <span className="star-point">✦</span>
            <span className="star-line">───────</span>
          </div>
        </div>
      </section>

      <section className="story-section section">
        <div className="container story-grid">
          {/* LEFT: Large Flower Image */}
          <div
            className="story-image-wrap"
            data-aos="fade-right"
            data-aos-duration="950"
          >
            <div className="story-image-frame">
              <img
                src="https://m.media-amazon.com/images/I/61+5F9v-CZL._AC_UF894,1000_QL80_.jpg"
                alt="Artisanal florist crafting a bouquet"
                className="story-image"
              />
              <div className="story-image-border" />
              <div className="story-floating-badge">
                <span className="story-badge-icon">✿</span>
                <div className="story-badge-text">
                  <strong>BOTANICAL ARTISTRY</strong>
                  <span>Handcrafted Daily</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Story Narrative */}
          <div
            className="story-content"
            data-aos="fade-left"
            data-aos-duration="950"
            data-aos-delay="200"
          >
            <div className="section-label">
              <span className="star-point">✦</span>
              <span className="label-text">THE BLOOMÉ ESSENCE</span>
            </div>

            <h2 className="story-heading">
              Bloomé began with a simple love for beautiful flowers.
            </h2>

            <div className="story-paragraphs">
              <p className="story-lead">
                Every blossom tells a story of morning dew, patience, and seasonal transformation. We believe flowers are not merely decorations—they are quiet expressions of tenderness, celebrations of milestone victories, and gentle comforts.
              </p>
              <p>
                From hand-selecting the freshest stems at dawn from ethical local nurseries to binding each arrangement with raw silk ribbons, our team approaches floristry as an intimate art form.
              </p>
              <p>
                Whether celebrating a grand wedding, sending a spontaneous gesture of affection, or gracing a dining table, our handmade floral designs are crafted to create unforgettable, memorable moments.
              </p>
            </div>

            <div className="story-signature">
              <span className="sig-quote">"Crafted with tenderness, delivered with love."</span>
              <div className="sig-author">— The Bloomé Floral Atelier</div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Star Divider */}
      <div className="container" data-aos="zoom-in">
        <div className="star-divider">✦</div>
      </div>

      {/* =========================================================================
          OUR VALUES
          ========================================================================= */}
      <section className="values-section section">
        <div className="container">
          <div className="values-header" data-aos="fade-up">
            <div className="section-label">
              <span className="star-point">✦</span>
              <span className="label-text">OUR PHILOSOPHY</span>
            </div>
            <h2 className="values-heading">WHAT WE BELIEVE</h2>
            <p className="values-subheading">The foundational principles behind every stem we arrange.</p>
          </div>

          <div className="values-grid">
            {/* Value Card 1 */}
            <div className="value-card" data-aos="fade-up" data-aos-delay="100">
              <div className="value-icon-box">
                <span className="value-icon">✦</span>
              </div>
              <h3 className="value-title">FRESHNESS</h3>
              <p className="value-description">
                Fresh blooms selected with care from sustainable organic growers every sunrise.
              </p>
              <div className="value-card-border" />
            </div>

            {/* Value Card 2 */}
            <div className="value-card" data-aos="fade-up" data-aos-delay="200">
              <div className="value-icon-box">
                <span className="value-icon">✿</span>
              </div>
              <h3 className="value-title">CREATIVITY</h3>
              <p className="value-description">
                Unique floral designs for every moment, merging sculptural forms with natural romantic textures.
              </p>
              <div className="value-card-border" />
            </div>

            {/* Value Card 3 */}
            <div className="value-card" data-aos="fade-up" data-aos-delay="300">
              <div className="value-icon-box">
                <span className="value-icon">♡</span>
              </div>
              <h3 className="value-title">CARE</h3>
              <p className="value-description">
                Every arrangement is prepared with attention, wrapped with eco-friendly textiles, and nurtured to endure.
              </p>
              <div className="value-card-border" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT SECTION
          ========================================================================= */}
      <section className="contact-section section">
        <div className="container contact-container">
          <div className="contact-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="contact-grid">
              {/* Left Column: Contact Info */}
              <div className="contact-info-col">
                <div className="section-label">
                  <span className="star-point">✦</span>
                  <span className="label-text">GET IN TOUCH</span>
                </div>

                <h2 className="contact-heading">LET'S CONNECT</h2>
                <p className="contact-subheading">We'd love to hear from you.</p>

                <p className="contact-intro">
                  Looking for custom floral styling for weddings, private dinners, or custom gifting? Reach out directly to our studio.
                </p>

                <div className="contact-details-list">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div className="contact-item-text">
                      <strong>Studio Location</strong>
                      <span>Theni, Tamil Nadu</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <span className="contact-icon">✉</span>
                    <div className="contact-item-text">
                      <strong>Email Inquiries</strong>
                      <span>hello@bloome.com</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <span className="contact-icon">☎</span>
                    <div className="contact-item-text">
                      <strong>Direct Studio Line</strong>
                      <span>+91 98765 43210</span>
                    </div>
                  </div>
                </div>

                <div className="contact-hours">
                  <span className="hours-star">✦</span>
                  <span>Monday – Saturday • 9:00 AM – 7:00 PM IST</span>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="contact-form-col">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Priyadharshini"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Tell us about your event, custom arrangement, or inquiry..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-bloome contact-submit-btn"
                  >
                    <span>{isSubmitted ? 'MESSAGE SENT ✓' : 'SEND MESSAGE'}</span>
                    <i className="bi bi-send"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
