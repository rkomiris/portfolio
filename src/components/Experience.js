import React from 'react';
import resumeData from '../data/resumeData';
import './Experience.css';

/**
 * Renders the work experience timeline defined in resumeData. Each entry
 * displays the role, company, dates and a list of accomplishments.
 */
function Experience() {
  const { experience } = resumeData;
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="job-card">
          <div className="job-header">
            <h3>{job.position}</h3>
            <span>{job.startDate} – {job.endDate}</span>
          </div>
          <h4 className="job-company">{job.company}, {job.location}</h4>
          <ul className="job-list">
            {job.accomplishments.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;