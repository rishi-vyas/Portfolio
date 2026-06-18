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
  <span style={{ color: "#111" }}>My Lastest Work Experience:</span>
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
                  Engineered scalable software solutions that streamlined complex business workflows, driving a 31% improvement in operational efficiency.
                </li>
                <li>
                  Built and optimized high-performance systems supporting over 2 million users, delivering an 87% improvement in responsiveness and user experience reducing training cost by $950K annually.
                </li>
                <li>
                  Developed data-driven platforms and intelligent workflow solutions that enabled seamless integration, automation, and operational insights across enterprise environments.
                </li>
                <li>
                  Applied analytics, automation, and AI-inspired methodologies to solve complex engineering challenges and improve business outcomes.
                </li>
                 <li>
                  Enhanced system scalability, reliability, and maintainability through architectural improvements and continuous performance optimization.
                </li>
                <li>
                  Delivered software solutions for globally recognized organizations including Google, Samsung, NVIDIA, and TSMC, contributing to mission-critical systems within the semiconductor and technology ecosystem.
                </li>
                <li>
                  Contributed to the development of AI-driven and data-centric initiatives by integrating analytics, automation, and decision-support capabilities into enterprise applications.
                </li>
                <li>
                  Led performance optimization efforts that improved scalability, maintainability, and long-term reliability of production systems operating at enterprise scale.
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