import React from "react";
import "./header.css";
import CTA from "./cta";
import pg from "../../assest/dffee_1.jpg";
import HeaderSocials from "./headerSocials";

const Header = (props) => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello i'm</h3>
        <h1>Fortune Oliseyenum</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

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
