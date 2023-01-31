import React, { useState } from "react";
import "./NavBar.css";
import { TbLetterE } from "react-icons/tb";
import { TbLetterN } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";

function NavBar() {
  let [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    if (menuState === false) {
      document.getElementById("navbarUlsmall").style.display = "flex";
      setMenuState(true);
    } else {
      document.getElementById("navbarUlsmall").style.display = "none";
      setMenuState(false);
    }
  };

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
          <a href="#reactIcon" className="navbarLinks">
            Projets
          </a>
        </li>
      </ul>
      {/* add the navbar li for small screen size */}
      <ul id="navbarUlsmall">
        <li className="navbarLi">
          <AiFillHome className="navbarLiIcons" />
          <a href="#top" className="navbarLinks" onClick={toggleMenu}>
            Accueil
          </a>
        </li>
        <li className="navbarLi">
          <BsFillPersonFill className="navbarLiIcons" />
          <a
            href="#descriptionArrowDown"
            className="navbarLinks"
            onClick={toggleMenu}
          >
            Profil
          </a>
        </li>
        <li className="navbarLi">
          <FaPen className="navbarLiIcons" />
          <a href="#reactIcon" className="navbarLinks" onClick={toggleMenu}>
            Projets
          </a>
        </li>
      </ul>
      <div id="hamburgerMenu" onClick={toggleMenu}>
        <div className="hamburgerMenuLines"></div>
        <div className="hamburgerMenuLines"></div>
        <div className="hamburgerMenuLines"></div>
      </div>
    </div>
  );
}

export default NavBar;
