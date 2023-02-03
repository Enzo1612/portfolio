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

  const toggleMenuTop = (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    if (menuState === false) {
      document.getElementById("navbarUlsmall").style.display = "flex";
      setMenuState(true);
    } else {
      document.getElementById("navbarUlsmall").style.display = "none";
      setMenuState(false);
    }
  };

  const toggleMenuProfile = (e) => {
    e.preventDefault();
    window.scroll({
      top: viewportHeight / 1.17,
      behavior: "smooth",
    });

    if (menuState === false) {
      document.getElementById("navbarUlsmall").style.display = "flex";
      setMenuState(true);
    } else {
      document.getElementById("navbarUlsmall").style.display = "none";
      setMenuState(false);
    }
  };

  const toggleMenuProjects = (e) => {
    e.preventDefault();
    window.scroll({
      top: viewportHeight * 1.7,
      behavior: "smooth",
    });

    if (menuState === false) {
      document.getElementById("navbarUlsmall").style.display = "flex";
      setMenuState(true);
    } else {
      document.getElementById("navbarUlsmall").style.display = "none";
      setMenuState(false);
    }
  };

  const viewportHeight = window.innerHeight;

  const goProfile = (e) => {
    e.preventDefault();
    window.scroll({
      top: viewportHeight / 1.17,
      behavior: "smooth",
    });
  };

  const goProjects = (e) => {
    e.preventDefault();
    window.scroll({
      top: viewportHeight * 1.7,
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
    <div id="navbar">
      <div className="navbarIconContainer">
        <TbLetterE className="navbarIcons" id="navbarE" />
        <TbLetterN className="navbarIcons" id="navbarN" />
      </div>
      <ul id="navbarUl">
        <li className="navbarLi">
          <a href="#top" className="navbarLinks" onClick={goTop}>
            Accueil
          </a>
        </li>
        <li className="navbarLi">
          <a
            href="#descriptionArrowDown"
            className="navbarLinks"
            onClick={goProfile}
          >
            Profil
          </a>
        </li>
        <li className="navbarLi">
          <a href="#reactIcon" className="navbarLinks" onClick={goProjects}>
            Projets
          </a>
        </li>
      </ul>
      {/* add the navbar li for small screen size */}
      <ul id="navbarUlsmall">
        <li className="navbarLi">
          <AiFillHome className="navbarLiIcons" />
          <a href="#top" className="navbarLinks" onClick={toggleMenuTop}>
            Accueil
          </a>
        </li>
        <li className="navbarLi">
          <BsFillPersonFill className="navbarLiIcons" />
          <a
            href="#descriptionArrowDown"
            className="navbarLinks"
            onClick={toggleMenuProfile}
          >
            Profil
          </a>
        </li>
        <li className="navbarLi">
          <FaPen className="navbarLiIcons" />
          <a
            href="#reactIcon"
            className="navbarLinks"
            onClick={toggleMenuProjects}
          >
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
