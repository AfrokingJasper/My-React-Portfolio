import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assest/profiles.avif";
import AVTR2 from "../../assest/profiles.avif";
import AVTR3 from "../../assest/profiles.avif";
// import AVTR4 from "../../assest/profiles.avif";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Leon",
    review:
      "Amazing work. The UX is very nice and clean, and i love how it easily fits into different sceen without disrupting the UI",
  },
  {
    avatar: AVTR2,
    name: "Jenifer",
    review:
      "This web app is really nice, I wasnt expecting something this complex and i'm wondering how you were able to implement all these complex algorithms in the frontend. Good job!",
  },
  {
    avatar: AVTR3,
    name: "Wisdom",
    review:
      "You really did a good job on the website. Its so easy for people to transfer money to a diffrent users in different currencies and your algorithm converts it automatically without having to create a new account.",
  },
];

const Testimonial = (props) => {
  return (
    <section id="testimonial">
      <h5>Review and Feedbacks</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container mySwiper"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={avatar} />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
