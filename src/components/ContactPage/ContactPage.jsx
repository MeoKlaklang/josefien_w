import { useState } from "react";

import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const [statusMessage, setStatusMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  const handleChange = (event) => {
    const { name, value } =
      event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    setStatus("");

    setStatusMessage("");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            formData
          ),
        }
      );

      /*
        Altijd eerst response uitlezen.
        Daardoor zien we ook de echte
        foutmelding van Resend.
      */
      const result =
        await response.json();

      console.log(
        "API response:",
        result
      );

      if (!response.ok) {
        console.error(
          "Server error:",
          result
        );

        throw new Error(
          result.message ||
            "Er ging iets mis bij het versturen."
        );
      }


      setStatus("success");

      setStatusMessage(
        "Bedankt! Je bericht werd goed verzonden."
      );


      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Contact error:",
        error
      );

      setStatus("error");

      setStatusMessage(
        error.message ||
          "Er ging iets mis bij het versturen."
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="contact-page">

      {/* HERO */}

      <section className="contact-hero">
        <div className="contact-hero-inner container">

          <div className="contact-heading">

            <span className="contact-label">
              Contact
            </span>

            <h1>
              Heb je een vraag?
              <br />

              <span>
                Laat gerust iets weten.
              </span>
            </h1>

            <p>
              Heb je eerst nog een vraag
              voordat je een afspraak maakt?
              Je mag altijd contact opnemen.
              Ik probeer je zo snel mogelijk
              een antwoord te geven.
            </p>

          </div>

        </div>
      </section>


      {/* CONTACT + FORM */}

      <section className="contact-main">

        <div className="contact-grid container">

          {/* LEFT */}

          <div className="contact-info">

            <h2>
              Neem contact op
            </h2>

            <p className="contact-info-intro">
              Je kan mij bereiken via
              e-mail, telefoon of via het
              contactformulier.
            </p>


            <div className="contact-details">

              <div className="contact-detail">

                <span className="contact-detail-number">
                  01
                </span>

                <div>

                  <h3>
                    E-mail
                  </h3>

                  <a href="mailto:info@praktijknaam.be">
                    info@praktijknaam.be
                  </a>

                </div>

              </div>


              <div className="contact-detail">

                <span className="contact-detail-number">
                  02
                </span>

                <div>

                  <h3>
                    Telefoon
                  </h3>

                  <a href="tel:+3212345678">
                    +32 12 34 56 78
                  </a>

                </div>

              </div>


              <div className="contact-detail">

                <span className="contact-detail-number">
                  03
                </span>

                <div>

                  <h3>
                    Praktijk
                  </h3>

                  <p>
                    [Naam praktijk]
                    <br />

                    [Straat + nummer]
                    <br />

                    [Postcode] Herent
                  </p>

                </div>

              </div>

            </div>


            <p className="contact-small-note">
              Consultaties vinden plaats{" "}
              <strong>
                op afspraak.
              </strong>
            </p>

          </div>


          {/* FORM */}

          <div className="contact-form-wrapper">

            <div className="contact-form-header">

              <h2>
                Stuur een bericht
              </h2>

              <p>
                Vul hieronder je gegevens
                in en ik neem zo snel
                mogelijk contact met je op.
              </p>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}

              <div className="contact-field">

                <label htmlFor="name">
                  Naam *
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />

              </div>


              {/* EMAIL */}

              <div className="contact-field">

                <label htmlFor="email">
                  E-mailadres *
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />

              </div>


              {/* PHONE */}

              <div className="contact-field">

                <label htmlFor="phone">

                  Telefoonnummer

                  <span>
                    {" "}optioneel
                  </span>

                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />

              </div>


              {/* MESSAGE */}

              <div className="contact-field">

                <label htmlFor="message">
                  Bericht *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* PRIVACY */}

              <div className="contact-privacy">

                <span className="contact-lock">
                  ↳
                </span>

                <p>
                  Je bericht komt
                  rechtstreeks in de
                  mailbox van de praktijk
                  en wordt enkel gebruikt
                  om je te antwoorden.

                  Als psychologe ben ik
                  gebonden door het
                  beroepsgeheim.

                  Je bericht wordt niet
                  gedeeld en niet langer
                  bewaard dan nodig.

                  Je kan altijd vragen om
                  het te laten verwijderen.
                </p>

              </div>


              {/* SUBMIT */}

              <button
                className="contact-submit"
                type="submit"
                disabled={loading}
              >

                <span>
                  {loading
                    ? "Versturen..."
                    : "Verstuur bericht"}
                </span>

                {!loading && (
                  <span>
                    →
                  </span>
                )}

              </button>


              {/* SUCCESS */}

              {status === "success" && (
                <p className="contact-success">
                  {statusMessage}
                </p>
              )}


              {/* ERROR */}

              {status === "error" && (
                <p className="contact-error">
                  {statusMessage}
                </p>
              )}

            </form>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="contact-cta">

        <div className="contact-cta-inner container">

          <div>

            <span className="contact-label">
              Eerste gesprek
            </span>

            <h2>
              Liever meteen een gesprek
              inplannen?
            </h2>

            <p>
              Je hoeft je hulpvraag nog
              niet perfect te kunnen
              formuleren.

              Een eerste gesprek is er net
              om samen te bekijken wat er
              speelt en wat je nodig hebt.
            </p>

          </div>


          <a
            href="/afspraak"
            className="contact-cta-button"
          >

            <span>
              Een eerste gesprek aanvragen
            </span>

            <span>
              →
            </span>

          </a>

        </div>

      </section>

    </div>
  );
}

export default ContactPage;