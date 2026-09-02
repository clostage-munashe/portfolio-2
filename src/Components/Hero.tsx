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
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Download Resume
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
          {/* <img
            className="hero-image"
            src="/IMG-20250927-WA0020.jpg"
            alt="Clostage Munashe Mazhambe"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;