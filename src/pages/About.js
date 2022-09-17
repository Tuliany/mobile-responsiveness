import React from "react";
import "../styles/pages/about.css";
import "../styles/App.css";
import Section from "../components/Section";


const About = () => {
  return (
    <Section>
      <div className="aboutFrame">
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
    </Section>
  );
};

export default About;
