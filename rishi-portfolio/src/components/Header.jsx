import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header className="floating-header-wrap">
      <div
        className={isOpen ? "floating-header expanded" : "floating-header"}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="floating-header-left">
          <span className="floating-header-icon">
            {isOpen ? "x" : "="}
          </span>

          <button
            type="button"
            className="floating-header-name floating-header-button"
            onClick={() => scrollToSection("top")}
          >
            Rishikesh Vyas.
          </button>
        </div>

        <nav className={isOpen ? "floating-header-nav show" : "floating-header-nav"}>
          <button
            type="button"
            className="floating-header-link floating-header-button"
            onClick={() => scrollToSection("skills")}
          >
            Skills.
          </button>

          <button
            type="button"
            className="floating-header-link floating-header-button"
            onClick={() => scrollToSection("projects")}
          >
            Work.
          </button>

          <a
            className="floating-header-link"
            href="https://www.linkedin.com/in/rishikesh-vyas/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn.
          </a>

          <a
            className="floating-header-link"
            href="https://github.com/rishi-vyas"
            target="_blank"
            rel="noreferrer"
          >
            Github.
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;