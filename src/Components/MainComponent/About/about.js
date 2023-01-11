import "./about.css";
import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import myImg from "./images/MyBgImg.png"
export default function About() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "bold",
      color: isActive ? "slateblue" : "white",
      textDecoration: isActive ? "underline" :"none",
    };
  };
  return (
    <div id="about" className="about">
      <div className="about-col-1">
        <img src={myImg} alt="img loading..." />
      </div>
      <div className="about-col-2">
        <h1 className="sub-title">About Me</h1>
        <p>
          I'm a budding web developer who is interested in learning about new technologies. I'm continuously
          learning and using what I know to create projects. A full-stack web developer is what I want to be.
          Blockchain and web 3.0 are two technologies that interest me as well.
        </p>
        <div className="tab-titles">
          <div className="tab-links"><NavLink style={navLinkStyles} to="aboutEducation">Education</NavLink></div>
          <div className="tab-links"><NavLink style={navLinkStyles} to="aboutSkills">Skills</NavLink></div>
          <div className="tab-links" ><NavLink style={navLinkStyles} to="aboutExperience">Experience</NavLink></div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
