export default function Hero() {
  const quickLinks = [
    { href: "#balance", label: "Check Your Gift Card Balance", icon: "💳" },
    { href: "#activation", label: "Learn About Card Activation", icon: "⚡" },
    { href: "#planner", label: "Use the Balance Planner", icon: "🧮" },
    { href: "#tips", label: "Read Card Safety Tips", icon: "🛡️" },
    { href: "#support", label: "Find Customer Support", icon: "📞" },
    { href: "#faq", label: "Browse Frequently Asked Questions", icon: "❓" },
  ];

  return (
    <section className="hero-wrapper ">
      <div className="wrap hero">
        <div>
          <div className="eyebrow">Activation and Balance Guide</div>

          <h1 className="mb-3">
            GiftCardMall/MyGift Balance Check and Card Activation Guide
          </h1>

          <p className="lead mb-4">
            Welcome to our GiftCardMall/MyGift information guide. Here, you can
            learn how to check your gift card balance, understand the activation
            process, and manage your prepaid card more confidently. We also share
            practical tips for tracking purchases, resolving common card issues,
            and protecting your card details.
          </p>



          <div className="btns">
            <a href="https://www.mycardwallet.com/chs/mygift/" className="btn-custom btn-p">
              Visit Official MyGiftWebsite
              <svg
                className="ico"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3v10M8 13l-4-4M8 13l4-4" />
              </svg>
            </a>
            <a
              href="https://www.giftcardmall.com/mygift"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom btn-g"
            >
              MyGiftCard Instructions
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

          {/* Checklist icon and pills in one line flex-direction row */}
          <div className="checklist-row">
            {[
              "Step-by-step guidance",
              "Official access links",
              "Balance planner tool",
            ].map((text, idx) => (
              <span key={idx} className="checklist-pill">
                <svg
                  className="checklist-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
                <span>{text}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Card Visual */}
        <div className="stage" aria-hidden="true">
          <div className="gift-card c1">
            <div className="card-brand">GiftCardMall</div>
            <div />
            <div />
          </div>
          <div className="gift-card c2">
            <div>
              <div className="card-brand">GiftCardMall Prepaid</div>
              <div className="card-chip" />
            </div>
            <div>
              <div className="card-num">•••• •••• •••• 4821</div>
              <div className="card-bottom">
                <div>
                  <div className="card-label-sm">Valid Thru</div>
                  <div className="card-value-sm">12/28</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="card-label-sm">Balance</div>
                  <div className="card-value-sm">$150.00</div>
                </div>
              </div>
            </div>
            <div className="card-balance-tag">
              <span className="card-status-dot" />
              Active
            </div>
          </div>
          <div className="deco-circle deco-1" />
          <div className="deco-circle deco-2" />
        </div>
      </div>


    </section>
  );
}
