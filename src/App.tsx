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

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Simple path-based routing: /projects -> ProjectsPage, otherwise homepage sections */}
        {typeof window !== 'undefined' && window.location.pathname.startsWith('/projects') ? (
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