"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#balance", label: "Check Balance" },
    { href: "#activation", label: "Card Activation" },
    { href: "#planner", label: "Balance Planner" },
    { href: "#tips", label: "Safety & Tips" },
    { href: "#support", label: "Customer Support" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <header className="site-header">
        <div className="wrap bar">
          <a href="#top" className="logo" aria-label="GiftCardMall home">
            <span className="logo-icon-wrap">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="logo-svg"
              >
                {/* Modern Card Body with Gradient & Subtle Glow */}
                <rect
                  x="2"
                  y="6.5"
                  width="28"
                  height="19"
                  rx="4"
                  fill="url(#cardGrad)"
                  stroke="rgba(255, 255, 255, 0.45)"
                  strokeWidth="1.2"
                />
                {/* Magnetic Stripe Band */}
                <path
                  d="M2 11.5h28"
                  stroke="rgba(15, 23, 42, 0.4)"
                  strokeWidth="2.5"
                />
                {/* Gold EMV Chip */}
                <rect
                  x="5.5"
                  y="15.5"
                  width="6"
                  height="5"
                  rx="1"
                  fill="url(#chipGrad)"
                  stroke="#fbbf24"
                  strokeWidth="0.75"
                />
                <path
                  d="M5.5 18h6M8.5 15.5v5"
                  stroke="#b45309"
                  strokeWidth="0.5"
                  strokeOpacity="0.8"
                />
                {/* Security Wave Accent */}
                <path
                  d="M24 16.5c1 1 1 2.5 0 3.5m-2.5-4.5c1.8 1.8 1.8 4.2 0 6"
                  stroke="rgba(255, 255, 255, 0.85)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                {/* Embossed Card Digits Placeholder */}
                <circle cx="14" cy="18" r="0.75" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="16.5" cy="18" r="0.75" fill="rgba(255, 255, 255, 0.9)" />
                <circle cx="19" cy="18" r="0.75" fill="rgba(255, 255, 255, 0.9)" />
                {/* Gift Bow Vector Accent on corner */}
                <path
                  d="M23 4.5c-.8 0-1.5.7-1.5 1.5 0 .8.7 1.5 1.5 1.5.8 0 1.5-.7 1.5-1.5 0-.8-.7-1.5-1.5-1.5zm2.8 0c-.8 0-1.5.7-1.5 1.5 0 .8.7 1.5 1.5 1.5.8 0 1.5-.7 1.5-1.5 0-.8-.7-1.5-1.5-1.5z"
                  fill="#f59e0b"
                />
                <defs>
                  <linearGradient id="cardGrad" x1="2" y1="6.5" x2="30" y2="25.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4f46e5" />
                    <stop offset="0.6" stopColor="#6366f1" />
                    <stop offset="1" stopColor="#7c3aed" />
                  </linearGradient>
                  <linearGradient id="chipGrad" x1="5.5" y1="15.5" x2="11.5" y2="20.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fef08a" />
                    <stop offset="1" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="logo-text">GiftCardMall</span>
          </a>

          <nav className="site-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`mobile-nav${mobileOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
