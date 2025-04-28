import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    title: 'Airline Reservations and Ticketing',
    description: 'Professional airline ticketing services for all your travel needs. We handle both domestic and international bookings with competitive rates.',
    image: '/images/t1.jpg'
  },
  {
    title: 'Travel Insurance',
    description: 'Comprehensive travel insurance coverage to protect you during your journey. We offer various packages to suit your specific needs.',
    image: '/images/t2.jpg'
  },
  {
    title: 'Airport Escort Services',
    description: 'Reliable transportation services to and from the airport. Our professional drivers ensure a smooth and comfortable journey.',
    image: '/images/t4.jpg'
  },
  {
    title: 'Visa Consultation',
    description: 'Expert guidance and assistance with visa applications and documentation. We help simplify the visa process for various destinations.',
    image: '/images/t3.jpg'
  },
  {
    title: 'Group and Executive Ticketing',
    description: 'Specialized door-to-door airline ticketing services for groups and corporate executives. We handle all aspects of group travel arrangements.',
    image: '/images/t5.jpg'
  },
  {
    title: 'Industrial Internship',
    description: 'Training programs for airline ticketing personnel and travel consultants. Gain practical experience in the travel industry.',
    image: '/images/t6.jpg'
  },
  {
    title: 'Intensive Training Courses',
    description: '3-month intensive courses in airline ticketing and reservation, including internship and on-the-job training. Comprehensive curriculum covering all aspects of travel management.',
    image: '/images/t7.jpg'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <div className="services">
      <div className="services-main-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
        >
          Our Services
        </motion.h1>
        <motion.div
          className="services-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: '0 18px 40px rgba(0,0,0,0.13)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="service-image" style={{ backgroundImage: `url(${service.image})` }} />
              <div className="service-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <section className="services-bottom-section">
          <h2>Ready to plan your next journey?</h2>
          <p>Contact us today for personalized travel solutions, or explore more about our services and expertise.</p>
          <a href="/contact" className="services-cta-btn">Contact Us</a>
        </section>
      </div>
    </div>
  );
};

export default Services; 