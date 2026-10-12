export default function CtaSection() {
  return (
    <section className="pt-0">
      <div className="wrap">
        <div className="cta-section">
          <h2>Ready to Check Your GiftCardMall Card Balance?</h2>
          <p className="mb-3">
            Before making your next purchase, confirm the available funds on your
            gift card and review any recent transactions. Using the correct card
            management service can help you understand your balance and avoid
            unnecessary payment issues.
          </p>
          <p className="small mb-4 text-secondary">
            Visit the verified card website printed on your gift card to check
            your balance, follow activation instructions, or find assistance
            with a card-related problem.
          </p>
          <div className="btns justify-content-center">
            <a
              href="https://www.giftcardmall.com/mygift"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom btn-p"
            >
              Visit Verified GiftCardMall Website
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
            <a href="#planner" className="btn-custom btn-g">
              Estimate Next Purchase
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
          </div>
        </div>
      </div>
    </section>
  );
}
