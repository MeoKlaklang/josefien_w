import "./AboutPage.css";

function AboutPage() {
  return (
    <section className="about-page">

      {/* INTRO */}
      <div className="about-hero container">
        <div className="about-title-row">
          <h1>Hoi! Ik ben Josefien</h1>

          <p className="about-role">
            <span>Klinisch Psycholoog</span>
          </p>
        </div>

        <div className="about-main-grid">
          <div className="about-photo">
            <img
              src="/images/josefien.png"
              alt="Josefien"
            />
          </div>

          <div className="about-text">
            <p>
              Als tiener dacht ik vaak na over mijn toekomst: “Wie wil ik zijn?”,
              “Wat wil ik worden?”, “Wat wil ik bereiken?” enzovoort.
              Het werd mij helemaal duidelijk wanneer ik in het secundair
              onderwijs voor één uurtje per week het vak Psychologie kreeg.
            </p>

            <p>
              Ik kan met veel zekerheid zeggen dat deze lessen mijn interesse
              hebben gewekt. Ik begon buiten de schooluren veel te lezen en
              mij verder te verdiepen in psychologie.
            </p>

            <p>
              Vandaag begeleid ik mensen vanuit een warme, open en betrokken
              houding. Ik vind het belangrijk om niet alleen naar klachten te
              kijken, maar naar de persoon als geheel.
            </p>
          </div>
        </div>
      </div>

      {/* EDUCATION / REGISTRATION */}
      <div className="about-details">
        <div className="about-details-inner container">

          <div className="about-detail-column">
            <h2>Opleiding</h2>

            <div className="about-detail-row">
              <p>
                Master in de klinische psychologie:
                <br />
                volwassenen en ouderen
              </p>

              <span>KU LEUVEN</span>
            </div>

            <div className="about-detail-row">
              <p>
                Academische bachelor in de
                <br />
                psychologie
              </p>

              <span>KU LEUVEN</span>
            </div>
          </div>

          <div className="about-detail-column">
            <h2>Erkenning</h2>

            <div className="about-detail-row">
              <p>Ondernemingsnummer</p>
              <span>1020.863.929</span>
            </div>

            <div className="about-detail-row">
              <p>Visumnummer</p>
              <span>506343</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default AboutPage;