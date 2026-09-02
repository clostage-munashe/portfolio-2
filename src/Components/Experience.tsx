function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-header">
        <span>Experience</span>
        <h2>Where I've Learned</h2>
      </div>

      <div className="experience-grid">
        <div className="experience-card">
          <h3>Software Engineering Student</h3>
          <p>Uncommon.org • 2026 - Present</p>
          <ul>
            <li>Building projects using JavaScript, React and Python</li>
            <li>Learning Git workflows and collaborative development</li>
            <li>Applying Agile methodologies in team projects</li>
          </ul>
        </div>

        <div className="experience-card">
          <h3>Youth Coding Instructor</h3>
          <p>Primary Schools · Harare • 2026 - Present</p>
          <ul>
            <li>Teach children basic programming concepts with Scratch</li>
            <li>Help students build interactive projects</li>
            <li>Develop communication and leadership skills</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;