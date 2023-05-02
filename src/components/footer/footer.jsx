import React from "react";
import "./footer.css";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        FORTUNE.
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/fortune-oliseyenum-a44960262/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://twitter.com/TheLightHouseT5" target="_blank">
          <AiFillTwitterSquare />
        </a>
        <a href="https://www.facebook.com/fortune.oliseyenum.9" target="_blank">
          <AiOutlineFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Fortune Oliseyenum All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
