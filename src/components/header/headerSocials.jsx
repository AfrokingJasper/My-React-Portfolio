import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/fortune-oliseyenum-a44960262/"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/AfrokingJasper?tab=repositories"
        target="_blank"
      >
        <AiOutlineGithub />
      </a>
      <a href="https://twitter.com/TheLightHouseT5" target="_blank">
        <AiFillTwitterSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
