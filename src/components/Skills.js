import React from 'react';
import resumeData from '../data/resumeData';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  const { capabilities } = resumeData;

  return (
    <div className="skills-container">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Capabilities</h2>
        <p>How I translate complex systems into reliable, secure outcomes.</p>
      </motion.div>

      <div className="skills-grid">
        {capabilities.map((group) => (
          <motion.div
            key={group.title}
            className="skill-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="skill-title">{group.title}</h3>
            <ul className="skill-list">
              {group.items.map((skill) => (
                <li key={skill} className="skill-item">{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
