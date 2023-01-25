import React from "react";
import "./FirstPage.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

function Description() {
  return (
    <div id="description">
      <div id="firstPageText">
        <h2 id="descriptionH2">Nicaise Enzo</h2>
        <h3 id="descriptionH3">Développeur Front End</h3>
      </div>
      <a href="#descriptionArrowDown">
        <AiOutlineArrowDown id="descriptionArrowDown" />
      </a>
      <a href="#top">
        <AiOutlineArrowUp id="descriptionArrowUp" />
      </a>
    </div>
  );
}

export default Description;
