function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="hero-tag">Hi, I'm</p>
        <h1>Clostage Munashe Mazhambe</h1>
        <h3>Software Engineer</h3>
        <p className="hero-text">
          I build responsive, user-friendly web applications using JavaScript,
          React, Python, HTML and CSS. I enjoy solving problems through code and
          creating digital experiences that make an impact.
        </p>
       
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary" aria-label="View my projects">
            View Projects
          </a>
          <a
            href="/Clostage-Munashe-CV.pdf"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            download="Clostage-Munashe-CV.pdf"
            aria-label="Open and download my CV"
          >
            Download CV
          </a>
        </div>

        <div className="hero-socials">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          <img
            className="hero-image"
            src="public/profile.jpg"
            alt="Clostage Munashe Mazhambe"
          />
        </div>
        <div className="hero-build-text" aria-hidden="true">
          <span>Build</span>
          <span>Create</span>
          <span>Grow</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;