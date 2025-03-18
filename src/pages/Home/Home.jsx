import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import * as THREE from 'three';

const ParticleBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(renderer.domElement);
    } catch (error) {
      console.error("Failed to initialize Three.js renderer:", error);
      return;
    }
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x0066cc,
      transparent: true,
      opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 5;
    
    // Animation
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      if (particlesMesh) {
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Resize handler
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      if (containerRef.current && renderer && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      if (particlesGeometry) particlesGeometry.dispose();
      if (particlesMaterial) particlesMaterial.dispose();
      if (scene && particlesMesh) scene.remove(particlesMesh);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    />
  );
};

const Home = () => {
 
  return (
    <>
      <ParticleBackground />
      
      <div className='row-container' >
        <div className='column2'>
          <h2 className='home-h2'>Full stack Developer</h2>
          <p className='home-p'>I specialize in crafting scalable web applications and intuitive user interfaces. With expertise in modern development practices, I transform complex problems into elegant, efficient, and maintainable solutions.</p>
          <div className='button1'>
            <button className='home-button'>View Projects</button>  

            <button className='home-button2'>Download CV</button>
          </div>
        </div>
        <div className='column1'>
          <h2 className='column-h2 typing-effect'>PRIYANKA</h2>
        </div>
      </div>
    </>
  );
};

export default Home;