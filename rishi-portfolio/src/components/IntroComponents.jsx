import { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";
import Goku from "./Goku";

const roles = ["App", "Game", "Web", "Full Stack"];

const subtexts = [
  <>
    Rishikesh is a graduate from{" "}
    <span className="avi-subtext-strong">Dublin Business School</span> in{" "}
    <span className="avi-subtext-strong">MSc (Data Analytics)</span> in{" "}
    <span className="avi-subtext-strong">2026</span>.
  </>,
  <>
    Rishikesh has interests in{" "}
    <span className="avi-subtext-strong">
      Algo Trading, UI Designing and Product Designing
    </span>
    .
  </>,
  <>
    Rishikesh has also worked in developing{" "}
    <span className="avi-subtext-strong">
      GUI for Semiconductor Manufacturing Control Systems
    </span>
    .
  </>,
];

function IntroComponent() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [subtextIndex, setSubtextIndex] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(function () {
      setRoleIndex(function (prev) {
        return (prev + 1) % roles.length;
      });
    }, 3000);

    return function () {
      clearInterval(roleTimer);
    };
  }, []);

  useEffect(() => {
    const subtextTimer = setInterval(function () {
      setSubtextIndex(function (prev) {
        return (prev + 1) % subtexts.length;
      });
    }, 3500);

    return function () {
      clearInterval(subtextTimer);
    };
  }, []);

  return (
    <>
      <CustomCursor />

      <section className="avi-hero">
        <div className="avi-hero-sky"></div>

        <div className="goku-wrapper">
          <Goku />
        </div>

        <div className="avi-hero-content">
          <h1 className="avi-hero-title cursor-hover">
            <span className="avi-hero-highlight">
              {roles[roleIndex]}
            </span>
            <br />
            <span className="avi-hero-developer">Developer.</span>
          </h1>

          <p className="avi-hero-text">
            Rishikesh has a strong interest in Product Management and Entrprenuership 
            and is committed to delivering high-quality tech products that offer an 
            exceptional user experience.
          </p>

          <div className="avi-hero-actions">
            <a href="#socials" className="avi-btn avi-btn-dark">
              Connect
            </a>

            <a href="#projects" className="avi-btn avi-btn-light">
              See Work
            </a>
          </div>

          <p className="avi-hero-subtext">
            {subtexts[subtextIndex]}
          </p>
        </div>
      </section>
    </>
  );
}

export default IntroComponent;