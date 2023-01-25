import React from "react";
import "./Profile.css";
import Image from "./profilePicture.jpg";

function Profile() {
  return (
    <div id="profile">
      <h4 id="profileH4">A propos de moi</h4>
      <div className="profileCenter">
        <img src={Image} alt="profile" id="profilePicture" />
        <p id="profileP">
          Bonjour, je m'appelle Enzo Nicaise. J'ai 18 ans depuis peu et je suis
          étudiant en informatique à l'université de Luminy à Marseille. Cela
          fait 15 ans que je suis passionné de jeux vidéo et de sports de
          combat. La pratique de ces derniers m'a permis d'acquérir une
          multitude de compétences telles que le respect, la discipline et le
          dépassement de soi. Après l'obtention de mon bac scientifique, j'ai
          obtenu la place que j'occupe actuellement à l'université. C'est au
          début de l'année scolaire 2022 que je me suis interessé a la
          programmation. Je cherchais à m'avancer sur le cursus quand j'ai
          découvert le millieu du dévelopement web. C'est en particulier le côté
          Front End qui m'a tout de suite attiré. J'ai suivi plusieurs
          formations en ligne telles que la certification{" "}
          <span> Responsive Web Design</span> ou
          <span> JavaScript Algorithms and Data Structures</span> sur le site{" "}
          <a href="https://www.freecodecamp.org/">free code camp</a>. J'ai aussi
          complété la partie front end du projet <span> Odin</span> du site{" "}
          <a href="https://www.theodinproject.com/">The Odin Project</a>. Ces
          formations m'ont permis de renforcer mes compétences dans les langages{" "}
          <span>HTML5</span>, <span>CSS3</span> et <span>JavaScript</span>. Par
          la suite, grâce à des tutoriels sur différentes plateformes, j'ai pu
          consolider mes connaissances et apprendre à utiliser le framework{" "}
          <span>React</span>. Aujourd'hui, j'ai conscience que le développement
          est un domaine en forte croissance et de ce fait, je cherche à en
          apprendre plus de jours en jours.
        </p>
      </div>
    </div>
  );
}

export default Profile;
