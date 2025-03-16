import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <nav className='nav'>
        <div className='menu-icon' onClick={toggleMenu}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`nav_list ${menuOpen ? 'show' : ''}`}>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/contact">SKILLS</a></li>
          <li><a href="/services">SERVICES</a></li>
          <li><a href="/projects">PROJECTS</a></li>
          <li><a href="/testimonials">TESTIMONIALS</a></li>
        </ul>
      </nav>
      <button className='header-button'>CONTACT ME</button>
    </header>
  );
};

export default Header;