function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="hero-tag">Hi, I'm</p>
        <h1>
          Clostage Munashe Mazhambe
          
        </h1>
        <h2>Software Engineer &amp; Full-Stack Developer</h2>
        <p className="hero-text">
          I build responsive, user-friendly web applications using JavaScript,
          React, Python, HTML and CSS. I enjoy solving problems through code and
          creating digital experiences that make an impact.
        </p>

        <div className="hero-actions">
          <a href="/projects" className="btn btn-primary" aria-label="View my projects">
            View My Work
          </a>
          <a
            href="/Munashe_Clostage_Mazhambe_CV.pdf"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            download="Munashe_Clostage_Mazhambe_CV.pdf"
            aria-label="Open and download my CV"
          >
            Download CV
          </a>
        </div>

        <div className="hero-socials" role="navigation" aria-label="Social links">
          <a className="social-tile github" href="https://github.com/clostage-munashe" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a10.98 10.98 0 012.88-.39c.98 0 1.97.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.25 5.7.42.36.8 1.08.8 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" fill="currentColor"/>
            </svg>
          </a>

          <a className="social-tile linkedin" href="https://www.linkedin.com/in/clostage-munashe-mazhambe-a286953b1" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 11.02 0H4.98zM3.5 8.98h3v11h-3v-11zM9.5 8.98h2.88v1.5h.04c.4-.75 1.38-1.5 2.84-1.5 3.04 0 3.6 2 3.6 4.6v6.4h-3v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.18 1.48-2.18 3v5.8h-3v-11z" fill="currentColor"/>
            </svg>
          </a>

          <a className="social-tile email" href="mailto:mazhambemunashe09@gmail.com" aria-label="Email" title="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2.01 6.64A2 2 0 014 5h16a2 2 0 011.99 1.64L12 13 2.01 6.64zM4 8.24v8.76A2 2 0 006 19h12a2 2 0 002-2V8.24l-9.29 5.77a1 1 0 01-1.42 0L4 8.24z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-right" aria-hidden="true">
        <div className="hero-card">
          <div className="iso-wrap" aria-hidden="false">
            <div
              className="isometric-tile"
              role="img"
              aria-label="Isometric profile tile"
            >
              <div className="iso-top" />
              <div
                className="iso-front"
                style={{ backgroundImage: "url('/clostage.jpg')" }}
              />
              <div className="iso-side" />
            </div>
          </div>
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