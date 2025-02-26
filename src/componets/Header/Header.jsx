import React from 'react'
import './Header.css'
const Header = () => {
  return (
 
      <header className='header'>
        <nav>
        <ul className='nav_list'>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/contact">SKILLS</a></li>
          <li><a href="/contact">SERVICES</a></li>
          <li><a href="/contact">PROJECTS</a></li>
          <li><a href="/contact">TESTIMONIALS</a></li>
        </ul>
        </nav>
      </header>
   
  )
}

export default Header
