import React from "react";
import "./Projects.css";
import hangManGame from "./assets/HangManGame.png";
import comingsoon from "./assets/comingsoon.jpg";

function Projects() {
  return (
    <div id="projectsContainer">
      <p id="projectsTitle">Mes projets</p>
      <p id="projectsDescription">
        Tout au long de mon apprentissage, je pratique ce que j'ai appris en
        réalisant des projets. Je n'utilise donc aucun support comme des
        tutoriels et je ne demande l'aide d'aucune personne extérieure. Biensur,
        je ne me prive pas de chercher la solution à mon problème car c'est
        comme ça qu'on apprend!{" "}
      </p>
      <div className="projectsImagesContainer">
        <div className="hangmanGame projectImageContainer">
          <a
            href="https://enzo1612.github.io/hangManGame/"
            className="projectTitle"
            target="blank"
          >
            HangmanGame
          </a>
          <a
            href="https://enzo1612.github.io/hangManGame/"
            className="projectsImagesLinks"
            target="_blank"
          >
            <img
              src={hangManGame}
              alt="HangManGame"
              className="projectsImages"
            />
          </a>
        </div>
        <div className="comingsoon projectImageContainer">
          <a
            href="https://enzo1612.github.io/hangManGame/"
            className="projectTitle"
            target="blank"
          >
            ComingSoon
          </a>
          <a
            href="https://enzo1612.github.io/hangManGame/"
            className="projectsImagesLinks"
            target="_blank"
          >
            <img src={comingsoon} alt="comingsoon" className="projectsImages" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
