import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Calendly from "../../img/Calendly.jpg";
import Ikea from "../../img/Ikea.jpg";
import Pharmacy from "../../img/Pharmacy.jpg";
import BestBuy from "../../img/BestBuy.jpg";
import hebeBoutique from "../../img/hebeBoutique.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={60}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "80%" }}
            src={Ikea}
            alt="logoImg"
          />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
              fontSize: "10px",
            }}
          >
            <a
              href="https://github.com/ArpitSaraswat1997/ikea_clone"
              target="_blank"
            >
              <span>Code</span>
            </a>
            <a href="https://rococo-elf-944c24.netlify.app" target="_blank">
              <span>Live</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "80%" }}
            src={Calendly}
            alt="logoImg"
          />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
              fontSize: "10px",
            }}
          >
            <a
              href="https://github.com/senCoder12/Masai-Calendly-project"
              target="_blank"
            >
              <span>Code</span>
            </a>
            <a
              href="https://sunny-stroopwafel-bdb2f1.netlify.app"
              target="_blank"
            >
              <span>Live</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%", height: "80%" }} src={Pharmacy} alt="" />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
            }}
          >
            <a
              href="https://github.com/Dheeraj-Bhandari/PharmEasy-Clone"
              target="_blank"
            >
              <span>Code</span>
            </a>
            <a
              href="https://prismatic-gingersnap-42a37a.netlify.app"
              target="_blank"
            >
              <span>Live</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%", height: "80%" }} src={BestBuy} alt="" />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
              fontSize: "20px",
            }}
          >
            <a
              href="https://github.com/sulthan441/team_BestBuy"
              target="_blank"
            >
              <span>Code</span>
            </a>
            <a
              href="https://snazzy-smakager-fb2e8f.netlify.app/"
              target="_blank"
            >
              <span>Live</span>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "80%" }}
            src={hebeBoutique}
            alt=""
          />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 10px",
              fontSize: "20px",
            }}
          >
            <a
              href="https://github.com/MohitIndoriya/hebeboutiqueclone"
              target="_blank"
            >
              <span>Code</span>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
