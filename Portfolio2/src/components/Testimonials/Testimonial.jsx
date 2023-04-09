import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import profilePic5 from "../../img/profile5.jpg";
import profilePic6 from "../../img/profile6.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic6,
      review:
        "He has a great problem-solving skill and ability to create innovative solutions. His willingness to learn and adapt to new technologies and tools has helped our team stay ahead of the curve in the fast-paced world of web development.",
    },
    {
      img: profilePic1,
      review:
        "His passion for web development is contagious. His willingness to learn new technologies and adapt to changes in the industry is truly admirable.",
    },
    {
      img: profilePic2,
      review:
        "His attention to detail is amazing. His ability to anticipate potential roadblocks and find creative solutions to problems has saved us a lot of time and resources.",
    },
    {
      img: profilePic3,
      review:
        "His skills in front-end development are truly impressive. His ability to seamlessly work across the entire technology stack has helped our team create better, more comprehensive solutions for our presentation.",
    },
    {
      img: profilePic4,
      review:
        "His communication and collaboration skills have helped us work more efficiently as a team. His ability to share your knowledge and expertise with others has helped us all grow in our skills and abilities.",
    },
    {
      img: profilePic5,
      review:
        "Acknowledge their hard work and dedication to this project . Thank him for their expertise and contributions to the field of web development.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Construct week Project Team </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
