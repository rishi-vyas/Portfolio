import React from "react";

function Footer() {
  return (
    <div style={footerWrapper}>
      <div style={footerContainer}>
        <a href="https://linkedin.com/rishikesh-vyas" target="_blank" rel="noreferrer" style={linkStyle}>
          LinkedIn
        </a>
        <a href="https://github.com/rishi-vyas" target="_blank" rel="noreferrer" style={linkStyle}>
          GitHub
        </a>
        <a href="mailto:rishivyas1999@gmail.com" style={linkStyle}>
          Email
        </a>
        <a href="https://instagram.com/rishivyas11" target="_blank" rel="noreferrer" style={linkStyle}>
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Footer;

/* Styles */

const footerWrapper = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "100px",   // space from previous section
  marginBottom: "40px", // space from bottom
};

const footerContainer = {
  display: "flex",
  gap: "28px",
  background: "#111",
  padding: "14px 32px",
  borderRadius: "999px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
};

const linkStyle = {
  color: "#d1d1d1",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: "500",
  transition: "all 0.3s ease",
};