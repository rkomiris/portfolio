import React from 'react';
import resumeData from '../data/resumeData';
import './Skills.css';

/**
 * Presents the skill categories defined in resumeData. Each category is rendered
 * with a heading and a list of individual skills.
 */
function Skills() {
  const { skills } = resumeData;
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-section">
            <h3 className="skill-title">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <ul className="skill-list">
              {items.map((skill) => (
                <li key={skill} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;