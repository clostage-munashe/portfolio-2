const skills = ["HTML5", "CSS3", "JavaScript", "React", "Python", "Next.js"];

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-photo">
        <img src="/clostage.jpg" alt="Clostage Munashe Mazhambe" loading="lazy" />
      </div>
      <div className="about-copy">
        <div className="section-header">
          <span>About me</span>
          <h2>Who am I</h2>
        </div>
        <p>
          I am a software engineering student and full-stack developer who enjoys
          turning practical ideas into clear, friendly digital experiences. I
          build responsive websites and applications with care for the details,
          accessibility, and the people who use them.
        </p>
        <p>
          I am currently studying at Uncommon.org and teaching young learners
          the foundations of coding. I keep learning, building, and looking for
          meaningful ways to use technology.
        </p>
        <div id="skills" className="about-skills" aria-label="Technical skills">
          {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
        </div>
        <a
          href="/Munashe_Clostage_Mazhambe_CV.pdf"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          download="Munashe_Clostage_Mazhambe_CV.pdf"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default About;
