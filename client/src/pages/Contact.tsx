import { useEffect, useMemo, useState } from "react";
import "./Contact.css";
import "../main.tsx";

// Importing all the images, this is a temporary solution, don't freakout Anthony for mother of god.
import allemagneImage from "../assets/images/allemagne.jpeg";
import baliImage from "../assets/images/bali.jpeg";
import canadaImage from "../assets/images/canada.jpeg";
import indeImage from "../assets/images/inde.jpeg";
import islandeImage from "../assets/images/islande.jpeg";
import italieImage from "../assets/images/italie.jpeg";
import japonImage from "../assets/images/japon.jpeg";
import laReunionImage from "../assets/images/laReunion.jpeg";
import londonImage from "../assets/images/london.webp";
import nouvelleZImage from "../assets/images/nouvelleZ.jpeg";
import paysBasImage from "../assets/images/paysBas.jpeg";
import polynesieImage from "../assets/images/polynesie.jpeg";
import singapourImage from "../assets/images/singapour.jpeg";
import spainImage from "../assets/images/spain.jpeg";
import suisseImage from "../assets/images/suisse.jpeg";
import tanzanieImage from "../assets/images/tanzanie.jpeg";
import turquieImage from "../assets/images/turquie.jpeg";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = useMemo(
    () => ({
      allemagne: {
        backgroundColor: "brown",
        id: "DE",
        number: 1,
        backgroundImage: allemagneImage,
      },
      bali: {
        backgroundColor: "red",
        id: "MY",
        number: 2,
        backgroundImage: baliImage,
      },
      canada: {
        backgroundColor: "#2b6ca3",
        id: "CA",
        number: 3,
        backgroundImage: canadaImage,
      },
      inde: {
        backgroundColor: "pink",
        id: "IN",
        number: 4,
        backgroundImage: indeImage,
      },
      islande: {
        backgroundColor: "pink",
        id: "IS",
        number: 5,
        backgroundImage: islandeImage,
      },
      italie: {
        backgroundColor: "pink",
        id: "IT",
        number: 6,
        backgroundImage: italieImage,
      },
      japon: {
        backgroundColor: "pink",
        id: "JP",
        number: 7,
        backgroundImage: japonImage,
      },
      laReunion: {
        backgroundColor: "pink",
        id: "RE",
        number: 8,
        backgroundImage: laReunionImage,
      },
      london: {
        backgroundColor: "pink",
        id: "GB",
        number: 9,
        backgroundImage: londonImage,
      },
      nouvelleZ: {
        backgroundColor: "pink",
        id: "NZ",
        number: 10,
        backgroundImage: nouvelleZImage,
      },
      paysBas: {
        backgroundColor: "pink",
        id: "NL",
        number: 11,
        backgroundImage: paysBasImage,
      },
      polynesie: {
        backgroundColor: "pink",
        id: "PF",
        number: 12,
        backgroundImage: polynesieImage,
      },
      singapour: {
        backgroundColor: "pink",
        id: "SG",
        number: 13,
        backgroundImage: singapourImage,
      },
      spain: {
        backgroundColor: "pink",
        id: "ES",
        number: 14,
        backgroundImage: spainImage,
      },
      suisse: {
        backgroundColor: "pink",
        id: "CH",
        number: 15,
        backgroundImage: suisseImage,
      },
      tanzanie: {
        backgroundColor: "pink",
        id: "TZ",
        number: 16,
        backgroundImage: tanzanieImage,
      },
      turquie: {
        backgroundColor: "pink",
        id: "TR",
        number: 17,
        backgroundImage: turquieImage,
      },
    }),
    [],
  );

  const [currentCountry, setCurrentCountry] = useState({
    backgroundImage: "",
    backgroundColor: "",
  });

  useEffect(() => {
    const countryKeys = Object.keys(countries) as (keyof typeof countries)[];
    const randomKey =
      countryKeys[Math.floor(Math.random() * countryKeys.length)];
    const randomCountry = countries[randomKey];
    setCurrentCountry(randomCountry);
  }, [countries]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <body
      className="contact-background"
      style={{
        backgroundImage: `url(${currentCountry.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="contact-form-container">
        <h2 style={{ color: `${currentCountry.backgroundColor}` }}>
          Contactez-nous
        </h2>
        {isSubmitted ? (
          <div className="success-animation">
            <img src="/success-animation.gif" alt="Success Animation" />
            <p>Merci ! Votre message a été envoyé.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Votre message"
              required
            />

            <button
              className="envoyer"
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: `${currentCountry.backgroundColor}`,
              }}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        )}
      </div>
    </body>
  );
}

export default Contact;
