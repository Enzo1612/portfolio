import React from "react";
import "./Footer.css";
import { FaCopyright } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer">
      <div id="footerLeft">
        <div id="footerPhoneContainer">
          <AiFillPhone className="footerIcon" />
          <p id="footerPhoneNumber">0767854587</p>
        </div>
        <div id="footerEmailContainer">
          <AiFillMail className="footerIcon" />
          <p id="footerEmail">enzonicaise.1612@gmail.com</p>
        </div>
        <div className="socials">
          <a href="https://github.com/Enzo1612" target="blank">
            <AiFillGithub className="footerIcon" />
          </a>
        </div>
      </div>

      <div id="footerTextContainer">
        <p id="footerP">Made By Nicaise Enzo</p>
        <FaCopyright className="footerIcon" />
      </div>
    </div>
  );
}

export default Footer;
