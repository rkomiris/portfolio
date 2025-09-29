import React from 'react';
import resumeData from '../data/resumeData';
import profilePic from '../assets/profile.png';
import './Hero.css';

/**
 * Hero section of the portfolio. Introduces the person and provides a call
 * to action to download the résumé. Replace the profile image in
 * src/assets/profile.png with your own headshot.
 */
function Hero() {
  const { name, role, resumeLink } = resumeData.personal;
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src={profilePic} alt="Profile" className="hero-avatar" />
        <div className="hero-text">
          <h1>Hi, I'm {name}</h1>
          <h2>{role}</h2>
          <p className="hero-summary">{resumeData.summary}</p>
          <a href={resumeLink} className="btn" download>
            Download Résumé
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;