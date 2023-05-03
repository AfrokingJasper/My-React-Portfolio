import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    title: "Responsive Web Design",
    content:
      " Designing websites that are optimized for viewing on different devices including desktops, laptops, tablets, and smartphones.",
  },
  {
    title: "Performance Optimization",
    content:
      "  Optimizing websites or web applications for faster load times and better performance.",
  },
  {
    title: "Website Maintenance",
    content:
      "maintaining and updating websites or web applications to ensure that they remain secure, up-to-date, and functional.",
  },
  {
    title: "Cross-Browser Compatibility Testing",
    content:
      "testing websites or web applications on different browsers to ensure that they work well on all of them.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <Swiper
        className="container services__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ title, content }, index) => {
          return (
            <SwiperSlide key={index} className="service">
              <div className="service__head">
                <h3>{title}</h3>
              </div>

              <ul className="service__list">
                <li>
                  <BsCheckLg className="service__list-icon" />
                  <p>{content}</p>
                </li>
              </ul>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;

// </ul>
// </article>
// <article className="service">
// <div className="service__head">
//   <h3>Cross-Browser Compatibility Testing</h3>
// </div>

// <ul className="service__list">
//   <li>
//     <BsCheckLg className="service__list-icon" />
//     <p>
//       testing websites or web applications on different browsers to
//       ensure that they work well on all of them.
//     </p>
//   </li>

// </ul>
// </article>
