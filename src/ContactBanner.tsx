function ContactBanner() {
  return (
    <section className="contact-banner" aria-labelledby="contact-banner-title">
      <div className="contact-banner-copy">
        <h2 id="contact-banner-title">Let’s work together</h2>
        <span className="contact-spark" aria-hidden="true">✦</span>
        <p>I’m open to new projects and collaborations. Let’s create something useful together.</p>
        <a href="/#/contact" className="availability-link">
          <span aria-hidden="true">↗</span> Available for new projects
        </a>
      </div>

      <div className="contact-banner-details">
        <a className="banner-contact-link" href="mailto:mazhambemunashe09@gmail.com">
          <span className="banner-contact-icon" aria-hidden="true">@</span>
          <span>mazhambemunashe09@gmail.com</span>
        </a>
        <a className="banner-contact-link" href="tel:+263778903787">
          <span className="banner-contact-icon" aria-hidden="true">☎</span>
          <span>+263 77 890 3787</span>
        </a>
      </div>

      <div className="contact-banner-art" aria-hidden="true">
        <div className="laptop-screen">
          <div className="laptop-topbar"><i /><i /><i /><span>clostage.dev</span></div>
          <div className="laptop-content">
            <div className="laptop-copy">
              <span>DESIGN · DEVELOP</span>
              <strong>Digital<br />experiences</strong>
              <i />
              <i />
            </div>
            <div className="laptop-visual"><b /><b /><b /></div>
          </div>
        </div>
        <div className="laptop-base" />
      </div>

      <a href="/#/contact" className="contact-banner-button btn btn-primary">
        Contact me <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}

export default ContactBanner;
