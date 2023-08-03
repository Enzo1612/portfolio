import React from "react";
import Project from "../Project/Project";
import "./Projects.css";

// IMPORT PROJECTS IMAGES

import Hangmangame1 from "./../../assets/hangman/hangmangame1.png";
import Hangmangame2 from "./../../assets/hangman/hangmangame2.png";
import Hangmangame3 from "./../../assets/hangman/hangmangame3.png";

import Portfolio1 from "./../../assets/portfolioImages/portfolio1.png";
import Portfolio2 from "./../../assets/portfolioImages/portfolio2.png";
import Portfolio3 from "./../../assets/portfolioImages/portfolio3.png";

import ipTracker1 from "./../../assets/ipTracker/ipTracker1.png";
import ipTracker2 from "./../../assets/ipTracker/ipTracker2.png";
import ipTracker3 from "./../../assets/ipTracker/ipTracker3.png";

import countries1 from "./../../assets/countries/countries1.png";
import countries2 from "./../../assets/countries/countries2.png";
import countries3 from "./../../assets/countries/countries3.png";

import quiz1 from "./../../assets/quiz/quiz1.png";
import quiz2 from "./../../assets/quiz/quiz2.png";
import quiz3 from "./../../assets/quiz/quiz3.png";

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
        description="J'ai récemment créé un site web pour jouer au jeu du pendu. Le but du jeu est de deviner un mot en proposant des lettres jusqu'à ce que le mot soit complet ou que toutes les tentatives soient épuisées. Le site est facile à utiliser et il y a une grande variété de mots à deviner en anglais. Les utilisateurs peuvent également soumettre leurs propres mots pour le faire deviner à leurs amis."
        react="hide"
      />
      <Project
        title="Ip adress tracker"
        projectUrl="https://enzo1612.github.io/ip-adress-tracker/"
        url1={ipTracker1}
        url2={ipTracker2}
        url3={ipTracker3}
        description="Découvrez la puissance de la géolocalisation grâce au site que j'ai créé. C'est un outil qui vous permet d'entrer une adresse IP et de visualiser instantanément sa localisation sur une carte. Ce projet m'a permis de travailler avec deux APIs à la fois pour obtenir les informations sur l'adresse IP puis afficher la localisation sur une carte. Le design vient de frontend mentor."
      />
      <Project
        title="Countries"
        projectUrl="https://enzo1612.github.io/countries/"
        url1={countries1}
        url2={countries2}
        url3={countries3}
        description="Retrouvez tous les pays du monde à travers ce site que j'ai créé. L'objectif était de faire une application qui regroupait tous les pays avec une mulltitude d'informations sur ces derniers. J'ai utilisé une API qui contenait ces informations pour les afficher et le design vient de frontend mentor."
      />
      <Project
        title="Quiz"
        projectUrl="https://enzo1612.github.io/quizz/"
        url1={quiz1}
        url2={quiz2}
        url3={quiz3}
        description="J'ai réalisé un site web pour jouer à des quizzes que j'ai créé auparavant. L'application est faite d'une telle manière que créer un quiz revient à donner le titre et les questions. J'ai fait ce site pour aider mes amis à réviser et je peux donc créer des quizzes rapidement qui correspondent à ce que mes amis doivent apprendre."
      />
      <Project
        title="Portfolio"
        projectUrl="https://enzo1612.github.io/portfolio/"
        url1={Portfolio1}
        url2={Portfolio2}
        url3={Portfolio3}
        description="
        J'ai développé le site web où vous vous trouvez actuellement pour présenter mes compétences et mes réalisations professionnelles. Ce site offre une vue complète de mes expériences de travail et de mes projets passés. Il est conçu pour être facile à naviguer, avec une mise en page claire et un accès rapide aux informations importantes."
      />
    </div>
  );
}

export default Projects;
