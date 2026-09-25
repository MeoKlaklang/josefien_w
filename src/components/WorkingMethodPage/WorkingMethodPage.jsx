import "./WorkingMethodPage.css";

const steps = [
  {
    number: "1",
    title: "Intake",
    text:
      "We starten met een eerste gesprek waarin we kennismaken en ruimte maken voor jouw verhaal. We bespreken wat je naar de praktijk brengt, wat momenteel moeilijk loopt en wat je graag anders zou zien. Daarnaast bekijken we samen wat je nodig hebt en of mijn manier van werken aansluit bij jouw hulpvraag.",
  },
  {
    number: "2",
    title: "Samen bepalen",
    text:
      "Na de intake bekijken we samen waar we aan willen werken. Soms zijn de doelen vanaf het begin duidelijk. Soms hebben we eerst wat tijd nodig om beter te begrijpen wat er speelt. Het traject wordt afgestemd op jouw hulpvraag en noden.",
  },
  {
    number: "3",
    title: "Aan de slag",
    text:
      "Tijdens de gesprekken onderzoeken we gedachten, gevoelens, gedrag en patronen. Waar mogelijk vertalen we inzichten naar het dagelijks leven. Dat kan bijvoorbeeld via oefeningen, opdrachten, experimenten of reflectievragen.",
  },
  {
    number: "4",
    title: "Evalueren",
    text:
      "Ik vind het belangrijk om regelmatig stil te staan bij hoe jij de begeleiding ervaart. Daarom vraag ik geregeld om feedback. Wat werkt voor jou? Wat kan anders? Zo kunnen we de begeleiding bijsturen waar nodig.",
  },
];

