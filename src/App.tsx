import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Components/Hero";
import About from "./About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Certifications from "./Components/Certifications";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ProjectsPage from "./ProjectsPage";
import { useEffect, useState } from "react";

function App() {
  const [showProjects, setShowProjects] = useState(() =>
    typeof window !== "undefined" && window.location.hash.startsWith("#/projects"),
  );

  useEffect(() => {
    const syncRoute = () => setShowProjects(window.location.hash.startsWith("#/projects"));
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hash routing keeps the projects page working on static hosts without rewrite rules. */}
        {showProjects ? (
          <ProjectsPage />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Education />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
