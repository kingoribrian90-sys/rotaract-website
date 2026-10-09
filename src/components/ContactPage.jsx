import { faqs } from "../data/content";
import { socialLinks } from "../data/socialLinks";
import ContactForm from "./ContactForm";
import FaqAccordion from "./FaqAccordion";
import { PageHero, SectionHead } from "./SectionPrimitives";

function ContactPage() {
  return (
    <section id="contact" className="page-section">
      <PageHero tag="Reach Out" title="Get In Touch">
        Interested in joining, partnering, attending an event, or learning more?
        We'd be glad to hear from you.
      </PageHero>
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info reveal visible">
            <h2>Contact Details</h2>
            <div className="contact-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:rotaractorsofmurang'auniversity@gmail.com">
                  rotaractorsofmurang'auniversity@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-card">
              <h3>Phone</h3>
              <p>
                <a href="tel:+254794900455">+254 794900455</a>
              </p>
            </div>
            <div className="contact-card">
              <h3>Meeting Location</h3>
              <p>Tution block 1, GF3</p>
            </div>
            <div className="contact-card">
              <h3>Campus Reference</h3>
              <p>Murang'a University Main Campus, Murang'a, Kenya</p>
            </div>
          </div>
          <div className="contact-form-wrap reveal visible">
            <h2>Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container">
          <SectionHead
            tag="Social Channels"
            title="Connect with us online"
            center
          />
          <div className="social-grid">
            {socialLinks.map((social) => (
              <a
                href={social.href}
                className="social-box reveal visible"
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead tag="Location" title="Find us on campus" />
          <div className="map-placeholder reveal visible">
            <div>
              <h3>Murang'a University Campus</h3>
              <p>Map / location embed placeholder area</p>
              <small>
                You can later replace this with a real Google Maps embed.
              </small>
            </div>
          </div>
        </div>
      </section>
      <section className="section bg-soft">
        <div className="container">
          <SectionHead tag="FAQs" title="Frequently Asked Questions" />
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </section>
  );
}

export default ContactPage;
