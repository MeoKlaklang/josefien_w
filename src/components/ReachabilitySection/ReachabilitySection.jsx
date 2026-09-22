import "./ReachabilitySection.css";

function ReachabilitySection() {
  return (
    <section className="reachability-section">
      <div className="reachability-inner container">

        <div className="reachability-content">
          <span className="reachability-eyebrow">
            Praktisch
          </span>

          <h2 className="reachability-title">
            Goed bereikbaar in <span>Herent</span>
          </h2>

          <p className="reachability-intro">
            De praktijk bevindt zich in Herent en is bereikbaar met de wagen
            en het openbaar vervoer. Hieronder vind je alle praktische
            informatie om je bezoek rustig te kunnen plannen.
          </p>

          <div className="reachability-options">

            <div className="reachability-item">
              <div className="reachability-number">
                01
              </div>

              <div>
                <h3>Locatie</h3>

                <p>
                  <strong>[Naam praktijk]</strong>
                  <br />
                  [Straat + nummer]
                  <br />
                  [Postcode] Herent
                </p>
              </div>
            </div>

            <div className="reachability-item">
              <div className="reachability-number">
                02
              </div>

              <div>
                <h3>Met de wagen</h3>

                <p>
                  De praktijk is vlot bereikbaar met de wagen.
                  [Hier kan later informatie komen over parkeren,
                  parkeerplaatsen of parkeermogelijkheden in de buurt.]
                </p>
              </div>
            </div>

            <div className="reachability-item">
              <div className="reachability-number">
                03
              </div>

              <div>
                <h3>Openbaar vervoer</h3>

                <p>
                  Ook met het openbaar vervoer kan je de praktijk bereiken.
                  [Hier kan later de dichtstbijzijnde bushalte,
                  treinverbinding of wandelafstand worden toegevoegd.]
                </p>
              </div>
            </div>

          </div>

          <a
            href="/contact"
            className="reachability-button"
          >
            <span>Bekijk contactgegevens</span>
            <span>→</span>
          </a>
        </div>


        <div className="reachability-visual">

          <div className="reachability-map-placeholder">

            <div className="reachability-marker">
              <span></span>
            </div>

            <p>
              Praktijk in
              <br />
              <strong>Herent</strong>
            </p>

          </div>

          <div className="reachability-note">
            <span className="reachability-note-highlight">
              Goed om te weten
            </span>

            <p>
              Consultaties vinden enkel plaats op afspraak.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ReachabilitySection;