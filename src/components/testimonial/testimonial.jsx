import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assest/avatar1.jpg";
import AVTR2 from "../../assest/avatar2.jpg";
import AVTR3 from "../../assest/avatar3.jpg";
import AVTR4 from "../../assest/avatar4.jpg";

const Testimonial = (props) => {
  return (
    <section id="testimonial">
      <h5>Review and Feedbacks</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
            <h5>Coder</h5>
            <small className="client_review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              debitis, iste libero voluptatibus facere nulla earum minima
              necessitatibus, tempore odit dolores alias id in! Autem nam
              nesciunt optio maxime molestiae!
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
            <h5>Coder</h5>
            <small className="client_review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              debitis, iste libero voluptatibus facere nulla earum minima
              necessitatibus, tempore odit dolores alias id in! Autem nam
              nesciunt optio maxime molestiae!
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
            <h5>Coder</h5>
            <small className="client_review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              debitis, iste libero voluptatibus facere nulla earum minima
              necessitatibus, tempore odit dolores alias id in! Autem nam
              nesciunt optio maxime molestiae!
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
            <h5>Coder</h5>
            <small className="client_review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              debitis, iste libero voluptatibus facere nulla earum minima
              necessitatibus, tempore odit dolores alias id in! Autem nam
              nesciunt optio maxime molestiae!
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonial;
