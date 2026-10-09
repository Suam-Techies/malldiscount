import styles from "./page.module.css";

const tips = [
  {
    number: "01",
    title: "Go to the source",
    description:
      "Use the website or phone number printed on the back of your card to check its balance.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Keep your details private",
    description:
      "Only enter your card number and PIN on the issuer's official, secure website.",
    icon: "⌑",
  },
  {
    number: "03",
    title: "Hold on to your card",
    description:
      "Keep the card and receipt until you've used the full value. They may help if there's an issue.",
    icon: "♡",
  },
];

const faqs = [
  {
    question: "Where can I check my gift card balance?",
    answer:
      "Visit the card issuer's official website or call the phone number printed on the back of your card. Avoid links from unexpected texts, emails, or social posts.",
  },
  {
    question: "What information should I never share?",
    answer:
      "Treat your card number and PIN like cash. Don't post them, send them to someone who contacted you, or enter them on a site you can't verify as the issuer's official site.",
  },
  {
    question: "What if my card isn't working?",
    answer:
      "Check the issuer's instructions and activation details on your receipt. If you still need help, contact the issuer using the support information printed on the card or its official website.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.announcement}>
        A little gift-card know-how goes a long way <span aria-hidden="true">✳</span>
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Goodkind home">
          <span className={styles.brandMark} aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>goodkind</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#guide">The guide</a>
          <a href="#card-care">Card care</a>
          <a href="#faq">FAQs</a>
        </nav>
        <a className={styles.headerCta} href="#guide">
          Get the good stuff <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span className={styles.sparkle} aria-hidden="true">✳</span>
            THE GIFT CARD FIELD GUIDE
          </p>
          <h1>
            A little card.
            <br />
            <span>A lot of</span> happy.
          </h1>
          <p className={styles.heroText}>
            Make the most of the thoughtful gifts you already have—with simple
            tips for checking, using, and keeping your gift cards safe.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#guide">
              Find your feel-good <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.textLink} href="#card-care">
              A note on staying safe <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className={styles.heroNote}>
            <span className={styles.noteIcon} aria-hidden="true">✳</span>
            <span>Independent tips. No card details needed here.</span>
          </div>
        </div>

        <div className={styles.heroArt} aria-label="Illustration of a cheerful gift card">
          <div className={styles.artSun} />
          <span className={`${styles.doodle} ${styles.doodleOne}`} aria-hidden="true">✳</span>
          <span className={`${styles.doodle} ${styles.doodleTwo}`} aria-hidden="true">✦</span>
          <div className={styles.cardStack}>
            <div className={styles.backCard} />
            <div className={styles.giftCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardWordmark}>a little joy</span>
                <span className={styles.cardFlower} aria-hidden="true">✿</span>
              </div>
              <div className={styles.cardMessage}>
                <span>GOOD THINGS</span>
                <strong>are<br />coming.</strong>
              </div>
              <span className={styles.cardFooter}>A GIFT FOR YOU <span>✳</span></span>
            </div>
            <div className={styles.cardShadow} />
          </div>
          <div className={styles.artCaption}>
            <span className={styles.captionDot} />
            A tiny reminder: the best gifts are meant to be enjoyed.
          </div>
        </div>
      </section>

      <section className={styles.benefits} aria-label="What you'll find here">
        <div className={styles.benefit}>
          <span className={styles.benefitIcon} aria-hidden="true">✳</span>
          <span>Simple, useful tips</span>
        </div>
        <div className={styles.benefit}>
          <span className={styles.benefitIcon} aria-hidden="true">♡</span>
          <span>Safer card habits</span>
        </div>
        <div className={styles.benefit}>
          <span className={styles.benefitIcon} aria-hidden="true">☼</span>
          <span>More joy, less guesswork</span>
        </div>
      </section>

      <section className={styles.guideSection} id="guide">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>YOUR HAPPY LITTLE HOW-TO</p>
          <h2>Good things start<br />with the <em>right steps.</em></h2>
          <p>
            A gift card is a lovely thing. Here are three easy ways to make
            sure it stays that way.
          </p>
        </div>
        <div className={styles.tipList}>
          {tips.map((tip) => (
            <article className={styles.tip} key={tip.number}>
              <span className={styles.tipNumber}>{tip.number}</span>
              <div className={styles.tipBody}>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </div>
              <span className={styles.tipIcon} aria-hidden="true">{tip.icon}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.safety} id="card-care">
        <div className={styles.safetyStamp} aria-hidden="true">
          <span>GOOD</span>
          <strong>TO<br />KNOW</strong>
          <span>✳ ALWAYS</span>
        </div>
        <div className={styles.safetyCopy}>
          <p className={styles.eyebrow}>A FRIENDLY HEADS-UP</p>
          <h2>Your card details<br />are <em>your business.</em></h2>
          <p>
            We will never ask for your gift card number or PIN. To check a
            balance or get help, go directly to the card issuer using the
            contact details printed on your card.
          </p>
          <a href="#faq" className={styles.safetyLink}>
            More answers, this way <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className={styles.safetyDecoration} aria-hidden="true">
          <span>KEEP IT</span>
          <strong>close<br />to you</strong>
          <i>✳</i>
        </div>
      </section>

      <section className={styles.faqSection} id="faq">
        <div className={styles.faqHeading}>
          <p className={styles.eyebrow}>THE LITTLE THINGS</p>
          <h2>Good questions.<br /><em>Good answers.</em></h2>
          <p>Still wondering about something? Start here.</p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <details className={styles.faq} key={faq.question}>
              <summary>
                {faq.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="#top" aria-label="Goodkind home">
          <span className={styles.brandMark} aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>goodkind</span>
        </a>
        <p>Thoughtful gifts. Feel-good spending.</p>
        <span className={styles.footerFine}>
          Goodkind is an independent informational guide and is not affiliated
          with any gift card issuer.
        </span>
      </footer>
    </main>
  );
}
