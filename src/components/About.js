import React from 'react';
import resumeData from '../data/resumeData';
import { motion } from 'framer-motion';
import './About.css';

/**
 * Modern About Section
 */
function About() {
  const { summary, education } = resumeData;
  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p className="about-description">{summary}</p>

        <h3>Education</h3>
        <div className="education-grid">
          {education.map((ed, index) => (
            <motion.div
              key={index}
              className="education-card"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="edu-degree">{ed.degree}</h4>
              <p className="edu-institution">{ed.institution}</p>
              <p className="edu-location">{ed.location}</p>
              <span className="edu-date">{ed.date}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default About;