import { useState } from "react";

const projectGroups = {
  Personal: [

    {
      title: "Sahayak",
      img: "https://i.ibb.co/yN1r3Mn/sahayak.png",
      link: "https://sahaayak.vercel.app/",
      desc: "A 2022 web app for bioinformatics needs.",
    },
    {
      title: "Pizza Cassino",
      img: "https://i.ibb.co/7QFwLD6/Screenshot-2021-12-09-at-2-27-09-PM.png",
      link: "https://pizzacassino-pixysquare.vercel.app/",
      desc: "A website for a pizza restaurant in New Delhi, India.",
    },
    {
      title: "Anonimo.fun",
      img: "https://i.ibb.co/PMts9RD/Screenshot-2021-12-09-at-1-39-01-PM.png",
      link: "https://anonimofinal.vercel.app/login",
      github: "https://github.com/rishi-vyas/Anonymous-Chat-App",
      desc: "An anonymous chatting and inboxing website built using Next.js and Firebase.",
    },
    {
      title: "Valiance",
      img: "https://i.ibb.co/9cv22Ds/Screenshot-2021-12-09-at-2-06-54-PM.png",
      link: "https://valiance.in",
      desc: "A brand focused on stylish, modern websites, portfolios, and e-commerce stores.",
    },
    {
      title: "Bare Molecules",
      img: "https://i.ibb.co/xX3CnB1/Screenshot-2021-12-09-at-2-22-01-PM.png",
      link: "https://baremolecules.myshopify.com/",
      desc: "A Shopify skincare brand website.",
    },
    {
      title: "Sukoon NGO",
      img: "https://i.ibb.co/3B9zkvg/Screenshot-2021-12-09-at-2-12-55-PM.png",
      link: "https://www.sukoonngo.com",
      desc: "Website for Sukoon NGO to help them reach a wider audience.",
    },
    {
      title: "Financly",
      img: "/projects/financly.png",
      link: "https://financely-finance-tracker.netlify.app/",
      desc: "Personal finance analytics platform with real-time sync, dashboards, and ETL-based reporting.",
    },
    {
      title: "Crypto Tracker",
      img: "/projects/crypto.png",
      link: "https://crypto-dashboard-avi.netlify.app/",
      figma:
        "https://www.figma.com/design/S7yyFUlckdtEUPj86LaeyR/Crypto-Tracker?node-id=0-1&p=f",
      desc: "Real-time cryptocurrency dashboard with market trends, coin comparison, and responsive UI.",
    },
  ],
  Projects: [],
  Published: [],
  Terminal: [],
};

function Projects() {
  const [activeTab, setActiveTab] = useState("Personal");
  const activeProjects = projectGroups[activeTab];

  return (
    <section id="projects" className="find-work-section">
      <div className="find-work-header">
        <h2 className="find-work-title">Find My Work</h2>

        <div className="find-work-tabs">
          {Object.keys(projectGroups).map(function (tab) {
            return (
              <button
                key={tab}
                type="button"
                className={
                  activeTab === tab ? "find-work-tab active" : "find-work-tab"
                }
                onClick={function () {
                  setActiveTab(tab);
                }}
              >
                {tab}
                {tab === "Terminal" ? (
                  <span className="find-work-new">NEW</span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="find-work-grid">
        {activeProjects.map(function (project, index) {
          let extraClass = "";

          if (index === activeProjects.length - 2) {
            extraClass = "offset-left";
          }

          if (index === activeProjects.length - 1) {
            extraClass = "offset-right";
          }

          return (
            <div
              key={project.title}
              className={"find-work-card " + extraClass}
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <div className="find-work-image-wrap">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="find-work-image"
                  />
                </div>
              </a>

              <div className="find-work-card-footer">
                <div className="find-work-card-text">
                  <h3 className="find-work-card-title">{project.title}</h3>
                  <p className="find-work-card-desc">{project.desc}</p>

                  <div className="project-links">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    ) : null}

                    {project.figma ? (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Figma
                      </a>
                    ) : null}
                  </div>
                </div>

                <span className="find-work-card-icon">↗️</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;