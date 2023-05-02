import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assest/avatar1.jpg";
import AVTR2 from "../../assest/avatar2.jpg";
import AVTR3 from "../../assest/avatar3.jpg";
import AVTR4 from "../../assest/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit debitis, iste libero voluptatibus facere nulla earum minima necessitatibus, tempore odit dolores alias id in! Autem nam nesciunt optio maxime molestiae!",
  },
  {
    avatar: AVTR2,
    name: "Tina Snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit debitis, iste libero voluptatibus facere nulla earum minima necessitatibus, tempore odit dolores alias id in! Autem nam nesciunt optio maxime molestiae!",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit debitis, iste libero voluptatibus facere nulla earum minima necessitatibus, tempore odit dolores alias id in! Autem nam nesciunt optio maxime molestiae!",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit debitis, iste libero voluptatibus facere nulla earum minima necessitatibus, tempore odit dolores alias id in! Autem nam nesciunt optio maxime molestiae!",
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
