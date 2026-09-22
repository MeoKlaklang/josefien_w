import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">

        <div className="footer-main">

          <div className="footer-brand">
            <div className="footer-logo"></div>

            <p className="footer-brand-text">
              Psychologische begeleiding voor wie even vastloopt,
              zoekt of wil veranderen.
            </p>

            <a href="/afspraak" className="footer-cta">
              <span>Een eerste gesprek aanvragen</span>
              <span>→</span>
            </a>
          </div>

          <div className="footer-column">
            <h3>Navigatie</h3>

            <a href="/">Home</a>
            <a href="/over-mij">Over mij</a>
            <a href="/werkwijze">Werkwijze</a>
            <a href="/praktisch">Praktisch</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Praktisch</h3>

            <p>
              Consultaties op afspraak
              <br />
              45 minuten
              <br />
              €70 per consultatie
            </p>

            <a href="/afspraak">
              Afspraak maken →
            </a>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact</h3>

            <p>
              <strong>[Naam praktijk]</strong>
              <br />
              [Straat + nummer]
              <br />
              [Postcode] Herent
            </p>

            <a href="mailto:info@praktijknaam.be">
              info@praktijknaam.be
            </a>

            <a href="tel:+3212345678">
              +32 12 34 56 78
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Josefien — Alle rechten voorbehouden
          </p>

          <div className="footer-bottom-links">
            <a href="/privacy">Privacy</a>
            <a href="/algemene-voorwaarden">
              Algemene voorwaarden
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;