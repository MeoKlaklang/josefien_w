import { useState } from "react";
import "./AppointmentPage.css";

function AppointmentPage() {
  const appointmentTypes = [
    {
      id: "intake",
      title: "Kennismakingsgesprek",
      description:
        "Een eerste gesprek om kennis te maken, stil te staan bij wat er speelt en samen te bekijken wat je nodig hebt.",
      duration: "45 minuten",
      price: "€70",
    },
    {
      id: "followup",
      title: "Vervolggesprek",
      description:
        "Voor wanneer je al eerder bij Josefien bent geweest en graag een volgende afspraak wil inplannen.",
      duration: "45 minuten",
      price: "€70",
    },
  ];

  const [selectedType, setSelectedType] = useState("");

  const selectedAppointment = appointmentTypes.find(
    (item) => item.id === selectedType
  );

  const googleBookingUrl =
    "https://calendar.app.google/PyDHHCuUpKvbQU1x9";

  const handleContinue = () => {
    if (!selectedType) return;

    window.open(
      googleBookingUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="appointment-page">

      {/* HERO */}
      <section className="appointment-hero">
        <div className="appointment-hero-inner container">

          <span className="appointment-label">
            Afspraak maken
          </span>

          <h1>
            Plan een moment
            <br />
            <span>
              dat voor jou past.
            </span>
          </h1>

          <p>
            Kies eerst het type gesprek. Daarna kan je een
            beschikbaar moment selecteren via de boekingspagina.
          </p>

        </div>
      </section>


      {/* FLOW */}
      <section className="appointment-flow">

        <div className="appointment-flow-inner container">

          {/* STEPS */}
          <div className="appointment-steps">

            <div className="appointment-step active">
              <span>1</span>
              <p>Gesprek</p>
            </div>

            <div className="appointment-step-line"></div>

            <div className="appointment-step">
              <span>2</span>
              <p>Datum & uur</p>
            </div>

            <div className="appointment-step-line"></div>

            <div className="appointment-step">
              <span>3</span>
              <p>Gegevens</p>
            </div>

            <div className="appointment-step-line"></div>

            <div className="appointment-step">
              <span>4</span>
              <p>Bevestiging</p>
            </div>

          </div>


          <div className="appointment-layout">

            {/* LEFT SUMMARY */}
            <aside className="appointment-summary">

              <span className="appointment-summary-label">
                Jouw keuze
              </span>

              <div className="appointment-summary-section">

                <span>
                  Gesprek
                </span>

                <strong>
                  {selectedAppointment
                    ? selectedAppointment.title
                    : "Nog niet gekozen"}
                </strong>

              </div>


              <div className="appointment-summary-section">

                <span>
                  Wanneer
                </span>

                <strong>
                  Te kiezen in de volgende stap
                </strong>

              </div>


              <div className="appointment-summary-section">

                <span>
                  Duur
                </span>

                <strong>
                  {selectedAppointment
                    ? selectedAppointment.duration
                    : "45 minuten"}
                </strong>

              </div>


              <div className="appointment-summary-section">

                <span>
                  Waar
                </span>

                <strong>
                  Praktijk
                </strong>

              </div>


              <div className="appointment-summary-section">

                <span>
                  Tarief
                </span>

                <strong>
                  {selectedAppointment
                    ? selectedAppointment.price
                    : "€70"}
                </strong>

              </div>

            </aside>


            {/* RIGHT CONTENT */}
            <section className="appointment-content">

              <div className="appointment-content-heading">

                <span className="appointment-label">
                  Stap 1
                </span>

                <h2>
                  Welk gesprek wil je
                  inplannen?
                </h2>

                <p>
                  Kies hieronder het type gesprek dat bij jou past.
                  Daarna kan je een beschikbare datum en uur kiezen.
                </p>

              </div>


              <div className="appointment-options">

                {appointmentTypes.map((appointment) => (
                  <button
                    type="button"
                    key={appointment.id}
                    className={`appointment-option ${
                      selectedType === appointment.id
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedType(appointment.id)
                    }
                  >

                    <div className="appointment-option-top">

                      <div>

                        <h3>
                          {appointment.title}
                        </h3>

                        <p>
                          {appointment.description}
                        </p>

                      </div>


                      <span className="appointment-radio">

                        {selectedType === appointment.id
                          ? "✓"
                          : ""}

                      </span>

                    </div>


                    <div className="appointment-option-bottom">

                      <span>
                        {appointment.duration}
                      </span>

                      <span>
                        {appointment.price}
                      </span>

                    </div>

                  </button>
                ))}

              </div>


              <div className="appointment-google-note">

                <span className="appointment-google-note-icon">
                  ↗
                </span>

                <p>
                  In de volgende stap kies je een beschikbare datum
                  en uur via Google Agenda. Daar vul je ook je naam,
                  e-mailadres en telefoonnummer in.
                </p>

              </div>


              <button
                type="button"
                className="appointment-next"
                disabled={!selectedType}
                onClick={handleContinue}
              >

                <span>
                  Kies datum en uur
                </span>

                <span>
                  →
                </span>

              </button>


              <p className="appointment-external-note">
                De boekingspagina opent in een nieuw tabblad.
              </p>

            </section>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AppointmentPage;