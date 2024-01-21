import React, { useEffect, useRef } from "react";
import "./project.css";
import ProjectAnime from "./ProjectAnime";
import wheel1 from "../images/pro1.png";
import wheel2 from "../images/pro2.png";
import wheel3 from "../images/pro3.png";
import wheel4 from "../images/pro4.png";
import wheel5 from "../images/pro5.png";
import ved1 from "../images/ved-1.mp4";
import ved2 from "../images/ved-2.mp4";
import ved3 from "../images/ved-3.mp4";
import ved4 from "../images/ved-4.mp4";
import ved5 from "../images/ved-5.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

function Project(props) {
  const eleRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const intervalId = setInterval(() => {
      let tl, tr, br, bl;
      let max = 200,
        min = 400;

      tl = Math.floor(Math.random() * (max - min) + min);
      tr = Math.floor(Math.random() * (max - min) + min);
      br = Math.floor(Math.random() * (max - min) + min);
      bl = Math.floor(Math.random() * (max - min) + min);

      let borderRadius = `${tl}px ${tr}px ${br}px ${bl}px `;
      if (eleRef.current) {
        eleRef.current.style.borderRadius = borderRadius;
      }
    }, 3750);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div id="project">
        <div id="project_head">
          <h2>MY WORK</h2>
          <h3>
            Proficient in prog. languages
            <br />
            frameworks & algorithms
            <br />
            host webistes in many platforms
          </h3>
        </div>
        <div id="project_body" className="container">
          {/* ==================cartlane============== */}
          <div className="row">
            <div className="col-md-6" id="coloumns">
              <a className="flex" href="https://amiyaranjandas.github.io/Cartlane-Clone-Frontend/"
              onMouseEnter={props.handleChildHover} onMouseLeave={props.handleChildLeave}>
                <div className="App">
                  <div ref={eleRef} className="wobble"></div>
                </div>
                <video className="img-fluid" id="coloumn_video" autoPlay loop muted data-aos="zoom-in-right" 
                data-aos-duration="2000" >
                  <source src={ved1} type="video/mp4" />
                </video>
              </a>
            </div>
            <div className="col-md-6 flex">
              <div
                className="project_datas"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
              >
                <h2>Cartlane Clone</h2>
                <p>
                  It is a website created with HTML ,CSS ,JavaScript ,PHP & it
                  provide information for the customer/clint to get services
                  like Plumber, Electrician & Mechanics in your near
                  locality.(As I host it on github so you can access only the
                  front end part & also there are functional Backend)
                </p>
              </div>
              <img src={wheel1} className="img-fluid" id="pic1" alt="" />
            </div>
          </div>
          {/* ===================My journey=============== */}
          <div className="row">
            <div className="col-md-6 custom-order flex">
              <div
                className="project_datas"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <h2>MyJourney App</h2>
                <p>
                  It is a website created with HTML ,CSS ,JavaScript ,PHP & it
                  provide information for the customer/clint to get services
                  like Plumber, Electrician & Mechanics in your near
                  locality.(As I host it on github so you can access only the
                  front end part & also there are functional Backend)
                </p>
              </div>
              <img src={wheel2} className="img-fluid" id="pic2" alt="" />
            </div>
            <div className="col-md-6" id="coloumns">
              <a className="flex" href="https://amiyaranjandas.github.io/my-journey-app/"  
              onMouseEnter={props.handleChildHover} onMouseLeave={props.handleChildLeave}>
                <div className="App">
                  <div ref={eleRef} className="wobble"></div>
                </div>
                <video className="img-fluid" id="coloumn_video" autoPlay loop muted data-aos="zoom-in-left" 
                data-aos-duration="2000" >
                  <source src={ved2} type="video/mp4" />
                </video>
              </a>
            </div>
          </div>
          {/* ==================PortFolios============== */}
          <div className="row">
            <div className="col-md-6" id="coloumns">
              <a className="flex" href="https://amiyaranjandas.github.io/MyPortfolio-Website/"
              onMouseEnter={props.handleChildHover} onMouseLeave={props.handleChildLeave}>
                <div className="App">
                  <div ref={eleRef} className="wobble"></div>
                </div>
                <video className="img-fluid" id="coloumn_video" autoPlay loop muted data-aos="zoom-in-right" 
                data-aos-duration="2000" >
                  <source src={ved3} type="video/mp4" />
                </video>
              </a>
            </div>
            <div className="col-md-6 flex">
              <div
                className="project_datas"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
              >
                <h2>Portfolios</h2>
                <p>
                  It is a website created with HTML ,CSS ,JavaScript ,PHP & it
                  provide information for the customer/clint to get services
                  like Plumber, Electrician & Mechanics in your near
                  locality.(As I host it on github so you can access only the
                  front end part & also there are functional Backend)
                </p>
              </div>
              <img src={wheel3} className="img-fluid" id="pic1" alt="" />
            </div>
          </div>
          {/* ===================React Apps=============== */}
          <div className="row">
            <div className="col-md-6 custom-order flex">
              <div
                className="project_datas"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <h2>React Apps</h2>
                <p>
                  It is a website created with HTML ,CSS ,JavaScript ,PHP & it
                  provide information for the customer/clint to get services
                  like Plumber, Electrician & Mechanics in your near
                  locality.(As I host it on github so you can access only the
                  front end part & also there are functional Backend)
                </p>
              </div>
              <img src={wheel4} className="img-fluid" id="pic2" alt="" />
            </div>
            <div className="col-md-6" id="coloumns">
              <a className="flex" href="https://amiyaranjandas.github.io/REACT-MY-TO-DO-LIST/" 
              onMouseEnter={props.handleChildHover} onMouseLeave={props.handleChildLeave}>
                <div className="App">
                  <div ref={eleRef} className="wobble"></div>
                </div>
                <video className="img-fluid" id="coloumn_video" autoPlay loop muted data-aos="zoom-in-left" 
                data-aos-duration="2000" >
                  <source src={ved4} type="video/mp4" />
                </video>
              </a>
            </div>
          </div>
          {/* ==================PHP Sites============== */}
          <div className="row">
            <div className="col-md-6" id="coloumns">
              <a className="flex" href="https://amiyaranjandas.github.io/Servebox.com-Website/"
              onMouseEnter={props.handleChildHover} onMouseLeave={props.handleChildLeave}>
                <div className="App">
                  <div ref={eleRef} className="wobble"></div>
                </div>
                <video className="img-fluid" id="coloumn_video" autoPlay loop muted data-aos="zoom-in-right" 
                data-aos-duration="2000" >
                  <source src={ved5} type="video/mp4" />
                </video>
              </a>
            </div>
            <div className="col-md-6 flex">
              <div
                className="project_datas"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
              >
                <h2>PHP Sites</h2>
                <p>
                  It is a website created with HTML ,CSS ,JavaScript ,PHP & it
                  provide information for the customer/clint to get services
                  like Plumber, Electrician & Mechanics in your near
                  locality.(As I host it on github so you can access only the
                  front end part & also there are functional Backend)
                </p>
              </div>
              <img src={wheel5} className="img-fluid" id="pic1" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ProjectAnime />
    </>
  );
}

export default Project;
