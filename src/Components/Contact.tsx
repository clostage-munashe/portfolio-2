import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    const to = 'mazhambemunashe09@gmail.com';
    const subject = `Portfolio message from ${name || 'Visitor'}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    // open mail client with prefilled message
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setStatus('sent');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <span>Let's Connect</span>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card neumorphic-card">
          <h3>Get in Touch</h3> x
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

        <form onSubmit={handleSubmit} className="contact-form neumorphic-card" aria-label="Contact form">
          <div className="form-header">
            <div className="avatar-circle" aria-hidden>
              <img src="/profile.jpg" alt="" />
            </div>
            <h4>Send a message</h4>
          </div>

          <label className="visually-hidden" htmlFor="name">Your Name</label>
          <input id="name" className="neumorphic-input" type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} />

          <label className="visually-hidden" htmlFor="email">Your Email</label>
          <input id="email" className="neumorphic-input" type="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

          <label className="visually-hidden" htmlFor="message">Your Message</label>
          <textarea id="message" className="neumorphic-textarea" placeholder="Your Message" rows={5} value={message} onChange={(e)=>setMessage(e.target.value)} />

          <button type="submit" className="btn btn-send neumorphic-button" disabled={status==='sending'}>
            {status==='sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status==='error' && <div className="form-error">Please provide an email and a message.</div>}
          {status==='sent' && <div className="form-success">Opening your email client…</div>}
        </form>
      </div>
    </section>
  );
}

export default Contact;