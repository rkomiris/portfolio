import React from 'react';
import resumeData from '../data/resumeData';
import { motion } from 'framer-motion';
import './Impact.css';

function Impact() {
  const { impactHighlights } = resumeData;

  return (
    <div className="impact-container">
      <motion.div
        className="impact-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Impact Highlights</h2>
        <p>Selected outcomes from building cloud-native platforms and AI copilots.</p>
      </motion.div>

      <div className="impact-grid">
        {impactHighlights.map((item) => (
          <motion.div
            key={item.metric}
            className="impact-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="impact-metric">{item.metric}</div>
            <p className="impact-label">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Impact;
