import React from "react";
import "./header.css";
import CTA from "./cta";
import pg from "../../assets/profile-image.jpg";
import HeaderSocials from "./headerSocials";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const Header = (props) => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello i'm</h3>
        <h1>Fortune Oliseyenum</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="mobile__cta">
          <a
            href="https://www.linkedin.com/in/fortune-oliseyenum-a44960262/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://twitter.com/TheLightHouseT5" target="_blank">
            <AiFillTwitterSquare />
          </a>
          <a
            href="https://github.com/AfrokingJasper?tab=repositories"
            target="_blank"
          >
            <AiOutlineGithub />
          </a>
        </div>

        <div className="pg">
          <img src={pg} alt="fortune" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
