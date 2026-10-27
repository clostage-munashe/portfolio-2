import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Components/Hero";
import About from "./About";
import Projects from "./Components/Projects";
import Services from "./Services";
import Experience from "./Components/Experience";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import ContactBanner from "./ContactBanner";
import Footer from "./Components/Footer";
import ProjectsPage from "./ProjectsPage";
import PortfolioDetails from "./PortfolioDetails";
import { useEffect, useState } from "react";

function App() {
  const getPage = () => {
    if (typeof window === "undefined") return "home";
    if (window.location.hash.startsWith("#/projects")) return "projects";
    if (window.location.hash.startsWith("#/contact") || window.location.hash === "#contact") return "contact";
    return "home";
  };
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash;
      const nextPage = hash.startsWith("#/projects")
        ? "projects"
        : hash.startsWith("#/contact") || hash === "#contact"
          ? "contact"
          : "home";
      setPage(nextPage);

      if (nextPage === "home" && /^#[A-Za-z][\w-]*$/.test(hash)) {
        const targetId = hash.slice(1);
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
          });
        });
      }
    };
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hash routing keeps the projects page working on static hosts without rewrite rules. */}
        {page === "contact" ? (
          <Contact />
        ) : page === "projects" ? (
          <>
            <ProjectsPage />
            <PortfolioDetails />
            <ContactBanner />
          </>
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Experience />
            <Certifications />
            <Projects />
            <PortfolioDetails />
            <ContactBanner />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
