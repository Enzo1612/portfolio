import React from "react";
import "./NavBar.css";
import { TbLetterE } from "react-icons/tb";
import { TbLetterN } from "react-icons/tb";

function NavBar() {
  return (
    <div id="navbar">
      <div className="navbarIconContainer">
        <TbLetterE className="navbarIcons" id="navbarE" />
        <TbLetterN className="navbarIcons" id="navbarN" />
      </div>
      <ul id="navbarUl">
        <li className="navbarLi">
          <a href="#top" className="navbarLinks">
            Accueil
          </a>
        </li>
        <li className="navbarLi">
          <a href="#descriptionArrowDown" className="navbarLinks">
            Profil
          </a>
        </li>
        <li className="navbarLi">
          <a href="#projectsContainer" className="navbarLinks">
            Projets
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
