import ProjectCarousel from "./ProjectCarousel";
import { projects } from "./data/projects";

function ProjectsPage() {
  return (
    <div className="page-shell">
      <ProjectCarousel projects={projects} heading="All projects" eyebrow="Portfolio" />
      <div className="projects-back-link">
        <a href="/" className="btn btn-secondary">Back to Home</a>
      </div>
    </div>
  );
}

export default ProjectsPage;
