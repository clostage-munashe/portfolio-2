function PortfolioDetails() {
  return (
    <>
      <section id="education" className="portfolio-details" aria-label="Education and quote">
        <div className="details-column education-skills">
          <p className="details-heading">Education</p>
          <div className="details-subsection">
            <div className="education-line">
              <div><strong>Software Engineering</strong><span>Uncommon.org · In progress</span></div>
              <span className="details-date">2026 –</span>
            </div>
            <div className="education-line">
              <div><strong>7 O Levels</strong><span>Nyamhunga High School</span></div>
              <span className="details-date">2021–24</span>
            </div>
          </div>
        </div>

        <aside className="details-quote">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>Good design should look considered and work beautifully.</blockquote>
          <span className="quote-signature">Clostage</span>
          <p>Let’s create something useful together.</p>
        </aside>
      </section>

    </>
  );
}

export default PortfolioDetails;
