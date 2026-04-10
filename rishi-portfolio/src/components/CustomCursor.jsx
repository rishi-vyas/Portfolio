import { useEffect, useState } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    function handleMouseOver(e) {
      if (e.target.closest(".cursor-hover")) {
        setActive(true);
      } else {
        setActive(false);
      }
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className={active ? "custom-cursor active" : "custom-cursor"}
      style={{
        transform:
          "translate(" +
          position.x +
          "px, " +
          position.y +
          "px)",
      }}
    />
  );
}

export default CustomCursor;