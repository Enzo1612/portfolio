import React from "react";
import "./Project.css";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Project(props) {
  return (
    <div className="projectContainers">
      <a href={props.projectUrl} target="blank">
        <p className="projectTitles">{props.title}</p>
      </a>
      <p className="projectDescritptions">{props.description}</p>
      <div className="projectImagesContainers">
        <div
          className="projectImages"
          style={{
            backgroundImage: `url(${props.url1})`,
          }}
        ></div>
        <div
          className="projectImages"
          style={{
            backgroundImage: `url(${props.url2})`,
          }}
        ></div>
        <div
          className="projectImages"
          style={{
            backgroundImage: `url(${props.url3})`,
          }}
        ></div>
      </div>
      <div className="usedLanguages">
        <FaHtml5 className="projectsLanguagesIcons" />
        <FaCss3Alt className="projectsLanguagesIcons" />
        <SiJavascript className="projectsLanguagesIcons" />
        <FaReact className={`projectsLanguagesIcons ${props.react}`} />
      </div>
    </div>
  );
}

export default Project;
