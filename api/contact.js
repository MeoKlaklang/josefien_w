import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
	// Alleen POST toelaten
	if (req.method !== "POST") {
		return res.status(405).json({
			success: false,
			message: "Method not allowed",
		});
	}

	try {
		const { name, email, phone, message } = req.body;

		// Velden controleren
		if (!name || !email || !message) {
			return res.status(400).json({
				success: false,
				message: "Vul alle verplichte velden in.",
			});
		}

		// Mail versturen
		const { data, error } = await resend.emails.send({
			from: "Josefien Website <onboarding@resend.dev>",

			// TIJDELIJK TESTADRES
			// Dit is het adres dat Resend zelf in jouw voorbeeld gaf.
			to: ["klaklang.m@outlook.com"],

			// Wanneer je op "Beantwoorden" klikt,
			// antwoord je rechtstreeks naar de bezoeker.
			replyTo: email,

			subject: `Nieuw contactbericht van ${name}`,

			html: `
        <!DOCTYPE html>

        <html>
          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f5f1e8;
              font-family: Arial, Helvetica, sans-serif;
              color: #24352d;
            "
          >
            <div
              style="
                max-width: 620px;
                margin: 40px auto;
                padding: 40px;
                background-color: #ffffff;
                border-radius: 10px;
              "
            >
              <h1
                style="
                  margin: 0 0 30px;
                  color: #29483a;
                  font-size: 28px;
                "
              >
                Nieuw bericht via de website
              </h1>

              <div
                style="
                  padding: 20px;
                  background-color: #f5f1e8;
                  border-radius: 6px;
                  margin-bottom: 25px;
                "
              >
                <p style="margin: 0 0 12px;">
                  <strong>Naam</strong><br />
                  ${escapeHtml(name)}
                </p>

                <p style="margin: 0 0 12px;">
                  <strong>E-mail</strong><br />
                  ${escapeHtml(email)}
                </p>

                <p style="margin: 0;">
                  <strong>Telefoon</strong><br />
                  ${phone ? escapeHtml(phone) : "Niet opgegeven"}
                </p>
              </div>

              <p
                style="
                  margin: 0 0 8px;
                  font-weight: bold;
                "
              >
                Bericht
              </p>

              <div
                style="
                  line-height: 1.6;
                  white-space: pre-line;
                "
              >
                ${escapeHtml(message)}
              </div>

              <hr
                style="
                  margin: 30px 0;
                  border: 0;
                  border-top: 1px solid #deded6;
                "
              />

              <p
                style="
                  margin: 0;
                  font-size: 12px;
                  color: #68736d;
                "
              >
                Dit bericht werd verstuurd via het contactformulier
                van de website van Josefien.
              </p>
            </div>
          </body>
        </html>
      `,
		});

		// Resend gaf een fout terug
		if (error) {
			console.error("Resend error:", error);

			return res.status(400).json({
				success: false,
				message: error.message || "Resend kon de e-mail niet versturen.",
			});
		}

		console.log("Mail verzonden:", data);

		return res.status(200).json({
			success: true,
			message: "Bericht succesvol verzonden.",
			id: data?.id,
		});
	} catch (error) {
		console.error("Contact API error:", error);

		return res.status(500).json({
			success: false,
			message: error?.message || "Er ging iets mis bij het versturen.",
		});
	}
}

/*
  Zorgt ervoor dat tekst uit het formulier
  niet zomaar HTML kan injecteren in de mail.
*/
function escapeHtml(value = "") {
	return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
