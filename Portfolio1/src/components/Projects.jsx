import React from "react";
import "../app.css";
import AwesomeSlider from "react-awesome-slider";
// React-Icons
import { DiCss3, DiHtml5, DiMongodb, DiJavascript } from "react-icons/di";
import { FaReact, FaNodeJs, FaBimobject } from "react-icons/fa";
import { VscJson, VscSymbolArray, VscSymbolString } from "react-icons/vsc";
import {
  SiRedux,
  SiJavascript,
  SiChakraui,
  SiBootstrap,
  SiJest,
  SiMongodb,
  SiExpress,
  SiStyledcomponents,
} from "react-icons/si";
import "react-awesome-slider/dist/styles.css";
//jobify
import jobify1 from "../assets/projects/jobify1.jpg";
import jobify2 from "../assets/projects/jobify2.jpg";
import jobify3 from "../assets/projects/jobify3.jpg";
import jobify4 from "../assets/projects/jobify4.jpg";
import jobify5 from "../assets/projects/jobify5.jpg";
import jobify6 from "../assets/projects/jobify6.jpg";
//bestbuy
import bestbuy1 from "../assets/projects/bestbuy1.jpg";
import bestbuy2 from "../assets/projects/bestbuy2.jpg";
import bestbuy3 from "../assets/projects/bestbuy3.jpg";
import bestbuy4 from "../assets/projects/bestbuy4.jpg";
import bestbuy5 from "../assets/projects/bestbuy5.jpg";
import bestbuy6 from "../assets/projects/bestbuy6.jpg";
import bestbuy7 from "../assets/projects/bestbuy7.jpg";
//ikea
import ikea1 from "../assets/projects/ikea1.jpg";
import ikea2 from "../assets/projects/ikea2.jpg";
import ikea3 from "../assets/projects/ikea3.jpg";
import ikea4 from "../assets/projects/ikea4.jpg";
import ikea5 from "../assets/projects/ikea5.jpg";
import ikea6 from "../assets/projects/ikea6.jpg";
import ikea7 from "../assets/projects/ikea7.jpg";
import ikea8 from "../assets/projects/ikea8.jpg";
import ikea9 from "../assets/projects/ikea9.jpg";
import ikea10 from "../assets/projects/ikea10.jpg";
//pharmeasy
import pharmeasy1 from "../assets/projects/pharmeasy1.jpg";
import pharmeasy2 from "../assets/projects/pharmeasy2.jpg";
import pharmeasy3 from "../assets/projects/pharmeasy3.jpg";
import pharmeasy4 from "../assets/projects/pharmeasy4.jpg";
import pharmeasy5 from "../assets/projects/pharmeasy5.jpg";
import pharmeasy6 from "../assets/projects/pharmeasy6.jpg";
import pharmeasy7 from "../assets/projects/pharmeasy7.jpg";
import pharmeasy8 from "../assets/projects/pharmeasy8.jpg";
//calendly
import calendly1 from "../assets/projects/calendly1.jpg";
import calendly2 from "../assets/projects/calendly2.jpg";
import calendly3 from "../assets/projects/calendly3.jpg";
import calendly4 from "../assets/projects/calendly4.jpg";
//hebe
import hebe1 from "../assets/projects/hebe1.jpg";
import hebe2 from "../assets/projects/hebe2.jpg";
// import { Carousel } from 'react-responsive-carousel';

