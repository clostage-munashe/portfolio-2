function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="hero-tag">Hello, my name is</p>
        <h1>Clostage Munashe Mazhambe</h1>
        <h2>Software Engineer &amp; Full-Stack Developer</h2>
        <p className="hero-text">
          I build thoughtful, responsive web experiences and useful applications
          that bring ideas to life.
        </p>
        <div className="hero-actions">
          <a href="/#/contact" className="btn btn-primary">Contact me</a>
          <a href="/#/projects" className="btn btn-secondary">View my work</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-photo-frame">
          <img src="/clostage.jpg" alt="Clostage Munashe Mazhambe" />
        </div>
        <span className="hero-photo-caption">Based in Harare, Zimbabwe</span>
      </div>
    </section>
  );
}

export default Hero;
