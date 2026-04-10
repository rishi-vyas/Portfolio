import "./index.css";
import Header from "./components/Header";
import IntroComponents from "./components/IntroComponents";
import SkillSet from "./components/SkillSet";
import Projects from "./components/Projects";
import SkillsMarquee from "./components/SkillsMarquee";
import Footer from "./components/Footer";
import MyExperience from "./components/MyExperience";
import React from "react";

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main className="page-content">
        <IntroComponents />
        <SkillSet />
        <Projects />
        <SkillsMarquee />
        <MyExperience />
      </main>

      <Footer />
    </div>
  );
}

export default App;