"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "What is GiftCardMall/MyGift?",
    a: "GiftCardMall/MyGift refers to card management services associated with eligible prepaid gift cards. Depending on the card, these GiftCardMall services allow cardholders to check available funds, review transactions, or complete card activation steps.",
  },
  {
    q: "How can I check my GiftCardMall / MyGift balance online?",
    a: "Visit the verified GiftCardMall card management website printed on your card or packaging. Follow the instructions provided by the GiftCardMall issuer to view your available funds and recent transaction details.",
  },
  {
    q: "How do I activate my GiftCardMall/MyGift card?",
    a: "First, check whether your GiftCardMall card was activated when purchased. If further activation is required, follow the instructions supplied with your GiftCardMall card or contact the issuer using the customer service details printed on it.",
  },
  {
    q: "Is checking a GiftCardMall gift card balance free?",
    a: "Online GiftCardMall balance checks are typically free, but terms vary by card program. Review your cardholder agreement or contact GiftCardMall support to confirm whether any account fees apply.",
  },
  {
    q: "Can I use a GiftCardMall prepaid card for online purchases?",
    a: "Some eligible prepaid GiftCardMall Visa and Mastercard cards can be used for online purchases at participating merchants. You may need to register your billing address on the GiftCardMall portal first.",
  },
  {
    q: "What should I do if my GiftCardMall card is lost or stolen?",
    a: "Contact the GiftCardMall card issuer as soon as possible using the customer service number printed on your card documentation. Keep your GiftCardMall purchase receipt ready for fund verification.",
  },
  {
    q: "Why is my GiftCardMall card being declined?",
    a: "A GiftCardMall transaction may be declined because available funds are lower than checkout total, billing information doesn't match, or a merchant authorization hold has temporarily reduced your GiftCardMall balance.",
  },
  {
    q: "How can I contact GiftCardMall customer support?",
    a: "Use the support phone number printed on the back of your GiftCardMall card or visit the verified GiftCardMall card management website to speak with a cardholder representative.",
  },
  {
    q: "Can I use a GiftCardMall card for a purchase that costs more than its balance?",
    a: "This depends on the retailer. Many stores allow split-tender payments where you charge your remaining GiftCardMall balance first, then pay the difference with cash or another card.",
  },
  {
    q: "Why does my available GiftCardMall balance look lower than expected?",
    a: "Recent transactions, processing fees, or temporary holds from gas pumps or restaurants can affect your GiftCardMall balance. Review your GiftCardMall card history to verify pending charges.",
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
