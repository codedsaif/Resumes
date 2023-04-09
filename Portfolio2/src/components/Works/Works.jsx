import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
import IkeaLogo from "../../img/Ikea_Logo.png";
import CalendlyLogo from "../../img/CalendlyLogo.jpg";
import PharmacyLogo from "../../img/PharmacyLogo.jpg";
import BestbuyLogo from "../../img/BestbuyLogo.jpg";
import HebeBoutiqueLogo from "../../img/HebeBoutiqueLogo.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for Clone All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            These are different type of companies like some E-commerce
            companies,
            <br />
            one is Health care company and one is calender means you can block
            <br />
            anyone calender if he is free and give permission.
            <br />I enjoyed very much while creating.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={CalendlyLogo} alt="CalendlyLogo" />
          </div>
          <div className="w-secCircle">
            <img src={PharmacyLogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={IkeaLogo} alt="" />
            {/* Working */}
          </div>{" "}
          <div className="w-secCircle">
            <img src={BestbuyLogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={HebeBoutiqueLogo} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
