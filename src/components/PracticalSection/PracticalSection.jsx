import "./PracticalSection.css";

function PracticalSection() {
  return (
    <section className="practical-section">
      <div className="practical-overlay">
        <div className="practical-content container">
          <h2 className="practical-title">Afspraken & tarieven</h2>

          <div className="practical-cards">
            <article className="practical-card">
              <h3 className="practical-card-title">Afspraak</h3>

              <p>
                Een afspraak vraag je <strong>online aan</strong>: je kiest zelf
                een moment dat past, en bellen kan altijd. Je krijgt binnen twee
                dagen bevestiging.
              </p>

              <a href="/afspraak" className="practical-card-button">
                <span>Boek online</span>
                <span>→</span>
              </a>
            </article>

            <article className="practical-card">
              <h3 className="practical-card-title">Consult</h3>

              <p>
                Consultaties vinden plaats op afspraak en duren ongeveer
                45 minuten.
              </p>

              <p className="practical-highlight-text">
                Het tarief bedraagt €70 per consultatie.
              </p>

              <p>
                Wil je graag weten of je recht hebt op een terugbetaling via je
                mutualiteit? Dan kan je dit best even navragen bij je
                ziekenfonds.
              </p>
            </article>

            <article className="practical-card">
              <h3 className="practical-card-title">Annuleren</h3>

              <p>
                Annuleren kan kosteloos <strong>tot 48 uur voor de afspraak.</strong>{" "}
                Bij annulering binnen de 48 uur wordt de geplande consultatie
                volledig aangerekend.
              </p>
            </article>
          </div>
        </div>
      </div>

      <div className="practical-urgent">
        <div className="practical-urgent-inner container">
          <div className="practical-urgent-label">
            <span>Dringend?</span>
          </div>

          <p>
            Wanneer er sprake is van <strong>acuut gevaar</strong>, bel je in
            België <strong>112</strong> of ga je naar de dichtstbijzijnde
            spoeddienst.
          </p>

          <p>
            Heb je gedachten aan zelfdoding of maak je je ernstig zorgen over
            iemand? Dan kan je in België terecht bij <strong>Zelfmoordlijn 1813</strong>{" "}
            voor een gesprek en ondersteuning.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PracticalSection;