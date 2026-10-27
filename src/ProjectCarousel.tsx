import { useRef } from "react";
import type { Project } from "./data/projects";

type ProjectCarouselProps = {
  projects: Project[];
  heading: string;
  eyebrow?: string;
  showAllLink?: boolean;
};

function ProjectCarousel({ projects, heading, eyebrow = "Featured work", showAllLink = false }: ProjectCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.86, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="project-carousel-header">
        <div className="section-header">
          <span>{eyebrow}</span>
          <h2>{heading}</h2>
        </div>
        <div className="project-carousel-actions">
          {showAllLink && <a className="explore-projects" href="/#/projects">Explore all projects <span aria-hidden="true">→</span></a>}
          <button className="carousel-arrow" type="button" aria-label="Show previous projects" onClick={() => slide(-1)}>←</button>
          <button className="carousel-arrow" type="button" aria-label="Show next projects" onClick={() => slide(1)}>→</button>
        </div>
      </div>

      <div className="project-carousel-viewport" ref={trackRef} aria-label="Project carousel">
        <div className="project-carousel-track">
          {projects.map((project, index) => {
            const destination = project.liveUrl || project.githubUrl || "/#/contact";
            const isExternal = destination.startsWith("http");

            return (
              <article className="project-showcase-card" data-project-id={project.id} key={project.id}>
                <div className="project-showcase-art">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-showcase-overlay">
                    <span className="project-showcase-kicker">{project.tags.slice(0, 2).join(" · ")}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a
                      className="project-showcase-arrow"
                      href={destination}
                      aria-label={isExternal ? `Open ${project.title}` : `Contact me about ${project.title}`}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                    >
                      ↗
                    </a>
                  </div>
                </div>
                <div className="project-showcase-caption">
                  <span className="project-showcase-number">{String(index + 1).padStart(2, "0")}</span>
                  <div><h4>{project.title}</h4><p>{project.tags.join(" · ")}</p></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectCarousel;
