import React from "react";
import "../../src/App.css";
import menu from "../images/menu.png";
import PropTypes from "prop-types";

const ProfileComponent = ({
  fullName,
  bio,
  profession,
  handleName,
  children,
}) => {
  return (
    <React.Fragment>
      <div style={{ width: "100vw", height: "50vh" }} className="img-back">
        <section>
          <input type="text" placeholder="Search.." />
          <span>
            <img className="menu" src={menu} alt="" />
          </span>
        </section>
        <div className="tame">
          <div className="info">
            <h1 style={{ color: "white" }}>{fullName}</h1>

            <h3>{profession}</h3>
          </div>

          <button onClick={handleName}>Show Name</button>
        </div>
      </div>
      {children}

      <div>
        <p className="bio">{bio}</p>
      </div>
    </React.Fragment>
  );
};

ProfileComponent.defaultProps = {
  fullName: "Izaac Cezar ",
  profession: "Developer",
};

ProfileComponent.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};

export default ProfileComponent;
