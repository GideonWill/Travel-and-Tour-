import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  return (
    <motion.div 
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
        >
          <h2>Get in Touch</h2>
          <div className="contact-details">
            <div className="contact-item">
              <h3><i className="fas fa-phone-alt"></i> Phone Numbers</h3>
              <p>0551252706</p>
              <p>0278018800</p>
              <p>0302257519</p>
            </div>
            <div className="contact-item">
              <h3><i className="fas fa-envelope"></i> Email</h3>
              <p>twashu@yahoo.com</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="contact-form"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2>Send us a Message</h2>
          <form
            action="https://formspree.io/f/mgvkvqed"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required aria-label="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required aria-label="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" aria-label="Phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required aria-label="Message"></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 