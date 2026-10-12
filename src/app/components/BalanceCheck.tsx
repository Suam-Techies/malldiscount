export default function BalanceCheck() {
  const steps = [
    {
      num: 1,
      title: "Open a secure browser",
      text: "Visit the card management website printed on your card.",
    },
    {
      num: 2,
      title: "Confirm the website address",
      text: "Ensure the URL is correct and secure before entering any information.",
    },
    {
      num: 3,
      title: "Enter requested card details",
      text: "Submit your card details on the verified official page.",
    },
    {
      num: 4,
      title: "Follow verification instructions",
      text: "Complete the website's security and verification instructions.",
    },
    {
      num: 5,
      title: "Review available balance",
      text: "Check your available balance and transaction history, if provided.",
    },
  ];

  const requirements = [
    "Your gift card number",
    "The card's expiration date",
    "The security code printed on the card",
    "An internet connection",
  ];

  return (
    <section id="balance">
      <div className="wrap">
        <div className="section-heading">
          <div className="section-kicker">Balance Inquiry</div>
          <h2>How to Check Your GiftCardMall/MyGift Balance</h2>
          <p>
            Checking your available gift card balance before making a purchase can
            help you avoid declined transactions and unexpected payment
            problems. Eligible MyGift cardholders can use the card management
            website specified on their card to review their available balance and
            transaction activity.
          </p>
        </div>

        <h3 className="h5 fw-bold mb-3" style={{ color: "var(--n900)" }}>
          Steps to Check Your MyGift Balance
        </h3>

        <div className="steps-list mb-4">
          {steps.map((s) => (
            <div key={s.num} className="step-item">
              <div className="step-number">{s.num}</div>
              <div>
                <h4 className="h6 fw-bold mb-1">{s.title}</h4>
                <p className="mb-0">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4 mt-2">
          <div className="col-12 col-lg-7">
            <div className="info-box mt-0 h-100">
              <h3 className="h6 fw-bold mb-2">What You May Need</h3>
              <p className="text-secondary small mb-3">
                Depending on your card and its issuer, you may need the following
                information:
              </p>
              <ul>
                {requirements.map((req, i) => (
                  <li key={i}>
                    <span className="dot" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div
              className="p-4 rounded-4 h-100 d-flex flex-column justify-content-between"
              style={{
                background: "var(--a100)",
                border: "1px solid rgba(232, 163, 61, 0.3)",
              }}
            >
              <div>
                <div
                  className="d-flex align-items-center gap-2 mb-2 fw-bold"
                  style={{ color: "var(--warn)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  Security Reminder
                </div>
                <p
                  className="mb-3"
                  style={{ fontSize: "0.875rem", color: "var(--n700)", lineHeight: 1.6 }}
                >
                  Never share your gift card number, PIN, or security code with
                  an unknown person. Only enter sensitive information on the
                  verified website specified by your card issuer.
                </p>
              </div>

              <div>
                <a
                  href="https://www.giftcardmall.com/mygift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-custom btn-p w-100 justify-content-center"
                >
                  Visit Official Card Website
                  <svg
                    className="ico"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 13L13 3M13 3H5M13 3v8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
