import React from "react";
import "./Footer.css";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer">
      <div id="footerLeft">
        <div id="footerPhoneContainer">
          <AiFillPhone className="footerIcon" />
          <a
            href="tel:0767854587"
            target="_blank"
            rel="noreferrer"
            id="footerPhoneNumber"
          >
            0767854587
          </a>
        </div>
        <div id="footerEmailContainer">
          <AiFillMail className="footerIcon" />
          <a
            href="mailto:enzonicaise.1612@gmail.com"
            target="_blank"
            rel="noreferrer"
            id="footerEmail"
          >
            enzonicaise.1612@gmail.com
          </a>
        </div>
        <div className="socials">
          <a href="https://github.com/Enzo1612" target="blank">
            <AiFillGithub className="footerIcon" />
          </a>
        </div>
      </div>

      <div id="footerTextContainer">
        <p id="footerP">&copy; Made By Nicaise Enzo</p>
      </div>
    </div>
  );
}

export default Footer;
