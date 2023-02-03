import React from "react";
import "./FirstPage.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

function Description() {
  const viewportHeight = window.innerHeight;

  const goProfile = (e) => {
    e.preventDefault();
    window.scroll({
      top: viewportHeight / 1.17,
      behavior: "smooth",
    });
  };

  const goTop = (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div id="description">
      <div id="firstPageText">
        <h2 id="descriptionH2">Nicaise Enzo</h2>
        <h3 id="descriptionH3">Développeur Front End</h3>
      </div>
      <a href="#descriptionArrowDown" onClick={goProfile}>
        <AiOutlineArrowDown id="descriptionArrowDown" />
      </a>
      <a href="#top" onClick={goTop}>
        <AiOutlineArrowUp id="descriptionArrowUp" />
      </a>
    </div>
  );
}

export default Description;
