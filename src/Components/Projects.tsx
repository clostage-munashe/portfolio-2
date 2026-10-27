import ProjectCarousel from "../ProjectCarousel";
import { projects } from "../data/projects";

function Projects() {
  return <ProjectCarousel projects={projects} heading="Selected projects" showAllLink />;
}

export default Projects;
