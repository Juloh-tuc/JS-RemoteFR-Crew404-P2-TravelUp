import { useState } from "react";
import "./Contact.css";
import "../main.tsx";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <body className="contact-background customizable">
      <div className="contact-form-container">
        <h2>Contactez-nous</h2>
        {isSubmitted ? (
          <div className="success-animation">
            <img src="/success-animation.gif" alt="Success Animation" />
            <p>Merci ! Votre message a été envoyé.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nom</label>
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
              className="envoyer customizable "
              type="submit"
              disabled={isSubmitting}
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
