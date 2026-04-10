import { useEffect, useState } from "react";

const row1 = [
  "/skills/typescript.jpeg",
  "/skills/django.jpeg",
  "/skills/python.jpeg",
  "/skills/mysql.jpeg",
  "/skills/postgresql.jpeg",
  "/skills/js.jpeg",
  "/skills/typescript.jpeg",
  "/skills/django.jpeg",
  "/skills/python.jpeg",
];

const row2 = [
  "/skills/google.jpeg",
  "/skills/nextjs.jpeg",
  "/skills/github.jpeg",
  "/skills/nest.jpeg",
  "/skills/firebase.jpeg",
  "/skills/react.jpeg",
  "/skills/flutter.jpeg",
  "/skills/google.jpeg",
  "/skills/nextjs.jpeg",
];

function SkillsMarquee() {
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(function () {
    let lastY = window.scrollY;

    function handleScroll() {
      const currentY = window.scrollY;

      if (currentY > lastY) {
        setScrollDir("down");
      } else if (currentY < lastY) {
        setScrollDir("up");
      }

      lastY = currentY;
    }

    window.addEventListener("scroll", handleScroll);

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="skills-marquee-section">
      <div className="skills-marquee-inner">
        <div
          className={
            scrollDir === "down"
              ? "skills-marquee-track left"
              : "skills-marquee-track right"
          }
        >
          {[...row1, ...row1].map(function (item, index) {
            return (
              <div className="skills-marquee-card" key={"row1-" + index}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>

        <div
          className={
            scrollDir === "down"
              ? "skills-marquee-track right"
              : "skills-marquee-track left"
          }
        >
          {[...row2, ...row2].map(function (item, index) {
            return (
              <div className="skills-marquee-card" key={"row2-" + index}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsMarquee;