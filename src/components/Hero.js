import React from 'react';
import resumeData from '../data/resumeData';
import profilePic from '../assets/profile.png';
import { motion } from 'framer-motion';
import './Hero.css';

/**
 * Modern Hero Section with Animations
 */
function Hero() {
  const { name, role, resumeLink } = resumeData.personal;

  return (
    <div className="hero-container">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-greeting">Hi, I'm</span>
          <h1 className="hero-name">{name}</h1>
          <h2 className="hero-role">{role}</h2>
          <p className="hero-summary">{resumeData.summary}</p>
          <motion.div
            className="hero-actions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={resumeLink} className="btn btn-primary" download>
              Download Résumé
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="blob"></div>
          <img src={profilePic} alt="Profile" className="hero-avatar" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;