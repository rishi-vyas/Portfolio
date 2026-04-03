import * as React from "react";
import Button from "@mui/material/Button";
import DialogProjects from "./DialogProjects";

function Projects() {
  const projectList = [
    {
      imgSrc: "https://i.ibb.co/PFk48t7/Bold.png",
      src: "https://boldstore.in/",
      description: "The World's First One Click marketplace",
      github: false,
    },
    {
      imgSrc: "https://i.ibb.co/yN1r3Mn/sahayak.png",
      src: "https://sahaayak.vercel.app/",
      description: "A 2022 Web App for all of your Bioinformatics needs.",
      github: false,
    },
    {
      imgSrc:
        "https://i.ibb.co/7QFwLD6/Screenshot-2021-12-09-at-2-27-09-PM.png",
      src: "https://pizzacassino-pixysquare.vercel.app/",
      description: "A website for a Pizza Restaurant in New Delhi, India",
      github: false,
    },
    {
      imgSrc:
        "https://i.ibb.co/2WNgr8q/Screenshot-2022-01-03-at-9-31-15-PM.png",
      src: "https://www.wexus.in/",
      description:
        "The new website for Simply Sites. A Freelancing service started by me and Jayesh Sadhwani where we provide 3 tiers of services to build responsive and clean webapps with full fledged backend support.",
      github: false,
    },
    {
      imgSrc:
        "https://i.ibb.co/BwPrB9k/Screenshot-2022-01-08-at-1-20-52-AM.png",
      src: "https://www.drishtimakhijani.com/",
      description: "Portfolio made for @Drishti Makhijani , 2022",
      github: false,
    },

    {
      imgSrc:
        "https://i.ibb.co/PMts9RD/Screenshot-2021-12-09-at-1-39-01-PM.png",
      src: "https://www.anonimo.fun",
      description:
        "An anonymous chatting and inboxing website made from scratch using Next JS and Firebase",
      github: "https://github.com/rishi-vyas/Anonymous-Chat-App",
    },
    {
      imgSrc:
        "https://i.ibb.co/gmrSfPc/Screenshot-2021-12-09-at-2-21-22-PM.png",
      src: "https://www.simplysites.tech/",
      description:
        "A Freelancing service started by me and Jayesh Sadhwani where we provide 3 tiers of services to build responsive and clean webapps with full fledged backend support.</p>",
      github: false,
    },
    {
      imgSrc:
        "https://i.ibb.co/9cv22Ds/Screenshot-2021-12-09-at-2-06-54-PM.png",
      src: "https://valiance.in",
      description:
        "We design and develop themes for customers of all sizes, specializing in creating stylish, modern websites, web portfolios and e-commerce stores. We create a website that stands out.      ",
      github: false,
    },
    {
      imgSrc:
        "https://i.ibb.co/xX3CnB1/Screenshot-2021-12-09-at-2-22-01-PM.png",
      src: "https://baremolecules.myshopify.com/",
      description: "A Shopify Skin Care Brand.",
      github: false,
    },
    {
      imgSrc:
        "https://i.ibb.co/3B9zkvg/Screenshot-2021-12-09-at-2-12-55-PM.png",
      src: "https://www.sukoonngo.com",
      description:
        "Youth, the part which represents future, but is still neglected. Sukoon is an organization which aims to change that. We at Simply Sites helped them reach a wider audience with a beautiful website",
      github: false,
    },
    
    {
      imgSrc:
        "https://i.ibb.co/MVy7w5Z/Screenshot-2021-12-09-at-1-56-58-PM.png",
      src: "https://avivashishta.wixsite.com/simplemenus",
      description:
        "A Startup which Aims to completely digitize restaurant menus by providing custom designed QR Code templates and Stands to Restaurants and Eateries in New Delhi.",
      github: false,
    },
  ];

  return (
    <div id="projects">
      <h1>
        Projects <strong style={{ color: "#006AFF" }}>.</strong>
      </h1>
      <div className="projectsDiv">
        {projectList.map((data) => {
          return (
            <DialogProjects
              src={data.src}
              imgSrc={data.imgSrc}
              description={data.description}
              github={data.github}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
