import React, { useEffect, useState, useRef } from 'react';
import "./journey.css";
import rocket from "../images/rocket.png"
import image1 from "../images/journey-1.jpg"
import image2 from "../images/journey-2a.jpeg"
import image3 from "../images/jouney-3a.jpg"
import gif from "../images/giphy10.gif"
import card1 from "../images/card-1.png"
import card2 from "../images/card-2.png"
import card3 from "../images/card-3.png"


function Journey(props) {
  const [scrollValue, setScrollValue] = useState(0);
  const journeyRef = useRef(null);

  const handleScroll = () => {
    if (journeyRef.current) {
      const journeyRect = journeyRef.current.getBoundingClientRect();
      const journeyTop = journeyRect.top;
      if (journeyTop < 0) {
        setScrollValue(Math.abs(journeyTop));
      } else {
        setScrollValue(0);
      }
    }
  };

  const [isScrolling, setIsScrolling] = useState(false);
  const rocketScroll = () => {
    let timeout;
    clearTimeout(timeout);
    setIsScrolling(true);

    timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', rocketScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', rocketScroll);
    };
  }, []);

  return (
    <>
      <div id="journey" ref={journeyRef}>
        <div className="journeydiv">
          <div id='scroll_div' style={{ left: - 3 - scrollValue / 15 + '%' }}>
            {/* ======================rocket===================== */}
            <div className="rocket">
              <img src={rocket} alt="" className={`${isScrolling ? 'rocketImg' : ''}`} />
              <div className='rocketDiv' style={{ display: `${isScrolling ? '' : 'none'}` }}></div>
            </div>

            <div className='scroll_sub_div'>
              <div id="journey-head">
                <h2>JOURNEY</h2>
                <h3>Adventure awaits</h3>
              </div>
              <img src={gif} alt="" id='gif1' style={{ transform: "rotate(" + scrollValue / 10 + "deg)" }} />
              <img src={gif} alt="" id='gif2' style={{ left: 10 + scrollValue / 22 + '%', transform: "rotate(" + scrollValue / 8 + "deg)" }} />
              <h1 id='div1h1' style={{ left: 21 + scrollValue / 8 + '%', fontSize: 900 + scrollValue*1.5 + "%" }}>JOURNEY</h1>
              <h1 id='div1h2' style={{ left: 60 - scrollValue / 12 + '%' }}>DEVELOPE</h1>
              <h1 id='div1h3'>DESIGN</h1>
            </div>

            <div className='scroll_sub_div container d-flex' >
              <div className="row">
                <div className="col">
                  <div className="card"                 
                  onMouseEnter={props.handleChildHover} onMouseLeave={props.handleChildLeave}>
                    <div className="imgBx">
                      <img src={card2} alt="" />
                    </div>
                    <div className="contentBx p-3">
                      <h2>450+</h2>
                      <p>Eat, sleep, code repeat</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                <div className="card" id='card2'
                onMouseEnter={props.handleChildHover} onMouseLeave={props.handleChildLeave}>
                    <div className="imgBx">
                      <img src={card1} alt="" />
                    </div>
                    <div className="contentBx p-3">
                      <h2>20+</h2>
                      <p>Github repos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col" id='col-3'>
                  <div className="card" id='card3'
                  onMouseEnter={props.handleChildHover} onMouseLeave={props.handleChildLeave}>
                    <div className="imgBx">
                      <img src={card3} alt="" />
                    </div>
                    <div className="contentBx p-3">
                      <h2>MERN</h2>
                      <p>Mistakes,learn,grow-Internship cycle</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            <div className='scroll_sub_div'>

              <div data-aos='fade-down' data-aos-offset="200" data-aos-duration='1000' className="singleTraveler"
              onMouseEnter={props.handleChildHover} onMouseLeave={props.handleChildLeave}>
                <img src={image1} className="destinationImage" />
                <div className="travelerDetails">
                  <div className="travelerName">
                    <span1>Matriculation</span1>
                    <a href="http://ssvmghodabazarpuri.in/" target='_blank'>@ssvm_puri</a>
                  </div>
                </div>
              </div>
              <div data-aos='fade-up' data-aos-offset="200" data-aos-duration='1000' className="singleTraveler"
              onMouseEnter={props.handleChildHover} onMouseLeave={props.handleChildLeave}>
                <img src={image2} className="destinationImage" />
                <div className="travelerDetails">
                  <div className="travelerName">
                    <span1>Bachelors in Computer Science</span1>
                    <a href="https://www.scscollege.nic.in/" target='_blank'>@scs_puri</a>
                  </div>
                </div>
              </div>
              <div data-aos='fade-left' data-aos-offset="200" data-aos-duration='1000' className="singleTraveler"
              onMouseEnter={props.handleChildHover} onMouseLeave={props.handleChildLeave}>
                <img src={image3} className="destinationImage" />
                <div className="travelerDetails">
                  <div className="travelerName">
                    <span1>Master in Computer Application</span1>
                    <a href="https://silicon.ac.in/" target='_blank'>@sit_bbsr</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Journey;
