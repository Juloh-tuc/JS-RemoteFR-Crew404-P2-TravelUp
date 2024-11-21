import { useEffect, useState } from "react";
import "./Contact.css";
import "../main.tsx";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const countries = {
    allemagne: {
      backgroundColor: "brown",
      id: "DE",
      number: 1,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732113630-pexels-jplenio-1119972.jpg",
    },
    bali: {
      backgroundColor: "red",
      id: "MY",
      number: 2,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732113804-pexels-freestockpro-2166559.jpg",
    },
    canada: {
      backgroundColor: "#2b6ca3",
      id: "CA",
      number: 3,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732114041-pexels-souvenirpixels-417074.jpg",
    },
    inde: {
      backgroundColor: "pink",
      id: "IN",
      number: 4,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732128950-pexels-sudipta-1603650.jpg",
    },
    islande: {
      backgroundColor: "pink",
      id: "IS",
      number: 5,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732129011-pexels-simonmigaj-1009136.jpg",
    },
    italie: {
      backgroundColor: "pink",
      id: "IT",
      number: 6,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732129074-pexels-davifnr-2064827.jpg",
    },
    japon: {
      backgroundColor: "pink",
      id: "JP",
      number: 7,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732129125-pexels-liger-pham-232622-1108701.jpg",
    },
    laReunion: {
      //??
      backgroundColor: "pink",
      id: "RE",
      number: 8,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732114112-pexels-sudipta-1603650.jpg",
    },
    london: {
      backgroundColor: "pink",
      id: "GB",
      number: 9,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732129298-pexels-pixabay-460672.jpg",
    },
    nouvelleZ: {
      backgroundColor: "pink",
      id: "NZ",
      number: 10,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732129414-pexels-donovan-kelly-110228397-17824134-1.jpg",
    },
    paysBas: {
      backgroundColor: "pink",
      id: "NL",
      number: 11,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732129469-pexels-tanathip-rattanatum-1050216-2026451.jpg",
    },
    polynesie: {
      backgroundColor: "pink",
      id: "PF",
      number: 12,
      backgroundImage: // ??
        "https://image.noelshack.com/fichiers/2024/47/3/1732114112-pexels-sudipta-1603650.jpg",
    },
    singapour: {
      backgroundColor: "pink",
      id: "SG",
      number: 13,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732129586-pexels-alaric-sim-380461-1029188.jpg",
    },
    spain: {
      backgroundColor: "pink",
      id: "ES",
      number: 14,
      backgroundImage: // ??
        "https://image.noelshack.com/fichiers/2024/47/3/1732114112-pexels-sudipta-1603650.jpg",
    },
    suisse: {
      backgroundColor: "pink",
      id: "CH",
      number: 15,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732129705-pexels-robert-stokoe-105922-733148.jpg",
    },
    tanzanie: {
      backgroundColor: "pink",
      id: "TZ",
      number: 16,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732129748-pexels-hendrikcornelissen-2862070-1.jpg",
    },
    turquie: {
      backgroundColor: "pink",
      id: "TR",
      number: 17,
      backgroundImage:
        "https://image.noelshack.com/fichiers/2024/47/3/1732129789-pexels-adilgkkya-2668314.jpg",
    },
  };

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
  }, []);

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
            <label htmlFor="name">_</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              required
            />

            <label htmlFor="email">_</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              required
            />

            <label htmlFor="message">_</label>
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
