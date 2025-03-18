import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="/">PRIYANKA</a>
        </div>
        
        {/* Desktop navigation */}
        <ul className="nav-menu">
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Skills</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Testimonials</a></li>
        </ul>
        <button className='home-button1'>Contact Us</button>
        {/* Mobile hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        {/* Mobile menu */}
        <ul className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="mobile-item"><a href="#" className="mobile-link">Home</a></li>
          <li className="mobile-item"><a href="#" className="mobile-link">About</a></li>
          <li className="mobile-item"><a href="#" className="mobile-link">Services</a></li>
          <li className="mobile-item"><a href="#" className="mobile-link">Portfolio</a></li>
          <li className="mobile-item"><a href="#" className="mobile-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;