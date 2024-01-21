import React, { useEffect, useState } from 'react';
import "./project.css";

import ani1 from "../images/ani-1.jpeg";
import ani2 from "../images/ani-2.jpeg";
import ani3 from "../images/ani-3.jpeg";
import ani4 from "../images/ani-4.jpeg";
import ani5 from "../images/ani-5.jpeg";
import ani6 from "../images/ani-6.jpeg";
import ani7 from "../images/ani-7.png";
import ani8 from "../images/ani-8.jpeg";
import ani9 from "../images/ani-9.jpeg";
import ani10 from "../images/ani-10.jpeg";
import ani11 from "../images/ani-11.jpg";
import ani12 from "../images/ani-12.jpg";
import ani13 from "../images/ani-13.jpg";

function ProjectAnime() {
  const [scrollValue, setScrollValue] = useState(0);
  const handleScroll = () => {
    setScrollValue(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div id="gradient"></div>    
      <div id='animation'>
        <div id='col1' style={{ top: -400 + scrollValue / 10 + '%' }}>        
        <img id="imgs" src={ani1} alt="Amiya" />  
          <img id="imgs" src={ani2} alt="GIF" />
          <img id="imgs" src={ani3} alt="Amiya" /> 
          <img id="imgs" src={ani4} alt="GIF" />
          <img id="imgs" src={ani5} alt="Amiya" /> 
          <img id="imgs" src={ani6} alt="GIF" />
          <img id="imgs" src={ani7} alt="Amiya" /> 
          <img id="imgs" src={ani8} alt="GIF" />
          <img id="imgs" src={ani1} alt="Amiya" /> 
          <img id="imgs" src={ani9} alt="GIF" />
          <img id="imgs" src={ani3} alt="Amiya" /> 
          <img id="imgs" src={ani4} alt="GIF" />
          <img id="imgs" src={ani5} alt="Amiya" /> 
          <img id="imgs" src={ani6} alt="GIF" />
          <img id="imgs" src={ani7} alt="Amiya" /> 
          <img id="imgs" src={ani8} alt="GIF" />
        </div>
        <div id='col2'  style={{ top: 90 - scrollValue / 20 + '%' }}>          
          <img id="imgs" src={ani4} alt="GIF" />
          <img id="imgs" src={ani5} alt="Amiya" />
          <img id="imgs" src={ani8} alt="Amiya" /> 
          <img id="imgs" src={ani9} alt="GIF" />
          <img id="imgs" src={ani10} alt="Amiya" /> 
          <img id="imgs" src={ani12} alt="GIF" />
          <img id="imgs" src={ani13} alt="Amiya" /> 
          <img id="imgs" src={ani3} alt="GIF" />
          <img id="imgs" src={ani5} alt="Amiya" /> 
          <img id="imgs" src={ani2} alt="GIF" />
          <img id="imgs" src={ani10} alt="Amiya" /> 
          <img id="imgs" src={ani12} alt="GIF" />
          <img id="imgs" src={ani5} alt="Amiya" />
          <img id="imgs" src={ani8} alt="Amiya" />
        </div>
        <div id='col3'  style={{ top: -400 + scrollValue / 10 + '%' }}>          
          <img id="imgs" src={ani6} alt="GIF" />
          <img id="imgs" src={ani7} alt="Amiya" />
          <img id="imgs" src={ani4} alt="Amiya" /> 
          <img id="imgs" src={ani2} alt="GIF" />
          <img id="imgs" src={ani3} alt="Amiya" /> 
          <img id="imgs" src={ani10} alt="Amiya" />
          <img id="imgs" src={ani2} alt="GIF" />
          <img id="imgs" src={ani3} alt="Amiya" /> 
          <img id="imgs" src={ani4} alt="GIF" />
          <img id="imgs" src={ani5} alt="Amiya" /> 
          <img id="imgs" src={ani6} alt="GIF" />
          <img id="imgs" src={ani7} alt="Amiya" /> 
          <img id="imgs" src={ani8} alt="GIF" /> 
          <img id="imgs" src={ani12} alt="GIF" />
        </div>
        <div id='col4'  style={{ top: 90 - scrollValue / 20 + '%' }}>          
          <img id="imgs" src={ani12} alt="GIF" />
          <img id="imgs" src={ani11} alt="Amiya" />
          <img id="imgs" src={ani10} alt="Amiya" /> 
          <img id="imgs" src={ani13} alt="GIF" />
          <img id="imgs" src={ani4} alt="Amiya" /> 
          <img id="imgs" src={ani7} alt="GIF" />
          <img id="imgs" src={ani8} alt="GIF" />
          <img id="imgs" src={ani10} alt="Amiya" />
          <img id="imgs" src={ani6} alt="GIF" />
          <img id="imgs" src={ani11} alt="Amiya" />
          <img id="imgs" src={ani10} alt="Amiya" /> 
        </div>
      </div>
    </>
  )
}

export default ProjectAnime