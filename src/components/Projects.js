import React from "react";
import Project from "./Project";
import "./Projects.css";

// IMPORT PROJECTS IMAGES

import Hangmangame1 from "./assets/hangman/hangmangame1.png";
import Hangmangame2 from "./assets/hangman/hangmangame2.png";
import Hangmangame3 from "./assets/hangman/hangmangame3.png";

import Portfolio1 from "./assets/portfolioImages/portfolio1.png";
import Portfolio2 from "./assets/portfolioImages/portfolio2.png";
import Portfolio3 from "./assets/portfolioImages/portfolio3.png";

function Projects() {
  return (
    <div id="projectsContainer">
      <div id="projectsPresentationContainer">
        <p id="projectsTitle">Mes Projets</p>
        <p id="projectsPresentation">
          En tant que développeur front-end, j'ai réalisé divers projets tels
          que des jeux en ligne, des sites vitrines et des sites e-commerce.
          J'ai utilisé les technologies les plus modernes comme HTML, CSS,
          JavaScript et React pour créer des interfaces utilisateur
          interactives. Tous mes projets ont été conçus de manière originale,
          car je n'ai pas suivi de tutoriels pour les réaliser.
        </p>
      </div>
      <Project
        title="HangMan game"
        projectUrl="https://enzo1612.github.io/hangManGame/"
        url1={Hangmangame1}
        url2={Hangmangame2}
        url3={Hangmangame3}
        description="J'ai récemment créé un site web pour jouer au jeu du pendu. Le but du jeu est de deviner un mot en proposant des lettres jusqu'à ce que le mot soit complet ou que toutes les tentatives soient épuisées. Le site est facile à utiliser et il y a une grande variété de mots à deviner en anglais. Les utilisateurs peuvent également soumettre leurs propres mots pour le faire deviner à leurs amis. C'était un projet amusant à créer et j'espère que les gens apprécieront jouer à ce jeu."
        react="hide"
      />
      <Project
        title="Portfolio"
        projectUrl="https://enzo1612.github.io/portfolio/"
        url1={Portfolio1}
        url2={Portfolio2}
        url3={Portfolio3}
        description="
        J'ai développé le site web où vous vous trouvez actuellement pour présenter mes compétences et mes réalisations professionnelles. Ce site offre une vue complète de mes expériences de travail et de mes projets passés. Il est conçu pour être facile à naviguer, avec une mise en page claire et un accès rapide aux informations importantes. J'espère que vous serez en mesure de comprendre mes compétences et mes passions grâce à ce portfolio."
      />
      <Project
        title="HangMan game"
        url1={Hangmangame1}
        url2={Hangmangame2}
        url3={Hangmangame3}
        description="J'ai récemment créé un site web pour jouer au jeu du pendu. Le but du jeu est de deviner un mot en proposant des lettres jusqu'à ce que le mot soit complet ou que toutes les tentatives soient épuisées. Le site est facile à utiliser et il y a une grande variété de mots à deviner en anglais. Les utilisateurs peuvent également soumettre leurs propres mots pour le faire deviner à leurs amis. C'était un projet amusant à créer et j'espère que les gens apprécieront jouer à ce jeu."
      />
    </div>
  );
}

export default Projects;
