import { useState } from 'react';
import { featuredProjects } from '../data/projects';

function Projects() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const toggleFlip = (id: number) => {
    setFlipped((cur) => (cur === id ? null : id));
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <span>Technical Projects</span>
        <h2>Recent Work</h2>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className={`project-card flip-card ${flipped === project.id ? 'is-flipped' : ''}`}
            onClick={() => toggleFlip(project.id)}
            onKeyDown={(e) => { if ((e as any).key === 'Enter') toggleFlip(project.id); }}
            role="button"
            tabIndex={0}
            aria-pressed={flipped === project.id}
          >
            <div className="flip-inner">
              <div className="flip-front project-face">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <div className="flip-hint">View details</div>
                <div className="project-animated-strip" aria-hidden="true" />
              </div>

              <div className="flip-back project-face">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-animated-strip" aria-hidden="true" />

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      View Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-view-all">
        <a href="/projects" className="btn btn-secondary">
          View All Projects
        </a>
      </div>
    </section>
  );
}

export default Projects;
