function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <span>Let's Connect</span>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Get in Touch</h3>
          <p>
            I’m always open to new opportunities, collaborations, and exciting
            projects.
          </p>

          <div className="contact-item">
            <span className="contact-icon">✉</span>
            <a href="mailto:mazhambemunashe09@gmail.com">
              mazhambemunashe09@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <a href="tel:+263778903787">+263 77 890 3787</a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>Harare, Zimbabwe</span>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows={5} />
          <button type="submit" className="btn btn-send">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;