import React from "react";
import "./NavBar.css";
import { FaLaptopCode } from "react-icons/fa";

function NavBar() {
  return (
    <div id="navbar">
      <FaLaptopCode id="navbarIcon" />
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
