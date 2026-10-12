export default function Disclaimer() {
  return (
    <div className="disclaimer-bar">
      <div className="wrap">
        <div className="disclaimer-inner">
          <div className="disclaimer-icon" aria-hidden="true">
            i
          </div>
          <div>
            <h3 className="h6 fw-bold mb-2" style={{ color: "var(--n900)" }}>
              Disclaimer
            </h3>
            <p className="mb-2">
              This website provides independent information about gift card
              balance checks, activation, and responsible card use. It is not
              affiliated with, endorsed by, or sponsored by GiftCardMall, MyGift,
              Blackhawk Network, Visa, or Mastercard.
            </p>
            <p className="mb-2">
              All brand names and trademarks belong to their respective owners.
              This guide does not directly activate cards, process payments,
              access balances, or provide account-specific support.
            </p>
            <p className="mb-0">
              For card activation, balance inquiries, transaction disputes, or
              other account services, always use the verified website or
              customer service details provided by your card issuer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
