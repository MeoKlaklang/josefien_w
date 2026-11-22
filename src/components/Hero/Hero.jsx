import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const heroImages = [
  {
    src: "/images/werkwijze.jpeg",
    alt: "Rustige praktijkruimte van De Jowa",
  },
  {
    src: "/images/plant.jpeg",
    alt: "Groene planten in een rustige praktijkomgeving",
  },
  {
    src: "/images/plant1.jpeg",
    alt: "Detail van planten in de praktijk",
  },
  {
    src: "/images/plant2.jpeg",
    alt: "Warme en rustige sfeer in de praktijk",
  },
  {
    src: "/images/plant3.jpeg",
    alt: "Interieurdetail van de praktijk",
  },
];

function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) =>
        current === heroImages.length - 1
          ? 0
          : current + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">

        {/* LINKERKANT */}
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

            <Link
              to="/afspraak"
              className="hero-button"
            >
              <span>
                Een eerste gesprek aanvragen
              </span>

              <span className="hero-button-arrow">
                →
              </span>
            </Link>

          </div>
        </div>

        {/* RECHTERKANT — SLIDER */}
        <div className="hero-image-wrapper">

          {heroImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`hero-image ${
                index === activeImage
                  ? "hero-image-active"
                  : ""
              }`}
            />
          ))}

          {/* WITTE OVERLAY */}
          <div
            className="hero-image-overlay"
            aria-hidden="true"
          />

          {/* DOTS */}
          <div
            className="hero-slider-dots"
            aria-label="Afbeeldingen"
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`hero-slider-dot ${
                  index === activeImage
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveImage(index)
                }
                aria-label={`Toon afbeelding ${
                  index + 1
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;