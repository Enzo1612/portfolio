import React from "react";
import Project from "./Project";
import "./Projects.css";
import Hangmangame1 from "./assets/hangman/hangmangame1.png";
import Hangmangame2 from "./assets/hangman/hangmangame2.png";
import Hangmangame3 from "./assets/hangman/hangmangame3.png";

function Projects() {
  return (
    <div id="projectsContainer">
      <div id="projectsPresentationContainer">
        <p id="projectsTitle">Mes Projets</p>
        <p id="projectsPresentation">
          En tant que développeur front-end, j'ai réalisé divers projets tels
          que des jeux en ligne, des sites vitrines et des sites e-commerce.
          J'ai utilisé les technologies les plus modernes telles que HTML, CSS,
          JavaScript et React pour créer des interfaces utilisateur
          interactives. Tous mes projets ont été conçus de manière originale,
          car je n'ai pas suivi de tutoriels pour les réaliser.
        </p>
      </div>
      <Project
        title="HangMan game"
        url1={Hangmangame1}
        url2={Hangmangame2}
        url3={Hangmangame3}
        description="J'ai récemment créé un site web pour jouer au jeu du pendu. Le but du jeu est de deviner un mot en proposant des lettres jusqu'à ce que le mot soit complet ou que toutes les tentatives soient épuisées. Le site est facile à utiliser et il y a une grande variété de mots à deviner en anglais. Les utilisateurs peuvent également soumettre leurs propres mots pour le faire deviner à leurs amis. C'était un projet amusant à créer et j'espère que les gens apprécieront jouer à ce jeu."
      />
      <Project
        title="HangMan game"
        url1={Hangmangame1}
        url2={Hangmangame2}
        url3={Hangmangame3}
        description="J'ai récemment créé un site web pour jouer au jeu du pendu. Le but du jeu est de deviner un mot en proposant des lettres jusqu'à ce que le mot soit complet ou que toutes les tentatives soient épuisées. Le site est facile à utiliser et il y a une grande variété de mots à deviner en anglais. Les utilisateurs peuvent également soumettre leurs propres mots pour le faire deviner à leurs amis. C'était un projet amusant à créer et j'espère que les gens apprécieront jouer à ce jeu."
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
