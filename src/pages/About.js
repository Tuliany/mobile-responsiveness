import React from "react";
import "../styles/pages/about.css";
import "../styles/App.css";
import Section from "../components/Section";
import ImageTextCard from "../components/ImageTextCard";

const About = () => {
  return (
    <Section>
      <div className="aboutFrame">
        <ImageTextCard
          title="About"
          text
          breadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image
        />
      </div>
    </Section>
  );
};

export default About;
