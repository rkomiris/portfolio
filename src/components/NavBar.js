import React from 'react';
import resumeData from '../data/resumeData';
import './NavBar.css';

/**
 * Primary navigation bar. Anchors link to different sections in the page.
 * Feel free to extend or replace this component with your own styling or
 * navigation logic. The links correspond to ids defined in App.js.
 */
function NavBar() {
  const { name } = resumeData.personal;
  return (
    <nav className="navbar">
      <div className="navbar-brand">{name}</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;