import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-text">
          <div className="hero-text-inner">

            <h1 className="hero-title">
              Voor wie even
              <br />
              vastloopt, zoekt
              <br />
              of wilt veranderen
            </h1>

            <h2 className="hero-subtitle">
              <span className="hero-highlight">
                Samen
              </span>{" "}
              zoeken we naar wat je nodig hebt.
            </h2>

            <a
              href="/afspraak"
              className="hero-button"
            >
              <span>
                Een eerste gesprek aanvragen
              </span>

              <span className="hero-button-arrow">
                →
              </span>
            </a>

          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="/images/hero.png"
            alt="Rustige natuurlijke omgeving"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;