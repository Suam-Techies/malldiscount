"use client";

import { useState } from "react";

export default function BalancePlanner() {
  const [initialBalance, setInitialBalance] = useState<string>("150.00");
  const [purchaseAmount, setPurchaseAmount] = useState<string>("85.00");
  const [taxRate, setTaxRate] = useState<string>("7.0");

  const initNum = parseFloat(initialBalance) || 0;
  const purchNum = parseFloat(purchaseAmount) || 0;
  const taxPct = parseFloat(taxRate) || 0;

  const totalTax = purchNum * (taxPct / 100);
  const totalPurchase = purchNum + totalTax;
  const remaining = initNum - totalPurchase;
  const percentUsed =
    initNum > 0 ? Math.min(100, Math.max(0, (totalPurchase / initNum) * 100)) : 0;

  const handlePresetExample = () => {
    setInitialBalance("150.00");
    setPurchaseAmount("85.00");
    setTaxRate("7.0");
  };

  return (
    <section id="planner">
      <div className="wrap">
        <div className="section-heading">
          <div className="section-kicker">Interactive Tool</div>
          <h2>MyGift Balance Planner: Estimate Your Next Purchase</h2>
          <p>
            Planning a purchase before checkout can help you decide whether your
            gift card has enough funds to cover the total cost. A balance planner
            can estimate the amount remaining after a purchase, including an
            estimated sales tax amount. It can also help you determine whether you
            might need another payment method.
          </p>
        </div>

        {/* Guidance and Explanatory Content */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6">
            <div className="info-card h-100">
              <h3 className="h6 fw-bold mb-3" style={{ color: "var(--n900)" }}>
                Information to Enter
              </h3>
              <p className="small text-secondary mb-3">
                To estimate your purchase, gather these details:
              </p>
              <ul className="mb-0">
                <li className="mb-2">
                  <strong>Current gift card balance:</strong> The amount
                  currently available on your card.
                </li>
                <li className="mb-2">
                  <strong>Planned purchase amount:</strong> The price of the
                  items you intend to buy.
                </li>
                <li className="mb-0">
                  <strong>Estimated sales tax:</strong> The applicable tax rate
                  for your purchase.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="info-card h-100">
              <h3 className="h6 fw-bold mb-3" style={{ color: "var(--n900)" }}>
                Understanding Your Results
              </h3>
              <p className="small text-secondary mb-2">
                After entering the amounts, a calculator can estimate:
              </p>
              <ul className="mb-3">
                <li>The purchase total after tax</li>
                <li>The amount deducted from your gift card</li>
                <li>The balance remaining after checkout</li>
                <li>Any additional amount you may need to pay</li>
              </ul>
              <div
                className="p-3 rounded-3"
                style={{
                  background: "var(--p100)",
                  fontSize: "0.8125rem",
                  color: "var(--p700)",
                }}
              >
                <strong>Worked Example:</strong> Suppose your gift card has $150
                available and your purchase total, including tax, is $90.95. Your
                estimated remaining balance would be $59.05.
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Calculator Component */}
        <div className="calc-section">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <span className="calc-badge">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="16" y1="14" x2="16" y2="18" />
                <path d="M16 10h.01" />
                <path d="M12 10h.01" />
                <path d="M8 10h.01" />
                <path d="M12 14h.01" />
                <path d="M8 14h.01" />
                <path d="M12 18h.01" />
                <path d="M8 18h.01" />
              </svg>
              Live Purchase Estimator
            </span>
            <button
              type="button"
              onClick={handlePresetExample}
              className="btn btn-sm btn-link text-decoration-none"
              style={{ color: "var(--p600)", fontSize: "0.8125rem" }}
            >
              Reset to $150 Example
            </button>
          </div>

          <div className="calc-grid">
            {/* Input Column */}
            <div>
              <div className="calc-input-group">
                <label htmlFor="planner-balance">
                  Current Gift Card Balance ($)
                </label>
                <div className="d-flex gap-2 mb-2">
                  {["50.00", "100.00", "150.00", "200.00"].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setInitialBalance(preset)}
                      className={`btn btn-sm ${
                        initialBalance === preset
                          ? "btn-primary"
                          : "btn-outline-secondary"
                      }`}
                      style={{
                        borderRadius: "8px",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        backgroundColor:
                          initialBalance === preset
                            ? "var(--p600)"
                            : "transparent",
                        borderColor:
                          initialBalance === preset
                            ? "var(--p600)"
                            : "var(--n300)",
                        color:
                          initialBalance === preset ? "#fff" : "var(--n700)",
                      }}
                    >
                      ${preset.split(".")[0]}
                    </button>
                  ))}
                </div>
                <input
                  id="planner-balance"
                  type="number"
                  min="0"
                  step="0.01"
                  value={initialBalance}
                  onChange={(e) => setInitialBalance(e.target.value)}
                  placeholder="e.g. 150.00"
                />
              </div>

              <div className="calc-input-group">
                <label htmlFor="planner-purchase">
                  Planned Purchase Amount ($)
                </label>
                <input
                  id="planner-purchase"
                  type="number"
                  min="0"
                  step="0.01"
                  value={purchaseAmount}
                  onChange={(e) => setPurchaseAmount(e.target.value)}
                  placeholder="e.g. 85.00"
                />
              </div>

              <div className="calc-input-group">
                <label htmlFor="planner-tax">
                  Estimated Sales Tax (%)
                </label>
                <input
                  id="planner-tax"
                  type="number"
                  min="0"
                  max="25"
                  step="0.1"
                  value={taxRate}
                  onChange={(e) => setTaxRate(e.target.value)}
                  placeholder="e.g. 7.0"
                />
              </div>
            </div>

            {/* Results Column */}
            <div>
              <div className="calc-results">
                <h3
                  className="h6 fw-bold mb-3"
                  style={{ color: "var(--n700)" }}
                >
                  Calculation Summary
                </h3>

                <div className="calc-result-item">
                  <span className="calc-result-label">Available Balance</span>
                  <span className="calc-result-value">
                    ${initNum.toFixed(2)}
                  </span>
                </div>

                <div className="calc-result-item">
                  <span className="calc-result-label">Subtotal</span>
                  <span className="calc-result-value">
                    ${purchNum.toFixed(2)}
                  </span>
                </div>

                {taxPct > 0 && (
                  <div className="calc-result-item">
                    <span className="calc-result-label">
                      Estimated Tax ({taxPct}%)
                    </span>
                    <span className="calc-result-value">
                      ${totalTax.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="calc-result-item">
                  <span className="calc-result-label">Total Purchase Cost</span>
                  <span className="calc-result-value">
                    ${totalPurchase.toFixed(2)}
                  </span>
                </div>

                <div className="calc-result-item">
                  <span
                    className="calc-result-label"
                    style={{ fontWeight: 600, color: "var(--n900)" }}
                  >
                    Estimated Remaining Balance
                  </span>
                  <span
                    className={`calc-result-value ${
                      remaining >= 0 ? "positive" : "negative"
                    }`}
                    style={{ fontSize: "1.25rem" }}
                  >
                    ${remaining >= 0 ? remaining.toFixed(2) : "0.00"}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="calc-progress">
                  <div className="calc-progress-bar-bg">
                    <div
                      className="calc-progress-bar"
                      style={{
                        width: `${percentUsed}%`,
                        backgroundColor:
                          percentUsed > 100
                            ? "var(--err)"
                            : percentUsed > 80
                            ? "var(--a500)"
                            : "var(--ok)",
                      }}
                    />
                  </div>
                  <div className="calc-progress-label">
                    <span>{percentUsed.toFixed(0)}% Deducted</span>
                    <span>
                      {remaining >= 0
                        ? `$${remaining.toFixed(2)} remaining`
                        : "Exceeds card funds"}
                    </span>
                  </div>
                </div>

                {/* Status Alert */}
                {remaining >= 0 ? (
                  <div className="calc-message success">
                    <span>&#10003; Card covers this purchase.</span>
                    <div
                      style={{
                        fontWeight: 400,
                        fontSize: "0.8125rem",
                        marginTop: "4px",
                      }}
                    >
                      Estimated remaining balance after checkout:{" "}
                      <strong>${remaining.toFixed(2)}</strong>.
                    </div>
                  </div>
                ) : (
                  <div className="calc-message warning">
                    <span>&#9888; Additional payment method needed!</span>
                    <div
                      style={{
                        fontWeight: 400,
                        fontSize: "0.8125rem",
                        marginTop: "4px",
                      }}
                    >
                      Deduct ${initNum.toFixed(2)} from this card, then pay the
                      remaining <strong>${Math.abs(remaining).toFixed(2)}</strong>{" "}
                      with another payment method (split payment).
                    </div>
                  </div>
                )}
              </div>

              <div className="calc-disclaimer">
                These figures are examples only. Actual results may differ
                because of taxes, shipping charges, pending transactions, or
                merchant authorization holds. Always confirm your available funds
                through the appropriate card issuer.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
