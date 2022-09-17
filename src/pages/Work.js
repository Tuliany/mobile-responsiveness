import React from "react";
import Section from "../components/Section";
import ImageTextCard from "../components/ImageTextCard";
import "../styles/pages/work.css";
import "../styles/App.css";

const Work = () => {
  return (
    <>
      <Section>
        <div className="workFrame">
          <ImageTextCard
            title="Work with us"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor."
          />
        </div>
      </Section>
    </>
  );
};

export default Work;
