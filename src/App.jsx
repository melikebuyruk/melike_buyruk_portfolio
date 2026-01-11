import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Experience from "./sections/Experience.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />

        <footer className="footer">
          <span>© {new Date().getFullYear()} • Melike Buyruk</span>
          <span className="dot">·</span>
          <a href="#top">Back to top</a>
        </footer>
      </main>
    </div>
  );
}
