import React, { useState, useEffect } from 'react';
import './app.css';
import Hero from './components/hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Journey from './components/Journey';


function App() {  
  // ======================================================
  // =========================cursor=======================
  // ======================================================
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [followingElementPosition, setFollowingElementPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateFollowingElementPosition = () => {
      // Delay the update by 100 milliseconds (adjust the time as needed)
      setTimeout(() => {
        setFollowingElementPosition({ x: cursorPosition.x, y: cursorPosition.y });
      }, 100);
    };

    updateFollowingElementPosition();
  }, [cursorPosition]);


  const [isChildHovered, setIsChildHovered] = useState(false);
  const handleChildHover = () => {
    setIsChildHovered(true);
  };
  const handleChildLeave = () => {
    setIsChildHovered(false);
  };
  
  
  return (
    <>
      <Hero handleChildHover={handleChildHover} handleChildLeave={handleChildLeave}/>
      <Project handleChildHover={handleChildHover} handleChildLeave={handleChildLeave}/>
      <Journey handleChildHover={handleChildHover} handleChildLeave={handleChildLeave}/>
      <About/>
      <Contact handleChildHover={handleChildHover} handleChildLeave={handleChildLeave}/>
      <div
        className="custom-cursor"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      />
      <div
      className={`following-element${isChildHovered ? '-hovered':''}`}
        style={{ left: `${followingElementPosition.x}px`, top: `${followingElementPosition.y}px` }}
      />
    </>
  )
}

export default App