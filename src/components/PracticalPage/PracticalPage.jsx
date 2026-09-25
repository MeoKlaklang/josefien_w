import { useState } from "react";
import "./PracticalPage.css";

const faqItems = [
  {
    question: "Heb ik een diagnose nodig?",
    answer:
      "Nee. Je hoeft geen diagnose te hebben om psychologische begeleiding te starten. Indien je zelf op zoek bent naar een diagnose, kunnen we dit samen bekijken.",
  },
  {
    question: "Hoeveel sessies heb ik nodig?",
    answer:
      "Dat verschilt van persoon tot persoon. De duur van een traject hangt af van je hulpvraag, doelen en omstandigheden. We bekijken regelmatig samen hoe het traject verloopt.",
  },
  {
    question: "Kan ik met mijn partner komen?",
    answer:
      "Ja. Afhankelijk van de hulpvraag kan begeleiding individueel of samen met je partner plaatsvinden.",
  },
  {
    question: "Kan ik online therapie volgen?",
    answer:
      "Ja. Online therapie is mogelijk. De concrete afspraken hierover kunnen tijdens het eerste contact besproken worden.",
  },
  {
    question: "Hoe annuleer ik een afspraak?",
    answer:
      "Een afspraak kan via de website geannuleerd worden. Bij annulering minder dan 48 uur voor de afspraak of bij een no-show wordt het volledige tarief van €70 aangerekend.",
  },
];

function PracticalPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="practical-page">

      {/* HERO */}
      <section className="practical-page-hero">
        <div className="practical-page-hero-inner container">
          <span className="practical-page-label">
            Praktische informatie
          </span>

          <h1>
            Alles wat je vooraf
            <br />
            <span>graag wil weten.</span>
          </h1>

          <p>
            Hier vind je alle praktische informatie over afspraken,
            consultaties, tarieven, bereikbaarheid en annuleren.
          </p>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="practical-page-quick">
        <div className="practical-page-quick-inner container">

          <article className="practical-page-card">
            <span className="practical-page-card-number">01</span>

            <h2>Op afspraak</h2>

            <p>
              Consultaties vinden plaats op afspraak.
              Een eerste gesprek kan eenvoudig online aangevraagd worden.
            </p>

            <a href="/afspraak">
              Afspraak aanvragen →
            </a>
          </article>

          <article className="practical-page-card">
            <span className="practical-page-card-number">02</span>

            <h2>45 minuten</h2>

            <p>
              Een consultatie duurt ongeveer 45 minuten.
              Zo is er voldoende tijd om rustig stil te staan bij wat er speelt.
            </p>
          </article>

          <article className="practical-page-card practical-page-card-yellow">
            <span className="practical-page-card-number">03</span>

            <h2>€70</h2>

            <p>
              Het tarief bedraagt €70 per consultatie.
              Informatie over eventuele terugbetaling kan je navragen bij je mutualiteit.
            </p>
          </article>

        </div>
      </section>

      {/* LOCATION */}
      <section className="practical-page-location">
        <div className="practical-page-location-inner container">

          <div className="practical-page-location-copy">
            <span className="practical-page-label">
              Bereikbaarheid
            </span>

            <h2>
              De praktijk in Herent
            </h2>

            <p>
              De praktijk bevindt zich in Herent en is bereikbaar met de wagen
              en het openbaar vervoer.
            </p>

            <div className="practical-page-location-details">

              <div>
                <h3>Adres</h3>

                <p>
                  <strong>[Naam praktijk]</strong>
                  <br />
                  [Straat + nummer]
                  <br />
                  [Postcode] Herent
                </p>
              </div>

              <div>
                <h3>Met de wagen</h3>

                <p>
                  [Hier kan later informatie toegevoegd worden over parkeren
                  of parkeermogelijkheden in de buurt.]
                </p>
              </div>

              <div>
                <h3>Openbaar vervoer</h3>

                <p>
                  [Hier kan later de dichtstbijzijnde bushalte,
                  treinverbinding of wandelafstand worden toegevoegd.]
                </p>
              </div>

            </div>
          </div>

          <div className="practical-page-location-visual">
            <div className="practical-page-location-shape">
              <span>Herent</span>
            </div>
          </div>

        </div>
      </section>

      {/* CANCELLATION */}
      <section className="practical-page-cancel">
        <div className="practical-page-cancel-inner container">

          <div className="practical-page-cancel-heading">
            <span className="practical-page-label">
              Annulatie & no-show
            </span>

            <h2>
              Kan je er niet bij zijn?
            </h2>
          </div>

          <div className="practical-page-cancel-content">
            <p>
              Een afspraak kan via de website geannuleerd worden.
            </p>

            <p>
              Ik vraag om afspraken minstens
              <strong> 48 uur op voorhand </strong>
              te annuleren. Zo kan het vrijgekomen moment nog aan iemand anders
              worden aangeboden.
            </p>

            <p>
              Bij een annulering minder dan 48 uur voor de afspraak,
              of wanneer je niet komt opdagen, wordt het volledige tarief
              van <strong>€70</strong> aangerekend.
            </p>

            <a href="/afspraak" className="practical-page-cancel-button">
              <span>Afspraak annuleren</span>
              <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="practical-page-faq">
        <div className="practical-page-faq-inner container">

          <div className="practical-page-faq-heading">
            <span className="practical-page-label">
              Veelgestelde vragen
            </span>

            <h2>
              Misschien vraag je je dit nog af
            </h2>
          </div>

          <div className="practical-page-faq-list">
            {faqItems.map((item, index) => (
              <div
                className={`practical-page-faq-item ${
                  openFaq === index ? "open" : ""
                }`}
                key={item.question}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="practical-page-faq-question"
                >
                  <span>{item.question}</span>

                  <span className="practical-page-faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="practical-page-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CRISIS */}
      <section className="practical-page-crisis">
        <div className="practical-page-crisis-inner container">

          <div className="practical-page-crisis-title">
            <span>Dringende hulp</span>

            <h2>
              Heb je onmiddellijk hulp nodig?
            </h2>
          </div>

          <div className="practical-page-crisis-content">
            <p>
              Een consultatie bij de praktijk is niet bedoeld als vervanging
              voor dringende medische of psychiatrische hulp.
            </p>

            <p>
              Bij <strong>acuut gevaar</strong> bel je in België
              <strong> 112</strong> of ga je naar de dichtstbijzijnde spoeddienst.
            </p>

            <p>
              Heb je gedachten aan zelfdoding of maak je je ernstig zorgen
              over iemand? Dan kan je terecht bij
              <strong> Zelfmoordlijn 1813</strong>.
            </p>

            <p>
              Bij dringende medische problemen buiten de openingsuren kan je
              contact opnemen met een huisarts van wacht.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default PracticalPage;