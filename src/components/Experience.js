import React from 'react';
import resumeData from '../data/resumeData';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

/**
 * Modern Experience Section with Timeline
 */
function Experience() {
  const { experience } = resumeData;
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="timeline">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <div className="job-header">
                <h3>{job.position}</h3>
                <span className="job-date">{job.startDate} – {job.endDate}</span>
              </div>
              <h4 className="job-company">{job.company}, {job.location}</h4>
              <ul className="job-list">
                {job.accomplishments.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;