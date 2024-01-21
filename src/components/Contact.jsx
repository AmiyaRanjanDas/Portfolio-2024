import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import "./contact.css";
import giphy1 from "../images/email.gif";
import giphy2 from "../images/sticker1234.gif";
import giphy3 from "../images/insta.gif";
import giphy4 from "../images/github.gif";
import giphy5 from "../images/website.gif";


const Contact = (props) => {
  const [imageSrc, setImageSrc] = useState(giphy1);
  const [imagePosition, setImagePosition] = useState({ top: 0, left: 0 });

  const handleMouseMove = (e) => {
    const x = e.pageX;
    const y = e.pageY;
    setImagePosition({ top: y, left: x });
  };

  const handleIconHover = (src) => {
    setImageSrc(src);
  };

  // =======================================================================================
  useEffect(() => {
    const textElements = document.querySelectorAll('.text');

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <>
      <div id="Contact">
        <div className="container wrapper">          
          <div onMouseMove={handleMouseMove} style={{ width: '100%' }}>
          <h1 className="text text-center">HAVE ANY IDEA
            <span data-src={giphy1} onMouseOver={() => handleIconHover()}>
              CONTACT ME THEN
            </span>
          </h1>
            <h1 className="text">EMAIL
              <span data-src={giphy1} onMouseOver={() => handleIconHover(giphy1)}>
                <a href="https://amiyaranjandas2000@gmail.com" target="_blank">amiyadas1810@gmail</a>
              </span>
              <p>+</p>
            </h1>
            <h1 className="text">LINKEDIN
              <span data-src={giphy1} onMouseOver={() => handleIconHover(giphy2)}>
                <a href="https://www.linkedin.com/in/amiyaranjandas1810/" target="_blank">amiyaranjandas1810</a>
              </span>
              <p>+</p>
            </h1>
            <h1 className="text">GITHUB
              <span data-src={giphy1} onMouseOver={() => handleIconHover(giphy4)}>
                <a href="https://github.com/AmiyaRanjanDas" target="_blank">AmiyaRanjanDas</a>
              </span>
              <p>+</p>
            </h1>
            <h1 className="text">WEBSITE
              <span data-src={giphy1} onMouseOver={() => handleIconHover(giphy5)}>
                <a href="" target="_blank">portfolio</a>
              </span>
              <p>+</p>
            </h1>
            <h1 className="text">INSTAGRAM
              <span data-src={giphy1} onMouseOver={() => handleIconHover(giphy3)}>
                <a href="https://www.instagram.com/__dream_._hacker__?igsh=eHc2MjdvbGFrdW9w" target="_blank">_dream_hacker_</a>
              </span>
              <p>+</p>
            </h1>
            <img src={imageSrc} className="effect" 
            style={{ top: `${imagePosition.top}px`, left: `${imagePosition.left}px`, transform: 'translate(0%, -100%)' }}/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;


