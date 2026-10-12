export default function SecurityTips() {
  const protectTips = [
    "Keep your purchase receipt until the card balance has been used.",
    "Store the card in a secure place.",
    "Do not disclose your card number or security code in unsolicited messages.",
    "Check the website address carefully before submitting card information.",
    "Contact the issuer promptly if your card is lost, stolen, or compromised.",
  ];

  const carefulTips = [
    "Check your available balance before shopping.",
    "Compare the purchase total with the funds remaining on your card.",
    "Ask the merchant whether split payments are accepted if your balance is insufficient.",
    "Check whether the issuer requires a billing address for online purchases.",
    "Be aware that gas pumps and restaurants may place temporary holds on prepaid cards.",
  ];

  const supportIssues = [
    "Card activation assistance",
    "Declined card purchases",
    "Incorrect balance information",
    "Unrecognized card transactions",
    "Lost, stolen, or damaged cards",
  ];

  return (
    <section id="tips" style={{ background: "rgba(255, 255, 255, 0.6)" }}>
      <div className="wrap">
        <div className="section-heading">
          <div className="section-kicker">Best Practices &amp; Assistance</div>
          <h2>GiftCardMall &amp; MyGift Tips and Customer Support</h2>
          <p>
            Using a prepaid gift card responsibly can make everyday shopping
            easier. The following recommendations can help you protect your
            funds and resolve common card issues.
          </p>
        </div>

        <div className="row g-4">
          {/* 1. Protect Your Gift Card Information */}
          <div className="col-12 col-lg-6">
            <div className="info-card h-100">
              <div
                className="d-inline-flex align-items-center justify-content-center p-2 rounded-3 mb-3"
                style={{ background: "var(--p100)", color: "var(--p600)" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2">
                1. Protect Your GiftCardMall Card Information
              </h3>
              <p className="mb-3">
                Your card details should be treated like cash because someone
                who obtains them may be able to use the available funds.
              </p>
              <ul className="mb-0">
                {protectTips.map((tip, idx) => (
                  <li key={idx} className="mb-2">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Use Your Card Carefully */}
          <div className="col-12 col-lg-6">
            <div className="info-card h-100">
              <div
                className="d-inline-flex align-items-center justify-content-center p-2 rounded-3 mb-3"
                style={{ background: "var(--s100)", color: "var(--s600)" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <h3 className="h5 fw-bold mb-2">2. Use Your Gift Card Carefully</h3>
              <p className="mb-3">
                A few simple precautions can help prevent payment difficulties.
              </p>
              <ul className="mb-0">
                {carefulTips.map((tip, idx) => (
                  <li key={idx} className="mb-2">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Get Help When You Need It */}
          <div className="col-12" id="support">
            <div
              className="p-4 rounded-4"
              style={{
                background: "var(--w)",
                border: "1px solid rgba(201, 214, 230, 0.6)",
                boxShadow: "var(--sh)",
              }}
            >
              <div className="row g-4 align-items-center">
                <div className="col-12 col-lg-7">
                  <div
                    className="d-inline-flex align-items-center justify-content-center p-2 rounded-3 mb-3"
                    style={{ background: "var(--a100)", color: "var(--a500)" }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <h3 className="h5 fw-bold mb-2">3. Get GiftCardMall Help When You Need It</h3>
                  <p className="mb-3">
                    If you experience a problem with your card, use the official
                    support channel provided by the issuer. Customer support may
                    be able to assist with issues involving:
                  </p>
                  <ul className="mb-3">
                    {supportIssues.map((issue, idx) => (
                      <li key={idx} className="mb-1">
                        {issue}
                      </li>
                    ))}
                  </ul>
                  <p className="small text-secondary mb-0">
                    Keep your purchase receipt and relevant transaction
                    information available when contacting support. Do not send
                    your complete card credentials to an unverified website.
                  </p>
                </div>

                <div className="col-12 col-lg-5">
                  <div
                    className="p-4 rounded-3 text-center"
                    style={{
                      background: "var(--n100)",
                      border: "1px solid var(--n300)",
                    }}
                  >
                    <h4 className="h6 fw-bold mb-2">Need Direct Issuer Help?</h4>
                    <p className="small text-secondary mb-3">
                      For assistance, use the customer service number printed on the
                      back of your card or the verified support website specified
                      by the issuer.
                    </p>
                    <a
                      href="https://www.giftcardmall.com/mygift"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-custom btn-p w-100 justify-content-center"
                    >
                      Visit Official GiftCardMall Portal
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
        </div>
      </div>
    </section>
  );
}
