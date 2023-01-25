import React from "react";
import "./Footer.css";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer">
      <div id="footerTextContainer">
        <p id="footerP">Made By Nicaise Enzo</p>
        <FaCopyright id="copyrightIcon" />
      </div>
    </div>
  );
}

export default Footer;