const projects = () => {
  const projects = [
    {
      id: 1,
      src: [jobify1, jobify2, jobify3, jobify4, jobify5, jobify6],
      title: "Jobify",
      description:
        "Jobify is a web application designed to help job seekers track their job applications and stay organized throughout the job search process. With Jobify, users can easily add and manage job applications, update their personal information, and track their progress towards finding their dream career.",
      link: "https://full-stack-project-cend.onrender.com/",
      repo: "https://github.com/S-a-i-f-A-l-i/jobify",
      tech: [
        <DiHtml5 size={25} color={"#DF4D26"} />,
        <DiCss3 size={25} color={"#254BDD"} />,
        <SiJavascript size={20} color={"yellow"} />,
        <FaReact sise={35} color={"aqua"} />,
        <SiRedux size={20} color={"#764ABC"} />,
        <SiStyledcomponents size={20} color={"#71CAD0"} />,
        <DiMongodb size={25} color={"#00ED64"} />,
        <SiExpress size={20} color={"white"} />,
        <FaNodeJs size={20} color={"026E00"} />,
        <VscJson size={20} color={"#1C59A5"} />,
      ],
    },
    {
      id: 2,
      src: [
        ikea1,
        ikea2,
        ikea3,
        ikea4,
        ikea5,
        ikea6,
        ikea7,
        ikea8,
        ikea9,
        ikea10,
      ],
      title: "IKEA-Clone",
      description:
        "Ikea is the one of the famous website for buying furniture and home appliance . We made this project with the help of HTML,JS,REACT,BOOTSTRAP",
      link: "https://ikea-clone-4lny-f1tdnurt2-arpitsaraswat1997.vercel.app/",
      repo: "https://github.com/ArpitSaraswat1997/ikea_clone",
      tech: [
        <DiHtml5 size={25} color={"#DF4D26"} />,
        <DiCss3 size={25} color={"#254BDD"} />,
        <SiJavascript size={20} color={"yellow"} />,
        <FaReact sise={35} color={"aqua"} />,
        <SiRedux size={20} color={"#764ABC"} />,
        <SiChakraui size={20} color={"#71CAD0"} />,
        <SiBootstrap size={30} color={"#8713F2"} />,
        <VscJson size={20} color={"#1C59A5"} />,
      ],
    },
    {
      id: 3,
      src: [bestbuy1, bestbuy2, bestbuy3, bestbuy4, bestbuy5, bestbuy7],
      title: "BestBuy-Clone",
      description:
        "Best Buy Co., Inc. is a provider of consumer technology products and services. The Company offers a range of merchandise and services to its customers, including computing and mobile phones, consumer electronics, appliances, entertainment and other products.",
      link: "https://snazzy-smakager-fb2e8f.netlify.app/",
      repo: "https://github.com/sulthan441/team_BestBuy",
      tech: [
        <DiHtml5 size={25} color={"#DF4D26"} />,
        <DiCss3 size={25} color={"#254BDD"} />,
        <SiJavascript size={20} color={"yellow"} />,
        <SiBootstrap size={30} color={"#8713F2"} />,
      ],
    },
    {
      id: 4,
      src: [
        pharmeasy1,
        pharmeasy2,
        pharmeasy3,
        pharmeasy4,
        pharmeasy5,
        pharmeasy6,
        pharmeasy7,
        pharmeasy8,
      ],
      title: "PharmEasy-Clone",
      description:
        "Created Clone of India's Largest e-PharmEasy Company. Features Like. Filer Product , Add to Cart, Checkout Etc",
      link: "https://pharmeasyclone2022.netlify.app/",
      repo: "https://github.com/Dheeraj-Bhandari/PharmEasy-Clone",
      tech: [
        <DiHtml5 size={30} color={"#DF4D26"} />,
        <DiCss3 size={30} color={"#254BDD"} />,
        <SiBootstrap size={30} color={"#8713F2"} />,
        <SiJavascript size={25} color={"yellow"} />,
      ],
    },

    {
      id: 5,
      src: [calendly1, calendly2, calendly3, calendly4],
      title: "Calendly-Clone",
      description:
        "Calendly is a web application for scheduling appointments, meetings, and events.",
      link: "https://sunny-stroopwafel-bdb2f1.netlify.app/",
      repo: "https://github.com/senCoder12/Calendly-project",
      tech: [
        <DiHtml5 size={30} color={"#DF4D26"} />,
        <DiCss3 size={30} color={"#254BDD"} />,
        <SiBootstrap size={30} color={"#8713F2"} />,
        <SiJavascript size={25} color={"yellow"} />,
      ],
    },
    {
      id: 6,
      src: [hebe1, hebe2],
      title: "Hebeboutique-Clone",
      description:
        "Hebeboutique is a Nz based website which provides grooming items,jewellery.etc.In this web site I have done login signup ,product and cart page ,and redux",
      link: "https://astonishing-biscotti-a93985.netlify.app/",
      repo: "https://github.com/MohitIndoriya/hebeboutiqueclone",
      tech: [
        <DiHtml5 size={25} color={"#DF4D26"} />,
        <DiCss3 size={25} color={"#254BDD"} />,
        <SiJavascript size={20} color={"yellow"} />,
        <FaReact sise={35} color={"aqua"} />,
        <SiRedux size={20} color={"#764ABC"} />,
        <SiChakraui size={20} color={"#71CAD0"} />,
      ],
    },
  ];

  return (
    <div
      id="bgdivimg"
      style={{
        height: "auto",
        marginTop: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px",
        paddingBottom: "4rem",
      }}
      name="projects"
      className="ptop bg-gradient-to-b from-black to-black-800 w-full text-white md:h-screen portfolio"
    >
      <div
        // style={{ border: "2px solid pink", height: "auto" }}
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div
          style={{
            paddingTop: "30px",
          }}
          className="pb-8"
        >
          <p
            style={{ color: "white" }}
            className="text-4xl font-bold inline border-b-4 border-white-500"
          >
            Projects
          </p>
          <p className="py-6 text-aqua">Check out some of my work right here</p>
        </div>

        <div
          //  style={{border:'2px solid red'}}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0"
        >
          {projects.map(({ id, src, title, description, link, repo, tech }) => (
            <div
              style={{ border: "2px solid aqua", maxWidth: "100%" }}
              key={id}
              className=" shadow-lg shadow-aqua rounded-lg"
            >
              <AwesomeSlider
                style={{
                  height: "auto",
                  width: "100%",
                  overflow: "hidden",
                  marginTop: "10px",
                }}
              >
                {src.map((el) => (
                  <div style={{ borderRadius: "10px", width: "100%" }}>
                    <img
                      style={{ height: "280px", width: "100%" }}
                      src={el}
                      className="rounded-md duration-200 hover:scale-105"
                    />
                  </div>
                ))}
              </AwesomeSlider>

              <div
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                <h1
                  style={{ fontSize: "20px", fontWeight: 800, color: "white" }}
                >
                  {title}
                </h1>
                <p className="max-line text-aqua ">{description}</p>
                <div style={{ color: "white", lineHeight: "30px" }}>
                  <b>TechStack </b>{" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                    }}
                  >
                    {" "}
                    {tech}{" "}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  style={{
                    borderRadius: "2rem",
                    fontFamily: "monospace",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  className="w-1/2 px-6 py-3 m-4 duration-200 text-black bg-white hover:scale-105 hover:text-black hover:bg-aqua"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  style={{
                    borderRadius: "2rem",
                    fontFamily: "monospace",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                  className=" w-1/2 px-6 py-3 m-4 duration-200 text-black bg-white hover:scale-105 hover:text-black hover:bg-aqua"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default projects;
