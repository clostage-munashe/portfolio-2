import { projects } from './data/projects';

function ProjectsPage() {
  return (
    <main className="page-shell">
      <section className="section projects-page">
        <div className="section-header projects-header">
          <span>Portfolio</span>
          <h2>All Projects</h2>
        </div>

        <div className="projects-grid-all">
          {projects.map((project) => (
            <article key={project.id} className="project-card all-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">Live Demo</a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-back-link">
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
