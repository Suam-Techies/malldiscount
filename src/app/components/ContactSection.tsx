function ContactIcon({ children }: { children: React.ReactNode }) {
  return <span className="contact-icon">{children}</span>;
}

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="wrap">
        <div className="section-heading">
          <span className="section-kicker">Contact</span>
          <h2>Need Help With Your GiftCardMall Card?</h2>
          <p>
            Use the official customer service details printed on your card,
            packaging, or cardholder agreement for account-specific questions,
            balance inquiries, and activation support.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card contact-card-wide">
            <div className="card-number">01</div>
            <div className="contact-card-header">
              <ContactIcon>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Zm2.3-.5 6.2 4.6 6.2-4.6M5 8.6l6.2 4.6c.4.3.9.3 1.3 0L19 8.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ContactIcon>
              <h3>Support Contact</h3>
            </div>
            <div className="contact-details">
              <p>13825 Emery Avenue</p>
              <p>Cleveland, OH 44135</p>
              <p>
                <a href="tel:+18554971277">Number: (855) 497 1277</a>
              </p>
              <p>
                <a href="mailto:support@giftcardmallactivation.com">
                  Email: support@giftcardmallactivation.com
                </a>
              </p>
            </div>
            <div className="contact-actions">
              <a
                href="https://www.yelp.com/search?find_desc=GiftCardMall+Activation&find_loc=13825+Emery+Avenue+Cleveland+OH+44135"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-custom btn-g"
              >
                View on Yelp
              </a>
            </div>
          </div>

          <div className="contact-card map-card">
            <div className="card-number">02</div>
            <div className="contact-card-header">
              <ContactIcon>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Zm0-8.8a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ContactIcon>
              <h3>Map Location</h3>
            </div>
            <div className="map-wrap">
              <iframe
                title="GiftCardMall support location map"
                src="https://www.google.com/maps?q=13825+Emery+Avenue+Cleveland+OH+44135&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="contact-card">
            <div className="card-number">03</div>
            <div className="contact-card-header">
              <ContactIcon>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 3.6a1.7 1.7 0 0 1 1.7-1.7h.6a1.7 1.7 0 0 1 1.7 1.7v2.7h1.6a2.5 2.5 0 0 1 2.5 2.5v7.8a2.5 2.5 0 0 1-2.5 2.5H8.4a2.5 2.5 0 0 1-2.5-2.5V8.8a2.5 2.5 0 0 1 2.5-2.5h1.6V3.6Zm2.3 2.7h-2.6v2.4h2.6V6.3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ContactIcon>
              <h3>Visit the verified website</h3>
            </div>
            <p>
              For balance checks, transaction review, and activation steps, use
              the official card website printed on your prepaid card.
            </p>
            <a
              href="https://www.giftcardmall.com/mygift"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom btn-g"
            >
              Official GiftCardMall Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
