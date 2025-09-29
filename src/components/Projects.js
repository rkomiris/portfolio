import React from 'react';
import resumeData from '../data/resumeData';
import './Projects.css';

/**
 * Displays a collection of portfolio projects. Each project card lists
 * the project name, description, technologies used and provides links to
 * the source code and a live demo (if available). Image paths should point
 * to files stored in the public/images directory or assets folder.
 */
function Projects() {
  const { projects } = resumeData;
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => {
          // Determine the image source. If the image property starts with
          // "http" we use it directly; otherwise we look under the public/images
          // folder. You can adjust this logic to suit your asset organization.
          const imageSrc = proj.image.startsWith('http')
            ? proj.image
            : `${process.env.PUBLIC_URL}/images/${proj.image}`;
          return (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                {/*
                  Use meaningful alt text without the word "image" to satisfy
                  accessibility guidelines. The JSX a11y plugin flags redundant
                  words like "image" in alt attributes, so we describe the
                  content instead. See:
                  https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
                */}
                <img
                  src={imageSrc}
                  alt={`Screenshot of ${proj.title}`}
                  className="project-image"
                />
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-description">{proj.description}</p>
              <ul className="project-tech-list">
                {proj.techStack.map((tech) => (
                  <li key={tech} className="project-tech-item">{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                {proj.repoLink && (
                  <a href={proj.repoLink} target="_blank" rel="noopener noreferrer">
                    Source
                  </a>
                )}
                {proj.demoLink && (
                  <a href={proj.demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;