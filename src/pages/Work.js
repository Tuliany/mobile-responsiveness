import React from "react";
import Section from "../components/Section";
import Button from '../components/Button'
import "../styles/pages/work.css";
import "../styles/App.css";

const Work = () => {
  return (
    <>
      <Section>
        <div className="workFrame">
          <h1>Work with us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <Button title="contact us"/>
        </div>
      </Section>
    </>
  );
};

export default Work;
