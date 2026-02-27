import React from 'react';
import resumeData from '../data/resumeData';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  const { principles, workStyle } = resumeData;

  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>How I Work</h2>
        <p className="about-intro">
          I care about building systems that earn trust in production. That means clear automation boundaries,
          observable workflows, and decisions tied to evidence.
        </p>

        <div className="principles-grid">
          {principles.map((principle) => (
            <div key={principle.title} className="principle-card">
              <h3>{principle.title}</h3>
              <p>{principle.detail}</p>
            </div>
          ))}
        </div>

        <div className="workstyle">
          <h3>Working style</h3>
          <ul>
            {workStyle.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
