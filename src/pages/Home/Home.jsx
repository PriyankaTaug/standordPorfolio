import React from 'react'
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
          <img className="bg-image" src="src/assets/profile.png" alt="Profile" />
        
         <h3 className="right-text">SOFTWARE DEVELOPER</h3>
          <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta
          laoreet enim, sit amet cursus neque vulputate ac. Fusce sem ante,
          mollis vitae mollis eu, cursus at elit.
        </p>
       
        </div>
        

        {/* Social Media Icons */}
        

        {/* View Projects Button */}
        <button className="view-projects">VIEW PROJECTS</button>
      </div>
    </div>
  </div>
  )
}

export default Home
