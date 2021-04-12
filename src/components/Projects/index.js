import React from "react";
import "./style.css";
import { Link, Route } from "react-router-dom";

const projectPics = "../../../public/assets/projects";

function Projects() {
  return (
    <main className="container-sm container-md container-lg container-xl" id="allEdges">
    <section className="row">
      <h1>Portfolio</h1>
    </section>
    <section className="row ">
      {/* <!-- The Burger Joint --> */}
      <div className="col-lg-4 portfolioPic">
        <img 
          className="img-fluid hover appPics" 
          src={`${projectPics}/the-burger-joint.PNG"`}
          alt="burger restaurant app"
        />
        <a href="https://hidden-ravine-71551.herokuapp.com/" target="_blank">
          <button id="burgerJoint">The Burger Joint!</button>
        </a>
        <a href="https://github.com/gabel35/The_Burger_Joint" target="_blank">
          <button id="bjRepo">Go to repo</button>
        </a>
        <p className="text appTitle">The Burger Joint!</p>
        <p className="text">A virtual burger restaurant, where you can order any burger you want (or anything else you'd like to eat), and decide wheter to eat now or later.</p>
      </div>
      {/* <!-- Vireo Travel App --> */}
      <div className="col-lg-4 portfolioPic">
        <img className="img-fluid hover appPics" src="..\..\public\assets\projects\vireo_screenshot.PNG" alt="all in one travel app"/>
        <a href="https://peaceful-peak-47552.herokuapp.com/" target="_blank">
          <button id="vireo">Go to Vireo</button>
        </a>
        <a href="https://github.com/gabel35/Vireo" target="_blank">
          <button id="vireoRepo">Go to repo</button>
        </a>
        <p className="text appTitle">Vireo</p>
        <p className="text">The VIREO travel app helps users to get all the information about new destinations which will make a trip more enjoyable, pleasant, and safe. An all in one resource and blog about your destinations!
        </p>
      </div>
      {/* <!-- Spyglass Project --> */}
      <div className="col-lg-4 portfolioPic">
        <img className="img-fluid hover appPics" src="..\..\public\assets\projects\Spyglass.PNG" alt="currency converter app"/>
        <a href="https://gabel35.github.io/Spyglass/" target="_blank">
          <button id="spyGlass">Go to Spyglass</button>
        </a>
        <a href="https://github.com/gabel35/Spyglass" target="_blank">
          <button id="sgRepo">Go to repo</button>
        </a>
        <p className="text appTitle">Spyglass</p>
        <p className="text">A first-step web-application for travelling.A good trip needs some basic preparation and Spyglass can help you do so by showing you how far your buck can go in different countries and introducing other information. Sometimes it's hard to travel, but Spyglass can help make a little easier!</p>
      </div>
    </section>
    <section className="row ">
      {/* <!-- What Weather homework --> */}
      <div className="col-lg-4 portfolioPic">
        <img className="img-fluid hover appPics" src="..\..\public\assets\projects\what-weather.PNG" alt="weather app displaying weather for Newark,Nj"/>
        <a href="https://gabel35.github.io/What_Weather" target="_blank">
          <button id="whatWeather">Go to What Weather?</button>
        </a>
        <a href="https://github.com/gabel35/What_Weather" target="_blank">
          <button id="wwRepo">Go to repo</button>
        </a>
        <p className="text appTitle">What Weather?</p>
        <p className="text">An on-demand weather web-application that will give you the current weather and a 5-day forecast for any city you chose and save your most frequently searched cities.</p>
      </div>
      {/* <!-- 9-to-5 Planner Homework --> */}
      <div className="col-lg-4 portfolioPic">
        <img className="img-fluid hover appPics" src="..\..\public\assets\projects\hourly-planner-webpage.PNG" alt="planner app with the hours of the day"/>
        <a href="https://gabel35.github.io/9-to-5_Planner/" target="_blank">
          <button id="hourlyPlanner">Go to 9-to-5 Planner</button>
        </a>
        <a href="https://github.com/gabel35/9-to-5_Planner" target="_blank">
          <button id="hpRepo">Go to repo</button>
        </a>
        <p className="text appTitle">9-to-5 Planner</p>
        <p className="text">Need to stay organized? The 9-to-5 Planner is a web-application that allows you to save events or tasks on the hour.</p>
      </div>
      {/* <!-- Fitness Tracker Homework --> */}
      <div className="col-lg-4 portfolioPic">
        <img className="img-fluid hover appPics" src="..\..\public\assets\projects\fitness_tracker.PNG" alt="note taker app"/>
        <a href="https://protected-earth-20674.herokuapp.com/" target="_blank">
          <button id="noteTaker">Go to Fitness Tracker</button>
        </a>
        <a href="https://github.com/gabel35/fitness_tracker" target="_blank">
          <button id="ntRepo">Go to repo</button>
        </a>
        <p className="text appTitle">Fitness Tracker</p>
        <p className="text">Track all your exercises and workouts! You can create and track daily workouts by logging exercises, recording info on the particular workout, and track distance traveled.</p>
      </div>
    </section>
  </main>

  );
}

export default Projects;
