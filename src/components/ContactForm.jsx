import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const contactEmail = "rotaractorsofmurang'auniversity@gmail.com";

function ContactForm() {
  const [form, setForm] = useState(initialForm);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\n\n${form.message}`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            value={form.name}
            onChange={updateField}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g. yourname@gmail.com"
            value={form.email}
            onChange={updateField}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="eg. +254 700 000 000"
            value={form.phone}
            onChange={updateField}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Message subject"
            value={form.subject}
            onChange={updateField}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="Write your message here..."
          value={form.message}
          onChange={updateField}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Open email to send
      </button>
      <p className="form-note" role="note">
        Your email app will open with your message ready to send. If it does not,
        email us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
    </form>
  );
}

export default ContactForm;
