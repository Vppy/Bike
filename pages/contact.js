import React from "react";
import "./contact.css"; // Import the styles
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"; // Font Awesome for icons

const Contact = () => {
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <a href="https://www.boongg.com" className="logo">
            Bike Rental
          </a>
          <nav className="nav-links">
            <a href="https://www.boongg.com">Home</a>
            <a href="https://www.boongg.com/about">About</a>
            <a href="https://www.boongg.com/contact">Contact</a>
            <a href="https://www.boongg.com/login">Login</a>
          </nav>
        </div>
      </header>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-item">
              <i className="fas fa-map-marker-alt info-icon"></i>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>123 Bike Street, Downtown<br />Mumbai, Maharashtra 400001</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone info-icon"></i>
              <div className="info-content">
                <h3>Phone Number</h3>
                <p>+91 98765 43210<br />+91 98765 43211</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope info-icon"></i>
              <div className="info-content">
                <h3>Email Address</h3>
                <p>info@bikerental.com<br />support@bikerental.com</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Your trusted partner in bike rentals, providing quality service since 2015.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const handleSubmit = (event) => {
  event.preventDefault();
  alert("Thank you for your message. We will get back to you soon!");
};

export default Contact;
