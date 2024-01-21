import React, { useEffect, useState } from 'react';
import "./style.css";
import "./hero.css";
import giphy10 from "../images/giphy10.gif";
import amiya1 from "../images/amiya1.jpg";

function Hero(props) {
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
    <div id="home">
      <div id="home-head">
        <h2>AMIYA RANJAN DAS</h2>
        <h3>Hello, I am a designer<br />developer & web development<br />enthusiast</h3>
      </div>
      <h1 id="op1" style={{ left: -100 + scrollValue / 18 + '%' }}>
        DEVLOP DESIGN WEBDEVELOPMENT HELLO WELCOME ENJOY MY WEBSITE DEVLOP DESIGN WEBDEVELOPMENT
      </h1>
      <h1 id="op2" style={{ left: -100 + scrollValue / 18 + '%' }}>
        DEVLOP DESIGN WEBDEVELOPMENT HELLO WELCOME ENJOY MY WEBSITE DEVLOP DESIGN WEBDEVELOPMENT
      </h1>
      <h1 id="op3" style={{ left: -scrollValue / 18 + '%' }}>
        DEVLOP DESIGN WEBDEVELOPMENT HELLO WELCOME ENJOY MY WEBSITE DEVLOP DESIGN WEBDEVELOPMENT
      </h1>
      <h1 id="op4" style={{ left: -scrollValue / 18 + '%' }}>
        DEVLOP DESIGN WEBDEVELOPMENT HELLO WELCOME ENJOY MY WEBSITE DEVLOP DESIGN WEBDEVELOPMENT
      </h1>
      <img id="img2" src={giphy10} alt="GIF" />
      <img id="img3" src={giphy10} alt="GIF" />
      <img id="img1" src={amiya1} alt="Amiya" onMouseEnter={props.handleChildHover}
        onMouseLeave={props.handleChildLeave}/>
    </div>
  );
};

export default Hero