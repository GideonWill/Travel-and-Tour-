import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import './Home.css';

const Home = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    fullScreen: false,
    background: {
      color: {
        value: "transparent"
      }
    },
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.3,
        random: true
      },
      size: {
        value: 2,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    },
    retina_detect: true
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div
      className="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: "url('/images/t6.jpg') center center/cover no-repeat fixed"
      }}
    >
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="particles"
        />
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>Welcome to Plex Travels</motion.h1>
          <motion.p variants={fadeInUp}>Your trusted partner in travel and tourism</motion.p>
          <motion.div 
            className="hero-buttons"
            variants={fadeInUp}
          >
            <Link to="/services" className="cta-button primary">
              Explore Our Services
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="stats-section"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div className="stats-container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          <motion.div 
            className="stat-item"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3><CountUp end={2} duration={2} enableScrollSpy scrollSpyOnce /></h3>
            <p>Years of Experience</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3><CountUp end={50} duration={2} enableScrollSpy scrollSpyOnce /></h3>
            <p>Happy Customers</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3><CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce /></h3>
            <p>Destinations</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="featured-services"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <h2>Our Featured Services</h2>
          <p>Discover our comprehensive range of travel solutions</p>
        </div>
        <motion.div className="services-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          <motion.div 
            className="service-card"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="service-image" style={{ backgroundImage: "url('/images/t1.jpg')" }} />
            <div className="service-content">
              <h3>Airline Reservations</h3>
              <p>Professional ticketing services for all your travel needs</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
          </motion.div>
          <motion.div 
            className="service-card"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="service-image" style={{ backgroundImage: "url('/images/t2.jpg')" }} />
            <div className="service-content">
              <h3>Travel Insurance</h3>
              <p>Comprehensive coverage for your peace of mind</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
          </motion.div>
          <motion.div 
            className="service-card"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="service-image" style={{ backgroundImage: "url('/images/t4.jpg')" }} />
            <div className="service-content">
              <h3>Airport Escort Services</h3>
              <p>Reliable transportation to and from the airport</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="testimonials"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Hear from our satisfied customers</p>
        </div>
        <motion.div className="testimonials-grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          <motion.div 
            className="testimonial-card"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="quote">"</div>
            <p>Plex Travels made my business trip seamless. Their attention to detail is exceptional!</p>
            <div className="client-info">
              <h4>Emmanuel Okafor</h4>
              <p>Business Executive</p>
            </div>
          </motion.div>
          <motion.div 
            className="testimonial-card"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="quote">"</div>
            <p>The best travel agency I've worked with. Their customer service is outstanding.</p>
            <div className="client-info">
              <h4>Grace Mensah</h4>
              <p>Frequent Traveler</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="cta-content"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2>Ready to Plan Your Next Journey?</h2>
          <p>Contact us today for personalized travel solutions tailored to your needs</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">
              Get in Touch
            </Link>
            <a href="tel:0551252706" className="cta-button secondary">
              Call Us Now
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home; 