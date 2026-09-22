import "./IntroSection.css";

function IntroSection() {
  return (
    <section className="intro-section">

      {/* BOVENSTE RIJ */}
      <div className="intro-top-row">

        <div className="intro-top-image">
          <img
            src="/images/sectie1.png"
            alt="Rustige praktijkruimte"
          />
        </div>

        <div className="intro-top-content">
          <h2 className="intro-heading">
            Psycholoog te Herent
          </h2>

          <div className="intro-copy">
            <p>
              Ik ben <strong>Josefien</strong>, psycholoog en afgestudeerd aan de KU Leuven.
              In mijn praktijk begeleid ik mensen met uiteenlopende hulpvragen.
              Dat kan gaan om psychische klachten, maar evengoed om een gevoel van
              vastlopen, persoonlijke vragen, moeilijkheden in relaties of een
              periode van verandering.
            </p>

            <p>
              Je hoeft niet altijd precies te weten wat er aan de hand is.
              Soms voel je vooral dat je vastloopt, dat bepaalde klachten blijven
              aanhouden of dat je <strong>nood hebt aan meer inzicht en richting.</strong>
            </p>
          </div>

          <p className="intro-quote">
            Samen staan we stil bij wat er speelt
            <br />
            en bekijken we wat jij nodig hebt om
            <br />
            <span>stap voor stap</span> verder te kunnen.
          </p>

          <a href="/over-mij" className="intro-button">
            <span>Leer me beter kennen</span>
            <span className="intro-button-arrow">→</span>
          </a>
        </div>

      </div>

      {/* ONDERSTE RIJ */}
      <div className="intro-bottom-row container">

        <div className="intro-bottom-content">
          <h2 className="intro-heading">
            Jij als geheel
          </h2>

          <div className="intro-copy">
            <p>
              Ik vind het belangrijk om niet alleen te kijken naar de klachten
              waarmee iemand zich aanmeldt, maar naar de{" "}
              <strong>persoon als geheel.</strong>
              Wat iemand ervaart, staat immers nooit los van zijn of haar omgeving,
              relaties, levensgeschiedenis en huidige omstandigheden.
            </p>

            <p>
              Daarom heb ik in mijn begeleiding aandacht voor zowel{" "}
              <strong>gedachten, gevoelens en gedrag</strong> als voor de bredere
              context en relaties waarin iemand leeft.
            </p>
          </div>
        </div>

        <div className="intro-bottom-image">
          <img
            src="/images/sectie2.png"
            alt="Sfeervol interieur met groene takken"
          />
        </div>

      </div>

    </section>
  );
}

export default IntroSection;