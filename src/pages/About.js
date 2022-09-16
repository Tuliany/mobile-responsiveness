import React from "react";
import "../styles/pages/about.css";
import "../styles/App.css";
import Divider from "../components/Divider";

const About = () => {
  return (
    <div className="innerFrame">
      <div className="f-container">
        <h1 className="title">About</h1>
        <h3 className="breadText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
      </div>
      <div className="container">
        <img src="../../assets/paint.png" alt="painting" className="image" />
      </div>
    </div>
  );
};

export default About;
