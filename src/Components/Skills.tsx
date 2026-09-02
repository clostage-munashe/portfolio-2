function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <span>Technical Skills</span>
        <h2>What I Work With</h2>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>React</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Next JS</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Responsive Design</li>
            <li>UI/UX Basics</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Figma</li>
            <li>Postman</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Other</h3>
          <ul>
            <li>REST APIs (Basic)</li>
            <li>JSON</li>
            <li>Version Control</li>
            <li>Debugging</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;