import React from "react";
import "../styles/components/button.css";

const Button = ({title}) => {
  return (
    <div className="button">
      <img src="../../assets/mail.svg" alt="mail" className="mailIcon" />
      <p>{title}</p>
    </div>
  );
};

export default Button;
