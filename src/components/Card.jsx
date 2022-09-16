import React from 'react';
import '../styles/components/card.css';

const Card = ({userName, title}) => {
  return (
    <div className="cardFrame">
        <div className="roundedBorder">
          <img
            src="../../assets/user-profile.png"
            alt="user"
            className="profile"
          />
        </div>
        <div className="userInfo">
          <h2>{userName}</h2>
          <p>{title}</p>
        </div>
    </div>
  );
}

export default Card