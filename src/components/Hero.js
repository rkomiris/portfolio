import React from 'react';
import resumeData from '../data/resumeData';
import profilePic from '../assets/profile.png';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  const { name, role, resumeLink } = resumeData.personal;
  const { positioning, focus, summary } = resumeData.profile;

  return (
    <div className="hero-container">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-eyebrow">Senior software engineer</span>
          <h1 className="hero-name">{name}</h1>
          <p className="hero-role">{role}</p>
          <p className="hero-positioning">{positioning}</p>
          <p className="hero-summary">{summary}</p>

          <div className="hero-focus">
            {focus.map((item) => (
              <span key={item} className="hero-tag">{item}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#case-studies" className="btn btn-primary">View Case Studies</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
            <a href={resumeLink} className="btn btn-ghost" download>
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="hero-frame"></div>
          <img src={profilePic} alt="Portrait of Rohan" className="hero-avatar" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
