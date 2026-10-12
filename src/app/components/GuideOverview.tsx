export default function GuideOverview() {
  const guideCards = [
    {
      num: "01",
      title: "Balance Inquiry",
      desc: "Check available funds and review recent transactions before heading to checkout to avoid payment declines.",
      features: [
        "Real-time balance lookup",
        "Recent transaction review",
        "Available credit confirmation",
      ],
      link: "#balance",
      linkText: "Check balance steps",
    },
    {
      num: "02",
      title: "Card Activation",
      desc: "Activate new Visa, Mastercard, or merchant gift cards before first use. Understand cashier vs. online activation.",
      features: [
        "In-store cashier activation",
        "Online self-service portal",
        "PIN creation and setup",
      ],
      link: "#activation",
      linkText: "Activation steps",
    },
    {
      num: "03",
      title: "Balance Calculator",
      desc: "Plan your shopping trip with our real-time balance tool. Calculate remaining funds after taxes and multi-item purchases.",
      features: [
        "Multi-item deduction",
        "Split-tender payment math",
        "Zero-balance warning",
      ],
      link: "#planner",
      linkText: "Open calculator",
    },
    {
      num: "04",
      title: "Security & Protection",
      desc: "Guard your funds against phishing, tampering, and unverified websites. Protect your 16-digit card number and CVV.",
      features: [
        "Verify official URLs",
        "Receipt retention tips",
        "Fraud avoidance measures",
      ],
      link: "#support",
      linkText: "Read security tips",
    },
  ];

  return (
    <section id="guide" style={{ background: "rgba(255, 255, 255, 0.6)" }}>
      <div className="wrap">
        <div className="section-heading">
          <div className="section-kicker">Cardholder Essentials</div>
          <h2>GiftCardMall &amp; MyGift Management Guide</h2>
          <p>
            Whether you received a gift card or purchased one as a present,
            managing prepaid cards requires knowing where to check balances, how
            activation works, and how to protect your card details.
          </p>
        </div>

        <div className="row g-4">
          {guideCards.map((card) => (
            <div key={card.num} className="col-12 col-md-6 col-lg-3">
              <div className="info-card d-flex flex-column justify-content-between">
                <div>
                  <div className="card-number">{card.num}</div>
                  <h3 className="h5 fw-bold">{card.title}</h3>
                  <p>{card.desc}</p>
                  <ul className="mb-4">
                    {card.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <a
                    href={card.link}
                    className="fw-semibold text-decoration-none d-inline-flex align-items-center gap-1"
                    style={{ color: "var(--p600)", fontSize: "0.875rem" }}
                  >
                    {card.linkText} &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
