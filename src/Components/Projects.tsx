function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <span>Technical Projects</span>
        <h2>Recent Work</h2>
      </div>

      <div className="projects-grid">
        <article className="project-card">
          <h3>VisionLux Eye Clinic App</h3>
          <p>
            A modern eye clinic management app that streamlines patient appointments, medical records, and billing processes.
          </p>
          <div className="project-tags">
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
          </div>
          <div className="project-links">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </article>

        <article className="project-card">
          <h3>Todo Application</h3>
          <p>
            A simple and efficient task manager app with add, edit, delete, and
            local storage functionality.
          </p>
          <div className="project-tags">
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
          <div className="project-links">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </article>

        <article className="project-card">
          <h3>TravelZim - Zimbabwe Tourism Guide App</h3>
          <p>
            A tourism platform helping travelers discover Zimbabwe destinations, plan trips, book services and access travel information.
          </p>
          <div className="project-tags">
            <span>React</span>
            <span>API</span>
            <span>CSS</span>
          </div>
          <div className="project-links">
            <a href="#">GitHub</a>
            <a href="#">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;