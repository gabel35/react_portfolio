import React from "react";
import AboutMe from "../AboutMe";

function Jumbotron() {
  return (
    <div
      className="jumbotron jumbotron-fluid">
      <div className="container">
        <AboutMe/>
      </div>
    </div>
  );
}

export default Jumbotron;
