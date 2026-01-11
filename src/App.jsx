import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import About from "./sections/About/About.jsx";
import Skills from "./sections/Skills/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import ExperienceSplit from "./sections/ExperienceSplit/ExperienceSplit.jsx";
import Education from "./sections/Education/Education.jsx";
import Certifications from "./sections/Certifications/Certifications.jsx";
import Achievements from "./sections/Achievements/Achievements.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <Hero />
        <About />
        <Education />
        <ExperienceSplit />
        <Skills />
        <Certifications />
        <Achievements />
        <Projects />

        <footer className="footer">
          <span>© {new Date().getFullYear()} • Melike Buyruk</span>
          <span className="dot">·</span>
          <a href="#top">Back to top</a>
        </footer>
      </main>
    </div>
  );
}
