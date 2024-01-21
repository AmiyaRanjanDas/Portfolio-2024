import React from 'react';
import "./style.css";
import "./about.css";

import giphy10 from "../images/giphy10.gif";
import am1 from "../images/amiya1.jpg";
import am2 from "../images/amiya202.jpg";
import am3 from "../images/amiya303.jpg";
import am4 from "../images/amiya7.jpg";

function About() {

  return (
    <>
      <section id="about">
        <div id="about-head">
            <div>
                <h1 style={{fontFamily:"'Nova Square', cursive"}}>ABOUT</h1>
            </div>
            <img id="giph25" src={giphy10}/>
            <h2>WHAT</h2>
            <h3>ABOUT</h3>
            <h6>YOU</h6>
        </div>
        <div id="about-body">
            <img id="img1001" src={am1}/>
            <img id="img1002" src={am2}/>
            <img id="img1003" src={am3}/>
            <img id="img1004" src={am4}/>
            <p>A positive & good human</p>
            <p>Self confident and hardworking student</p>
            <p>having leadership quality</p>
            <p>wants to achieve my goals and make my parents proud</p>
            <p>I am from Puri Jagganth Dham</p>
            <p>Schooling from SSVM, my secondary education is in SCS HS School </p>
            <p>And also graduated from SCS College</p>
            <p>I am Good in ODIA and HINDI </p>
            <p>& also have working proficency in Enlish</p>
            <p>My intrest is in Programming,Designing</p>
            <p>And Develope good professional websites</p>
            <p>I also love playing Cricket</p>
            <p>very much passonate about my dreams not only to be a IT field professional</p>
            <p>but also to be a good human in life</p>
            <p>want fullfil my parents wishes And lot to achieve</p>
            <p>So I am Waiting</p>
        </div>
    </section>
    </>
  )
}

export default About