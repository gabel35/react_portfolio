import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Background1 from "./components/Assets/background/bella1.jpg";
import Background2 from "./components/Assets/background/bella2.jpg";
import Background3 from "./components/Assets/background/bella3.jpg";
import Background4 from "./components/Assets/background/bella4.jpg";
import Background5 from "./components/Assets/background/bella5.jpg";
import Background6 from "./components/Assets/background/bella6.jpg";
import Background7 from "./components/Assets/background/bella7.jpg";
import Background8 from "./components/Assets/background/bella8.jpg";
import Background9 from "./components/Assets/background/bella9.jpg";
import Background10 from "./components/Assets/background/bella10.jpg";
import Background11 from "./components/Assets/background/bella11.jpg";
import Background12 from "./components/Assets/background/bella12.jpg";
import Background13 from "./components/Assets/background/bella13.jpg";
import Background14 from "./components/Assets/background/bella14.jpg";
import Background15 from "./components/Assets/background/bella15.jpg";
import './App.css';


function App() {
  function test() {
    const numbers = [Background1,Background2,Background3,Background4,Background5,Background6,Background7,Background8,Background9,Background10,Background11,Background12,Background13,Background14,Background15];
    var random = numbers[Math.floor(Math.random() * numbers.length)];
    return(random);
  };

  return (
    <Router>
    <div className="background" style={{backgroundImage: `url(${test()}) no-repeat center center/cover`}}>
      <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <img 
          className="img-fluid hover appPics" 
          src={test()}
          alt="background bella"
        /> */}
      <Footer />
    </div>
  </Router>
  );
}

export default App;
