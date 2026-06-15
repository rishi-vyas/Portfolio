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
    skills.map(() => ({ x: 0, y: 0 }))
  );

  function getIconTargetPosition() {
    if (!sectionRef.current) return { x: 0, y: 0 };

    const rect = sectionRef.current.getBoundingClientRect();

    return {
      x: rect.width * 0.67,
      y: rect.height * 0.50,
  };
  }

  useEffect(() => {
    function setRightPosition() {
      const iconPosition = getIconTargetPosition();

      setTarget({
        x: iconPosition.x,
        y: iconPosition.y,
        active: false,
      });

      setPositions(skills.map(() => iconPosition));
    }

    setRightPosition();
    window.addEventListener("resize", setRightPosition);

    return () => {
      window.removeEventListener("resize", setRightPosition);
    };
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    function handleMove(e) {
      const rect = node.getBoundingClientRect();

      setTarget({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      });
    }

    function handleLeave() {
      const iconPosition = getIconTargetPosition();

      setTarget({
        x: iconPosition.x,
        y: iconPosition.y,
        active: false,
      });
    }

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);

    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    let frameId;

    function animate() {
      setPositions((prev) => {
        if (!prev.length) return prev;

        const next = prev.map((item) => ({ x: item.x, y: item.y }));

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

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [target]);

  return (
    <section id="skills" className="skills-snake-section" ref={sectionRef}>
      <div className="skills-snake-bg"></div>

      <div className="skills-snake-content">
        <div className="skills-snake-text">
          <h2 className="skills-snake-title">
            Always Building.
            <br />
            Always Growing.
          </h2>
        </div>
      </div>

      {skills.map((image, index) => {
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
              opacity:
                index === 0
                  ? 1
                  : target.active
                  ? 1
                  : Math.max(0.18, 1 - index * 0.07),
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