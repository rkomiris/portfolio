import React from 'react';
import resumeData from '../data/resumeData';
import './About.css';

/**
 * Provides a brief introduction and lists your education. The content here
 * references the summary and education arrays defined in resumeData.
 */
function About() {
  const { summary, education } = resumeData;
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p className="about-description">{summary}</p>
      <h3>Education</h3>
      <ul className="education-list">
        {education.map((ed, index) => (
          <li key={index} className="education-item">
            <strong>{ed.degree}</strong> – {ed.institution}, {ed.location} ({ed.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;