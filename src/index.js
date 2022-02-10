import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import ProfileComponent from "./profile/profileComponent";

import img from './images/pic.jpg'
const handleName = (name) => {
  alert(name);
};

const profile = {
  fullName: "Jessie Schwartz",
  bio: "Jessie Sato opens the line of communication between clients, customers, and businesses to get projects done. With over 20 years in both public and private sectors, Jessie has experience in management consultation, team building, professional development, strategic implementation.",
  profession: "Manager",
};

ReactDOM.render(
  <React.StrictMode>
    <ProfileComponent
      fullName={profile.fullName}
      bio={profile.bio}
      profession={profile.profession}
      handleName={() => handleName(profile.fullName)}
    >
      <div className="img-container">
        <img src={img} alt="" />
      </div>
    </ProfileComponent>
  </React.StrictMode>,
  document.getElementById("root")
);
