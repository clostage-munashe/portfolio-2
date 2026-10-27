import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-shell">
      <div className="navbar">
        <a className="logo" href="/" aria-label="Clostage home">
          <span>Clostage</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-menu${menuOpen ? " is-open" : ""}`}>
          <nav id="main-navigation" className="nav-links" aria-label="Main navigation">
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="/#/projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="/#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="/#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
            <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <a href="/#contact" className="nav-button" onClick={() => setMenuOpen(false)}>
            Work With Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
