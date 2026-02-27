import React, { useState, useEffect } from 'react';
import resumeData from '../data/resumeData';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBar.css';

function NavBar() {
  const { name } = resumeData.personal;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Impact', href: '#impact' },
    { title: 'Case Studies', href: '#case-studies' },
    { title: 'How I Work', href: '#about' },
    { title: 'Capabilities', href: '#capabilities' },
    { title: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          {name.split(' ')[0]}<span>.</span>
        </a>

        <button
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link) => (
            <li key={link.title} className="nav-item">
              <a href={link.href} className="nav-links" onClick={() => setIsOpen(false)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
