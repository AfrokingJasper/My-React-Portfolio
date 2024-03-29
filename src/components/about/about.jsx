import React from "react";
import "./about.css";
import ME from "../../assets/profile-image.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About(props) {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="fortune" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working Experience</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Feedbacks</h5>
              <small>20+ Feedbacks</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>13+ Completed Projects</small>
            </article>
          </div>

          <p>
            I am a highly motivated Frontend Developer with a solid background
            in HTML, CSS, Sass, JavaScript, Typescript and Frameworks like
            React, NextJs, Angular and Tailwind CSS, with proven ability to
            develop responsive and user-friendly web applications. I’m a quick
            learner with a passion for staying up-to-date with the latest web
            technologies and trends. I am a highly organised, dedicated,
            energetic and ambitious individual who always strives to achieve the
            highest standard possible at any given task.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
