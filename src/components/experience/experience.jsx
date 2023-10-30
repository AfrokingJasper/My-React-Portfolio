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
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>TailwindCss</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>Git/Github</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>NextJs</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>mongoDb</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>FireBase</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__others">
          <h3>Soft skils</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>Team work</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>Problem solving</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4> Attention to detail</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4> Precision</h4>
              </div>
            </article>
            <article className="experience__details">
              <GoVerified className="experience__details-icons" />
              <div>
                <h4>Communication skills</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
