import { useState } from "react";
import "./ApproachSection.css";

const slides = [
  {
    image: "/images/werkwijze.png",
    text1:
      "Mijn manier van werken is eerder gedragsgericht. We kijken samen naar patronen die je vandaag helpen, maar je misschien ook in de weg staan. Vanuit dat inzicht zoeken we naar mogelijkheden om dingen anders aan te pakken en stap voor stap verandering te brengen.",
    text2:
      "Ik vind het belangrijk dat therapie een veilige plek is waar je jezelf kan zijn en waar ook moeilijke of kwetsbare thema's bespreekbaar mogen worden.",
  },
  {
    image: "/images/sectie1.png",
    text1:
      "Therapie is voor mij geen proces waarbij ik je vertel wat je moet doen. Ik zie mezelf eerder als iemand die naast je staat en samen met jou onderzoekt wat er speelt.",
    text2:
      "Sommige sessies draaien vooral rond inzicht en begrip. Op andere momenten werken we meer praktisch en oefenen we samen.",
  },
  {
    image: "/images/sectie2.png",
    text1:
      "Wanneer dit aansluit bij je hulpvraag, geef ik ook oefeningen of opdrachten mee voor tussen de sessies.",
    text2:
      "Zo kunnen inzichten uit de gesprekken ook toegepast worden in je dagelijkse leven. Therapie vraagt daarom ook engagement van de cliënt.",
  },
];

function ApproachSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const slide = slides[currentSlide];

  return (
    <section className="approach-section">
      <div className="approach-container container">
        <h2 className="approach-title">
          Hoe gaan we aan de slag?
        </h2>

        <div className="approach-slider">
          <button
            className="approach-arrow approach-arrow-left"
            onClick={previousSlide}
            aria-label="Vorige slide"
          >
            ←
          </button>

          <div className="approach-card">
            <div className="approach-image">
              <img
                src={slide.image}
                alt="Sfeerbeeld bij de werkwijze"
              />
            </div>

            <div className="approach-content">
              <div className="approach-copy">
                <p>{slide.text1}</p>
                <p>{slide.text2}</p>
              </div>

              <a href="/werkwijze" className="approach-button">
                <span>Lees meer</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <button
            className="approach-arrow approach-arrow-right"
            onClick={nextSlide}
            aria-label="Volgende slide"
          >
            →
          </button>
        </div>

        <div className="approach-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`approach-dot ${
                currentSlide === index ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ga naar slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="approach-together">
          <span>samen!</span>
        </div>
      </div>
    </section>
  );
}

export default ApproachSection;