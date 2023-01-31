import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="projectContainers">
      <a href="https://enzo1612.github.io/hangManGame/" target="blank">
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
    </div>
  );
}

export default Project;
