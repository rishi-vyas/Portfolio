import React from "react";
import gokuImg from "../assets/img/gokus.png";

function MyExperience() {
  return (
    <section
      id="experience"
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f5f5f7",
        color: "#111",
        padding: "100px 6%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <h2
        className="cursor-hover"
  style={{
    fontSize: "clamp(2.2rem, 4vw, 4rem)",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "60px",
    lineHeight: "1.2",
  }}
>
  <span style={{ color: "#d97706" }}>Destructuring</span>{" "}
  <span style={{ color: "#111" }}>My Work Experience:</span>
</h2>

        {/* Main Content */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "0.7fr 1.3fr",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Left Side - Goku Image */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginTop: "200px",   // move DOWN
              marginLeft: "-80px", // move LEFT
            }}
          >
            <img
              src={gokuImg}
              alt="Goku"
              style={{
                width: "320px",
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
                borderRadius: "20px",
                filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.15))",
                animation: "float 4s ease-in-out infinite",
              }}
            />
          </div>

          {/* Right Side - Experience Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "34px",
            }}
          >
            {/* Applied Materials */}
            <div>
              <h3 style={titleStyle}>Applied Materials</h3>
              <p style={subStyle}>March 2023 - Nov 2024</p>
              <p style={roleStyle}>Software Development Engineer</p>

              <ul style={listStyle}>
                <li>
                  Engineered and deployed an automated wafer processing system
                  with dynamic animation features, improving performance
                  efficiency by 31%.
                </li>
                <li>
                  Designed Auto-Teaching UI reducing training cost by $950K annually.
                </li>
                <li>
                  Enhanced UI services across 2,000+ users, boosting productivity by 87%.
                </li>
                <li>
                  Collaborated with R&D to streamline UI automation pipelines.
                </li>
              </ul>
            </div>

            {/* Deshik Labs */}
            <div>
              <h3 style={titleStyle}>Deshik Labs</h3>
              <p style={subStyle}>Sep 2022 - Feb 2023</p>
              <p style={roleStyle}>Software Development Engineer</p>

              <ul style={listStyle}>
                <li>
                  Contributed to building scalable application features and improving performance.
                </li>
              </ul>
            </div>

            {/* Amphisoft */}
            <div>
              <h3 style={titleStyle}>Amphisoft Technologies Pvt. Ltd</h3>
              <p style={subStyle}>March 2022 - August 2022</p>
              <p style={roleStyle}>Web Developer Intern</p>

              <ul style={listStyle}>
                <li>
                  Improved UI responsiveness and frontend performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyExperience;

/* Styles */
const titleStyle = {
  fontSize: "1.45rem",
  fontWeight: "700",
  marginBottom: "6px",
};

const subStyle = {
  fontSize: "1rem",
  color: "#666",
  marginBottom: "6px",
};

const roleStyle = {
  fontSize: "1.05rem",
  fontWeight: "600",
  marginBottom: "12px",
  color: "#222",
};

const listStyle = {
  paddingLeft: "20px",
  margin: 0,
  lineHeight: "1.9",
  color: "#444",
  fontSize: "1rem",
};