function WorkingMethodPage() {
  return (
    <div className="work-page">

      {/* HERO */}
      <section className="work-hero">
        <div className="work-hero-inner">

          <div className="work-hero-content">
            <h1>Werkwijze</h1>

            <p className="work-hero-subtitle">
              <span>Hoe verloopt een traject?</span>
            </p>

            <div className="work-hero-copy">
              <p>
                Therapie is voor mij geen proces waarbij ik je vertel wat je moet doen.
              </p>

              <p>
                Ik zie mezelf eerder als iemand die naast je staat en samen met jou
                onderzoekt wat er speelt, welke patronen zichtbaar worden en welke
                stappen mogelijk zijn.
              </p>

              <p>
                Sommige sessies zullen vooral draaien rond inzicht en begrip. Op andere
                momenten zullen we meer praktisch werken en oefenen.
              </p>

              <p>
                Ik geef, wanneer dit aansluit bij de hulpvraag, ook regelmatig
                oefeningen of opdrachten voor tussen de sessies mee. Zo kunnen
                inzichten uit de gesprekken ook in het dagelijkse leven worden toegepast.
              </p>
            </div>
          </div>

          <div className="work-hero-image">
            <img
              src="/images/sectie1.png"
              alt="Rustige therapieruimte"
            />
          </div>

        </div>
      </section>


      {/* 4 STAPPEN */}
      <section className="work-steps">
        <div className="work-steps-inner container">
          {steps.map((step) => (
            <article className="work-step-card" key={step.number}>
              <h2>{step.title}</h2>

              <p>{step.text}</p>

              <span className="work-step-number">
                {step.number}
              </span>
            </article>
          ))}
        </div>
      </section>


      {/* SAMENWERKEN */}
      <section className="work-collaboration">
        <div className="work-collaboration-inner container">

          <div className="work-collaboration-heading">
            <span className="work-small-label">
              Mijn manier van werken
            </span>

            <h2>
              Therapie is{" "}
              <span className="work-yellow-highlight">
                samenwerken
              </span>
            </h2>
          </div>

          <div className="work-collaboration-content">
            <p>
              Sommige gesprekken draaien vooral rond inzicht en begrip. Op andere
              momenten gaan we meer praktisch aan de slag.
            </p>

            <p>
              Wanneer dit aansluit bij jouw hulpvraag, geef ik ook oefeningen of
              opdrachten mee voor tussen de sessies. Zo kunnen inzichten uit de
              gesprekken ook hun plaats krijgen in het dagelijkse leven.
            </p>

            <p className="work-collaboration-quote">
              Therapie is werken aan jezelf.
              <br />
              <strong>En dat werk hoef je niet alleen te doen.</strong>
            </p>
          </div>

          <div className="work-values">
            <div>
              <span>01</span>
              <h3>Begrijpen</h3>
              <p>Zicht krijgen op wat er speelt en welke patronen terugkomen.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Oefenen</h3>
              <p>Nieuwe inzichten vertalen naar kleine, concrete stappen.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Veranderen</h3>
              <p>Meer keuzevrijheid ontwikkelen in hoe je met situaties omgaat.</p>
            </div>
          </div>

        </div>
      </section>


      {/* VEILIGE PLEK */}
      <section className="work-safe">
        <div className="work-safe-inner container">

          <div className="work-safe-content">
            <span className="work-small-label">
              Ruimte voor wat moeilijk is
            </span>

            <h2>
              Een veilige plek om jezelf te zijn
            </h2>

            <p>
              Ik vind het belangrijk dat je in therapie niet het gevoel hebt dat je
              iets moet bewijzen.
            </p>

            <p>
              Er mag ruimte zijn voor twijfel, verdriet, boosheid, schaamte,
              onzekerheid en alles wat moeilijk onder woorden te brengen is.
            </p>

            <p>
              Wanneer het helpend is, zal ik ook uitdagen, kritisch meedenken of
              samen met jou kijken naar patronen die je misschien liever uit de weg
              gaat. Steeds met respect voor jouw tempo en wat voor jou haalbaar is.
            </p>

            <p className="work-safe-line">
              <span>Op jouw tempo.</span> Zonder oordeel.
            </p>
          </div>

          <div className="work-safe-image">
            <img
              src="/images/sectie2.png"
              alt="Warme rustige praktijkruimte"
            />
          </div>

        </div>
      </section>


      {/* VOOR WIE */}
      <section className="work-forwho">
        <div className="work-forwho-inner container">

          <div className="work-forwho-header">
            <span className="work-small-label">
              Voor wie?
            </span>

            <h2>
              Begeleiding die vertrekt vanuit jouw hulpvraag
            </h2>

            <p>
              Ik bied psychologische begeleiding aan jongeren, volwassenen en
              koppels. Niet de leeftijd of vorm van begeleiding staat centraal,
              maar wat jij op dat moment nodig hebt.
            </p>
          </div>

          <div className="work-forwho-cards">

            <article>
              <span>01</span>

              <h3>Jongeren</h3>

              <p>
                Ruimte voor vragen rond identiteit, emoties, stress, onzekerheid,
                relaties of veranderingen.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Volwassenen</h3>

              <p>
                Voor wie vastloopt, patronen wil begrijpen of op zoek is naar meer
                richting, inzicht en balans.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Koppels</h3>

              <p>
                Voor wie samen wil kijken naar communicatie, vertrouwen,
                verbinding en terugkerende patronen binnen de relatie.
              </p>
            </article>

          </div>

          <div className="work-couples">
            <h3>Voor koppels</h3>

            <p>
              Relaties kunnen op verschillende momenten onder druk komen te staan.
              Soms gaat het om terugkerende conflicten of communicatieproblemen.
              Soms zijn er grotere vragen rond vertrouwen, verbinding, intimiteit,
              ouderschap of de toekomst van de relatie.
            </p>

            <p>
              In relatiegesprekken is er ruimte voor beide partners. Het doel is
              niet om te bepalen wie gelijk heeft, maar om beter te begrijpen wat er
              tussen jullie gebeurt en te onderzoeken hoe jullie op een andere
              manier met elkaar kunnen omgaan.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="work-cta">
        <div className="work-cta-inner container">

          <div>
            <span className="work-small-label">
              Eerste stap
            </span>

            <h2>
              Voelt deze manier van werken goed voor jou?
            </h2>

            <p>
              Je hoeft je hulpvraag nog niet volledig helder te hebben. Tijdens
              een eerste gesprek bekijken we samen wat er speelt en of mijn manier
              van werken bij jou past.
            </p>
          </div>

          <a href="/afspraak" className="work-cta-button">
            <span>Een eerste gesprek aanvragen</span>
            <span>→</span>
          </a>

        </div>
      </section>

    </div>
  );
}

export default WorkingMethodPage;