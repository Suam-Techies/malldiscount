export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-title d-flex align-items-center gap-2">
              <span className="logo-icon-wrap" style={{ width: 30, height: 30 }}>
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: 28, height: 28 }}
                >
                  <rect
                    x="2"
                    y="6.5"
                    width="28"
                    height="19"
                    rx="4"
                    fill="url(#footCardGrad)"
                    stroke="rgba(255, 255, 255, 0.45)"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M2 11.5h28"
                    stroke="rgba(15, 23, 42, 0.4)"
                    strokeWidth="2.5"
                  />
                  <rect
                    x="5.5"
                    y="15.5"
                    width="6"
                    height="5"
                    rx="1"
                    fill="#fbbf24"
                    stroke="#d97706"
                    strokeWidth="0.75"
                  />
                  <defs>
                    <linearGradient id="footCardGrad" x1="2" y1="6.5" x2="30" y2="25.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4f46e5" />
                      <stop offset="1" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span>GiftCardMall</span>
            </div>
            <p className="footer-desc">
              Your independent informational guide for prepaid and MyGift balance
              checks, card activation, and consumer protection.
            </p>
          </div>

        </div>

        <div className="footer-disclaimer">
          <strong>Disclaimer:</strong> This website provides independent
          information about gift card balance checks, activation, and
          responsible card use. It is not affiliated with, endorsed by, or
          sponsored by GiftCardMall, MyGift, Blackhawk Network, Visa, or
          Mastercard. All brand names and trademarks belong to their respective
          owners. This guide does not directly activate cards, process payments,
          access balances, or provide account-specific support. For card
          activation, balance inquiries, transaction disputes, or other account
          services, always use the verified website or customer service details
          provided by your card issuer.
        </div>

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 footer-bottom">
          <div>&copy; 2026 GiftCardMallActivation.com. All rights reserved.</div>
          <div>Independent Informational Resource</div>
        </div>
      </div>
    </footer>
  );
}
