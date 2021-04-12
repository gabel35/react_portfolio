import React from "react";
import Chicago from "../Assets/meChicago.JPG";
import "./style.css";

function AboutMe() {
  return (
    <div
      className="jumbotron jumbotron-fluid">
      <div className="container">
          <img 
            className="img-fluid" 
            src={Chicago}
            width="20%"
            height="20%"
            alt="me standing by a window"
          />
          <a href="https://www.linkedin.com/in/gabriel-jose-sanchez-919b88a1/" target="_blank" rel="noreferrer">
            <button 
              id="linkedIn"
            >LinkedIn
            </button>
          </a>
          <a href="https://github.com/gabel35" target="_blank" rel="noreferrer">
            <button 
              id="gitHub"
            >Github
            </button>
          </a>
          <a href="..\react_portfolio\public\assets\CV_21-3-7.pdf" target="_blank" rel="noreferrer">
            <button
              id="resume"
            >Resume
            </button>
          </a>
          <h1 className="display-4">About Me</h1>
          <p> 
             Hi, I'm Gabriel J. Sanchez from Newark, NJ, and I'm an aspiring coder. From a young age I've had an array of interests and aspirations, and over time, I've been fortunate enough to be able to dip my feet in many of them. From jobs in construction, sound engineering, and healthcare to hobbies in creative writing, dancing, and carpentry, I've continued to become a "jack of all trades". Most recently, I've been employed at Columbia University Medical Center as a Projet Manager for numerous studies related to medicine and psychology. Although I really enjoy my work, it's become an incredibly draining job, and so I decided to start pursuing another interest I've had for a long time: coding. I would like to eventually stay on the path of health psychology, but I believe that technology needs to be incorporated into the current systems much more than they are. I'm hoping that the skills this bootcamp will give me will aid me in developing more dynamic systems and apps for the healthcare system. 
          </p>
      </div>
    </div>
  );
}

export default AboutMe;
