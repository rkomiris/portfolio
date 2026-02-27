import React from 'react';
import resumeData from '../data/resumeData';
import { motion } from 'framer-motion';
import './Experience.css';

function Experience() {
  const { caseStudies } = resumeData;

  return (
    <div className="case-studies-container">
      <motion.div
        className="case-studies-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Case Studies</h2>
        <p>Deep dives into systems where I led architecture, execution, and delivery.</p>
      </motion.div>

      <div className="case-studies-grid">
        {caseStudies.map((study) => (
          <motion.article
            key={study.title}
            className="case-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="case-meta">
              <span className="case-time">{study.timeframe}</span>
              <span className="case-context">{study.context}</span>
            </div>
            <h3>{study.title}</h3>
            <p className="case-problem"><strong>Problem:</strong> {study.problem}</p>

            <div className="case-section">
              <h4>Key decisions</h4>
              <ul>
                {study.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </div>

            <div className="case-section">
              <h4>Outcomes</h4>
              <ul>
                {study.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>

            <div className="case-stack">
              {study.stack.map((item) => (
                <span key={item} className="case-tag">{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Experience;
