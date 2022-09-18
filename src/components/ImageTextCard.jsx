import React from "react";
import Section from "./Section";
import Button from "../components/Button";
import "../styles/components/imageTextCard.css";

const ImageTextCard = ({ title, breadText, text, paragraph, image }) => {
  return (
    <Section>
      <div className="fContainer">
        <h1 className="title">{title}</h1>
        {text
          ? breadText && <h3>{breadText}</h3>
          : paragraph && <p>{paragraph}</p>}
      </div>

      {image ? (
        <div className="container">
          <img src="../../assets/paint.png" alt="painting" className="image" />
        </div>
      ) : (
        <Button title="contact us" />
      )}
    </Section>
  );
};

export default ImageTextCard;
