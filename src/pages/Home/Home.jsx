import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      {/* Main Content */}
      <div className="row">
        
        {/* Left Section (Animated Name) */}
        <div className="left-section">
          <h1 className="left-font">
            <div className="line">
              <span className="letter">P</span>
              <span className="letter">R</span>
              <span className="letter">I</span>
            </div>
            <div className="line">
              <span className="letter">Y</span>
              <span className="letter">A</span>
            </div>
            <div className="line">
              <span className="letter">N</span>
              <span className="letter">K</span>
            </div>
            <div className="line">
              <span className="letter">A</span>
            </div>
          </h1>
        </div>

        {/* Right Section (Profile & Details) */}
        <div className="right-section">
          <div className="img-container">
            {/* Profile Image with Overlay */}
            <img className="bg-image" src="src/assets/profile.png" alt="Profile" />
            
            {/* Overlay Effect */}
            <div className="overlay"></div>

            {/* Text on Image */}
            <div className="div1">
              <h3 className="right-text">SOFTWARE DEVELOPER</h3>
            </div>
            <div className="div2">
             
              I am a full-stack Python developer with 2 years of experience, specializing in Django, Flutter, and REST API development.  I have worked on various projects  and delivering scalable solutions.
             
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
           <a href='https://github.com/PriyankaTaug' target='_blank'></a>
           <i className="fab fa-github "></i>
           <a href='linkedin.com/in/priyanka-t-960b53266/' target='_blank'></a>
           <i className="fab fa-linkedin "></i>
           <a href='linkedin.com/in/priyanka-t-960b53266/' target='_blank'></a>
           <i className="fab fa-youtube "></i>
          </div>

          {/* View Projects Button */}
        <div className='view-p'>  
          <button className="view-projects">VIEW PROJECTS</button></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
