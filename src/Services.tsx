const services = [
  { icon: "✦", title: "Creative Design", text: "Clean, considered layouts that make your message clear and memorable." },
  { icon: "</>", title: "Clean Code", text: "Readable, maintainable frontend code built with modern tools." },
  { icon: "▣", title: "User Interfaces", text: "Responsive interfaces designed to feel natural across screen sizes." },
  { icon: "◉", title: "User Experience", text: "Thoughtful flows that help people get things done with less friction." },
  { icon: "◎", title: "Web Applications", text: "Useful web apps connected to data and services through APIs." },
  { icon: "⚑", title: "Ongoing Support", text: "Reliable refinements, fixes, and help as your project grows." },
];

function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="section-header">
        <span>My services</span>
        <h2>What I Can Do</h2>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon" aria-hidden="true">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
