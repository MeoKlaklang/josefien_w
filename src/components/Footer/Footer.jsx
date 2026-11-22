import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">

        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
              aria-label="De Jowa - ga naar home"
            >
              <img
                src="/images/dejowa-logo.png"
                alt="De Jowa Psychologische Praktijk"
              />
            </Link>

            <p className="footer-brand-text">
              Psychologische begeleiding voor wie even vastloopt,
              zoekt of wil veranderen.
            </p>

            <Link
              to="/afspraak"
              className="footer-cta"
            >
              <span>Een eerste gesprek aanvragen</span>
              <span>→</span>
            </Link>

          </div>


          {/* NAVIGATIE */}
          <div className="footer-column">
            <h3>Navigatie</h3>

            <Link to="/">Home</Link>
            <Link to="/over-mij">Over mij</Link>
            <Link to="/werkwijze">Werkwijze</Link>
            <Link to="/praktisch">Praktisch</Link>
            <Link to="/contact">Contact</Link>
          </div>


          {/* PRAKTISCH */}
          <div className="footer-column">
            <h3>Praktisch</h3>

            <p>
              Consultaties op afspraak
              <br />
              45 minuten
              <br />
              €70 per consultatie
            </p>

            <Link to="/afspraak">
              Afspraak maken →
            </Link>
          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>Contact</h3>

            <p>
              <strong>De Jowa praktijk</strong>
              <br />
              [Straat + nummer]
              <br />
              [Postcode] Herent
            </p>

            <a href="mailto:info@dejowa.be">
              info@dejowa.be
            </a>

            <a href="tel:+3212345678">
              +32 12 34 56 78
            </a>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} De Jowa — Alle rechten voorbehouden
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy">
              Privacy
            </Link>

            <Link to="/algemene-voorwaarden">
              Algemene voorwaarden
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;