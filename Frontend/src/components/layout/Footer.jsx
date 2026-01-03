import React from 'react';
import { Instagram, MessageCircle, Linkedin, Mail } from 'lucide-react';
import logo from '../../assets/images/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Branding Section */}
        <div className="footer-branding">
          <div className="footer-logo-container">
            <img src={logo} alt="CSI Sanjivani Logo" className="footer-logo" />
          </div>
          <div className="footer-brand-text">
            <h3 className="footer-brand-name">CSI Sanjivani</h3>
            <p className="footer-brand-subtitle">Computer Society of India</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://wa.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <Mail size={18} className="contact-icon" />
          <a href="mailto:contact@csisanjivani.edu" className="contact-email">
            contact@csisanjivani.edu
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="footer-copyright">
          <p>© 2025 CSI Sanjivani Student Committee.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
