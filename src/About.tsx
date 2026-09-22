function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <span>About Me</span>
        <h2>Software Engineer [Student]</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I am an aspiring Software Engineer. I enjoy building responsive web
            applications, learning new technologies and turning ideas into
            real-world solutions.
          </p>
          <p>
            Currently studying Software Engineering and contributing to
            projects that improve both design and performance for modern users.
          </p>
        </div>

        
        <div className="about-cards">
          <div className="info-card">
            <span className="info-card-icon" aria-hidden="true">⌖</span>
            <h3>Location</h3>
            <p>Warren Park 1, Harare, Zimbabwe</p>
          </div>
          <div className="info-card">
            <span className="info-card-icon" aria-hidden="true">⌘</span>
            <h3>Education</h3>
            <p>Software Engineering (In Progress)</p>
          </div>
          <div className="info-card">
            <span className="info-card-icon" aria-hidden="true">✦</span>
            <h3>Experience</h3>
            <p>Youth Coding Instructor</p>
          </div>
          <div className="info-card">
            <span className="info-card-icon" aria-hidden="true">↗</span>
            <h3>Focus</h3>
            <p>Accessible, responsive web experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;