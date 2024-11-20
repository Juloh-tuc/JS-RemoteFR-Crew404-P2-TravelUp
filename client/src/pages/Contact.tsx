import { useEffect, useState } from "react";
import "./Contact.css";
import "../main.tsx";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    const images = [
      "https://images.pexels.com/photos/257092/pexels-photo-257092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/29032545/pexels-photo-29032545/free-photo-of-spectacular-cliffs-of-etretat-in-normandy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);
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
      className="contact-background customizable"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
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
