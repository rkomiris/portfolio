import React from 'react';
import resumeData from '../data/resumeData';
import { motion } from 'framer-motion';
import './Skills.css';

/**
 * Modern Skills Section using Grid and Flex
 */
function Skills() {
  const { skills } = resumeData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            className="skill-section"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="skill-title">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <motion.ul
              className="skill-list"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {items.map((skill) => (
                <motion.li key={skill} className="skill-item" variants={item}>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;