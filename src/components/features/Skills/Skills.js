import React from "react";
import "./Skills.css";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Skills() {
  return (
    <div id="skillsContainer">
      <p id="skillsTitle">Mes compétences</p>
      <div id="skillsIconContainer">
        <div className="skill" id="hmtlIcon">
          <FaHtml5 className="skillsIcon html-icon" />
          <p className="skillsP htmlP">HTML5</p>
        </div>
        <div className="skill" id="cssIcon">
          <FaCss3Alt className="skillsIcon css-icon" />
          <p className="skillsP cssP">CSS3</p>
        </div>
        <div className="skill" id="javascriptIcon">
          <SiJavascript className="skillsIcon javascript-icon" />
          <p className="skillsP jsP">JavaScript</p>
        </div>
        <div className="skill" id="reactIcon">
          <FaReact className="skillsIcon react-icon" />
          <p className="skillsP reactP">React</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
