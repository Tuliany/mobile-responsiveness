import React from "react";
import Section from "../components/Section";
import Card from "../components/Card";
import "../styles/App.css";
import "../styles/pages/team.css";

const Team = () => {
  const users = [
    {
      userName: "Jane Smith",
      title: "Lady boss",
    },
    {
      userName: "John Doe",
      title: "Code monkey",
    },
    {
      userName: "Arnold Schwarz",
      title: "Big man",
    },
  ];
  return (
    <>
      <Section>
        <div className="teamFrame">
          <h1 className="title">Meet our team</h1>
          <div className="profileContainer">
            {users.map((user, index) => (
              <Card key={index} userName={user.userName} title={user.title} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Team;
