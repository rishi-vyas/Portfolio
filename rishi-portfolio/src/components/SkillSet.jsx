import { useEffect, useRef, useState } from "react";

const skills = [
  "/skills/react.jpeg",
  "/skills/java.jpeg",
  "/skills/python.jpeg",
  "/skills/csharp.jpeg",
  "/skills/springboot.jpeg",
  "/skills/mongodb.jpeg",
  "/skills/mysql.jpeg",
  "/skills/firebase.jpeg",
  "/skills/docker.jpeg",
  "/skills/github.jpeg",
  "/skills/figma.jpeg",
  "/skills/adobe.jpeg",
  "/skills/powerbi.jpeg",
  "/skills/LLM.jpeg",
];

function SkillSet() {
  const sectionRef = useRef(null);
  const [target, setTarget] = useState({ x: 0, y: 0, active: false });
  const [positions, setPositions] = useState(
    skills.map(function () {
      return { x: 0, y: 0 };
    })
  );

  useEffect(function () {
    function setCenter() {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      setTarget({
        x: cx,
        y: cy,
        active: false,
      });

      setPositions(
        skills.map(function () {
          return { x: cx, y: cy };
        })
      );
    }

    setCenter();
    window.addEventListener("resize", setCenter);

    return function () {
      window.removeEventListener("resize", setCenter);
    };
  }, []);

  useEffect(function () {
    const node = sectionRef.current;
    if (!node) {
      return;
    }

    function handleMove(e) {
      const rect = node.getBoundingClientRect();

      setTarget({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      });
    }

    function handleLeave() {
      const rect = node.getBoundingClientRect();

      setTarget({
        x: rect.width / 2,
        y: rect.height / 2,
        active: false,
      });
    }

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);

    return function () {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(function () {
    let frameId;

    function animate() {
      setPositions(function (prev) {
        if (!prev.length) {
          return prev;
        }

        const next = prev.map(function (item) {
          return { x: item.x, y: item.y };
        });

        const leaderEase = target.active ? 0.22 : 0.1;
        next[0].x = next[0].x + (target.x - next[0].x) * leaderEase;
        next[0].y = next[0].y + (target.y - next[0].y) * leaderEase;

        for (let i = 1; i < next.length; i += 1) {
          const followEase = target.active ? 0.18 : 0.09;
          next[i].x = next[i].x + (next[i - 1].x - next[i].x) * followEase;
          next[i].y = next[i].y + (next[i - 1].y - next[i].y) * followEase;
        }

        return next;
      });

      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);

    return function () {
      cancelAnimationFrame(frameId);
    };
  }, [target]);

  return (
    <section id="skills" className="skills-snake-section" ref={sectionRef}>
      <div className="skills-snake-bg"></div>

      <div className="skills-snake-center">
        <h2 className="skills-snake-title">
          Always Building.
          <br />
          Always Growing.
        </h2>
      </div>

      {skills.map(function (image, index) {
        const pos = positions[index] || { x: 0, y: 0 };
        const sizeClass = index === 0 ? "leader" : "";
        const spread = target.active ? index * 16 : 0;
        const scale = index === 0 ? 1 : Math.max(0.64, 1 - index * 0.028);

        return (
          <div
            key={image}
            className={"skills-snake-icon " + sizeClass}
            style={{
              left: pos.x + "px",
              top: pos.y + "px",
              transform:
                "translate(" +
                (-50 - spread / 8) +
                "%, " +
                (-50 - spread / 8) +
                "%) scale(" +
                scale +
                ")",
              zIndex: skills.length - index,
              opacity: index === 0 ? 1 : target.active ? 1 : Math.max(0.18, 1 - index * 0.07),
            }}
          >
            <img src={image} alt="" />
          </div>
        );
      })}
    </section>
  );
}

export default SkillSet;