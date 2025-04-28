import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="about-hero">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Plex Travels
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your trusted partner in travel and tourism
        </motion.p>
      </section>

      <section className="about-content">
        <motion.div 
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <div className="section-icon">
            <i className="fas fa-bookmark"></i>
          </div>
          <h2>Our Story</h2>
          <p>
            Plex Travels was founded with a vision to provide exceptional travel services
            to our clients. With over 10 years of experience in the industry, we have
            built a reputation for reliability, professionalism, and customer satisfaction.
          </p>
        </motion.div>

        <motion.div 
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <div className="section-icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make travel planning seamless and enjoyable for our clients.
            We strive to provide personalized services that cater to individual needs and
            preferences, ensuring memorable travel experiences.
          </p>
        </motion.div>

        <motion.div 
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <div className="section-icon">
            <i className="fas fa-users"></i>
          </div>
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced travel professionals who are passionate about
            creating the perfect travel experience for our clients. We are dedicated to
            providing expert advice and support throughout your journey.
          </p>
        </motion.div>
      </section>

      <motion.section
        className="about-stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="stats-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div 
            className="stat-item"
            variants={fadeInUp}
          >
            <h3>10+</h3>
            <p>Years of Experience</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            variants={fadeInUp}
          >
            <h3>50+</h3>
            <p>Happy Customers</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            variants={fadeInUp}
          >
            <h3>10+</h3>
            <p>Destinations</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="about-team"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Meet Our Travel Expert</h2>
        <motion.div 
          className="team-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div 
            className="team-member"
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="team-image" style={{ backgroundColor: '#E3F4F4' }}></div>
            <h3>John Sackey</h3>
            <p>Travel Expert</p>
          </motion.div>
          <motion.div 
            className="team-member"
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="team-image" style={{ backgroundColor: '#D7E5CA' }}></div>
            <h3>Abena Mensah</h3>
            <p>Visa Specialist</p>
          </motion.div>
          <motion.div 
            className="team-member"
            variants={fadeInUp}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="team-image" style={{ backgroundColor: '#F8E8EE' }}></div>
            <h3>Kwame Osei</h3>
            <p>Customer Relations</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="about-inspiration-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Travel Inspiration</h2>
        <p>Watch this short travel video for a burst of wanderlust and creative travel ideas!</p>
        <div className="about-inspiration-video-wrapper">
          <iframe
            className="about-inspiration-video"
            src="https://www.youtube.com/embed/ixIzimI35SE?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&playlist=ixIzimI35SE"
            title="Travel Inspiration Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      <motion.section
        className="about-cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="cta-content">
          <h2>Ready to Explore the World?</h2>
          <p>Contact us today to start planning your next unforgettable journey.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About; 