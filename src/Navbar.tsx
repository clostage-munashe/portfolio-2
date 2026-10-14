function Navbar() {
  return (
    <header className="navbar-shell">
      <div className="navbar">
        <div className="logo" aria-label="Clostage home">
          <span>Clostage</span>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/#experience">Experience</a>
          <a href="/#certifications">Certifications</a>
          <a href="/#contact">Contact</a>
        </nav>

        <a href="/#contact" className="nav-button">
          Work With Us
        </a>
      </div>
    </header>
  );
}

export default Navbar;