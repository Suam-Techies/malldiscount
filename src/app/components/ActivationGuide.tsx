export default function ActivationGuide() {
  const steps = [
    {
      num: 1,
      title: "Save Your Receipt",
      desc: "Keep your original purchase receipt in a safe place.",
    },
    {
      num: 2,
      title: "Locate Instructions",
      desc: "Locate the activation instructions supplied with your gift card.",
    },
    {
      num: 3,
      title: "Open Verified Portal",
      desc: "Open the verified website or use the customer service number printed on the card.",
    },
    {
      num: 4,
      title: "Provide Card Details",
      desc: "Follow the issuer's instructions and provide the requested information.",
    },
    {
      num: 5,
      title: "Confirm Active Status",
      desc: "Confirm that the card is active before attempting a purchase.",
    },
  ];

  const failureTips = [
    "Check that the information you entered matches the card.",
    "Wait for any processing delay specified by the issuer.",
    "Contact the retailer if the card was not activated at checkout.",
    "Call the customer service number printed on the card for further assistance.",
    "Keep your receipt until you have confirmed that your card works correctly.",
  ];

  return (
    <section id="activation" style={{ background: "rgba(255, 255, 255, 0.5)" }}>
      <div className="wrap">
        <div className="section-heading">
          <div className="section-kicker">Card Activation</div>
          <h2>How to Activate a GiftCardMall/MyGift Card</h2>
          <p>
            Many prepaid gift cards are activated by the retailer when purchased.
            However, some cards may require an additional activation step before
            they can be used. If your card is not ready to use, check the
            instructions included with the card or printed on its packaging.
          </p>
        </div>

        <h3 className="h5 fw-bold mb-3" style={{ color: "var(--n900)" }}>
          Steps to Follow for Card Activation
        </h3>

        <div className="steps-list mb-4">
          {steps.map((s) => (
            <div key={s.num} className="step-item">
              <div className="step-number">{s.num}</div>
              <div>
                <h4 className="h6 fw-bold mb-1">{s.title}</h4>
                <p className="mb-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What to Do If Activation Fails */}
        <div className="troubleshoot-box">
          <div className="d-flex align-items-center gap-2 mb-2">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "var(--warn)" }}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <h3 className="h6 fw-bold m-0" style={{ color: "var(--warn)" }}>
              What to Do If Activation Fails
            </h3>
          </div>
          <p className="small text-secondary mb-3">
            If you cannot complete the activation process, try these steps:
          </p>
          <ul className="mb-0">
            {failureTips.map((tip, idx) => (
              <li key={idx} className="mb-2">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <a
            href="https://www.giftcardmall.com/mygift"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-custom btn-p"
          >
            Activate Card on Verified Portal
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
    </section>
  );
}
