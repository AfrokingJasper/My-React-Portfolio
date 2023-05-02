import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Responsive Web Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Designing websites that are optimized for viewing on different
                devices.
              </p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>These Includes desktops, laptops, tablets, and smartphones.</p>
            </li>

            {/* end of UI/UX DESIGN */}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Performance Optimization</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Optimizing websites or web applications for faster load times
                and better performance.
              </p>
            </li>

            {/* end of Web development */}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Website Maintenance</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            {/* end of Content Creation */}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Cross-Browser Compatibility Testing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            {/* end of Content Creation */}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
