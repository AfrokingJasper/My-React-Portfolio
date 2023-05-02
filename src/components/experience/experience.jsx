import React from "react";
import "./experience.css";
import { GoVerified } from "react-icons/go";

const Experience = (props) => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GoVerified />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GoVerified />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GoVerified />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GoVerified />
              <h4>TailwindCss</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GoVerified />
              <h4>Git/Github</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GoVerified />
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        <div className="experience__others">
          <h3>Soft skils</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GoVerified />
              <h4> Ability to work as a team</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GoVerified />
              <h4> Excellent Problem solving skills</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GoVerified />
              <h4> Attention to detail</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GoVerified />
              <h4> Precision and accuracy</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GoVerified />
              <h4> Excellent communication skills</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <GoVerified />
              <h4> Ability to thrive under pressure</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
