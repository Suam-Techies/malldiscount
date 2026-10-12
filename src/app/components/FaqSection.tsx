"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "What is GiftCardMall/MyGift?",
    a: "GiftCardMall/MyGift refers to card management services associated with eligible prepaid gift cards. Depending on the card, these services may allow users to check available funds, review transactions, or complete activation and registration steps.",
  },
  {
    q: "How can I check my MyGift balance online?",
    a: "Visit the verified card management website printed on your card or packaging. Follow the instructions provided by the issuer to view your available funds and any available transaction details.",
  },
  {
    q: "How do I activate my GiftCardMall/MyGift card?",
    a: "First, check whether your card was activated when purchased. If further activation is required, follow the instructions supplied with your card or contact the issuer using the customer service details printed on it.",
  },
  {
    q: "Is checking a gift card balance free?",
    a: "Online balance checks are often free, but the terms can vary by card program. Review your cardholder agreement or contact the issuer to confirm whether any fees apply.",
  },
  {
    q: "Can I use a MyGift prepaid card for online purchases?",
    a: "Some eligible prepaid Visa and Mastercard gift cards can be used for online purchases at participating merchants. Acceptance depends on the card's terms and the merchant's payment policies. You may also need to register a billing address.",
  },
  {
    q: "What should I do if my gift card is lost or stolen?",
    a: "Contact the issuer as soon as possible using the customer service number printed on the card or its official documentation. Keep your purchase receipt and any card records available. Replacement options depend on the applicable card terms and registration status.",
  },
  {
    q: "Why is my gift card being declined?",
    a: "A transaction may be declined because the available balance is too low, the merchant does not accept that card type, billing information is incorrect, or a temporary authorization hold has reduced the available funds. Review your balance and card terms before contacting the issuer.",
  },
  {
    q: "How can I contact MyGift customer support?",
    a: "Use the support information printed on your gift card or included with its packaging. This helps ensure that you reach the appropriate issuer or service provider for your particular card.",
  },
  {
    q: "Can I use a gift card for a purchase that costs more than its balance?",
    a: "This depends on the merchant. Some retailers allow you to split the payment between a gift card and another payment method, while others do not. Ask the merchant before completing the transaction.",
  },
  {
    q: "Why does my available balance look lower than expected?",
    a: "Recent purchases, pending transactions, refunds that have not yet been processed, or temporary authorization holds can affect the available amount. Review your transaction history through the verified card management service and contact the issuer if the discrepancy remains unexplained.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-heading text-center mx-auto">
          <div className="section-kicker justify-content-center">
            Common Questions
          </div>
          <h2>Frequently Asked Questions About GiftCardMall/MyGift</h2>
          <p>
            Find clear answers to everyday questions about checking balances,
            activation, online shopping, declined transactions, and customer
            support.
          </p>
        </div>

        <div className="faq-section">
          <div className="faq-container">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="faq-item">
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.q}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className={`faq-answer${isOpen ? " open" : ""}`}>
                    <div className="faq-answer-content">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
