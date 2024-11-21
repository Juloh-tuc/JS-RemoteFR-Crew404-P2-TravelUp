import "./About.css";
import camille from "../assets/images/camille.png";
import charles from "../assets/images/charles.png";
import frank from "../assets/images/frank.png";
import history from "../assets/images/history.jpg";
import julie from "../assets/images/julie.png";
import mission from "../assets/images/mission.png";

function About() {
  return (
    <div className="myabout">
      <header>
        <h1>À propos de nous</h1>
      </header>
      <div className="mycontainer1">
        <section className="myelement">
          <h3>Notre histoire</h3>
          <p>
            L'idée du site "Travel Up" est née de quatre étudiants qui sont en
            formation à la Wild Code School.C'est pendant le projet deux que
            nous avons eu l'inspiration pour une application sur le voyage.
          </p>
        </section>
        <div>
          <img src={history} alt="avatar d'histoire" className="myhistory" />
        </div>
      </div>
      <div className="container_equipe">
        <section className="myelement">
          <h3>L'équipe</h3>
          <p>
            L'équipe est constituée de Charles, Camille, Julie et Frank qui sont
            en reconversion professionnelle. Nous sommes tous motivés pour
            réussir ce projet pour pouvoir partager notre passion pour les
            voyages.
          </p>
        </section>
        <div className="container_photo">
          <div className="element1">
            <img src={camille} alt="avatar camille" className="myphoto" />
            <figcaption>Camille</figcaption>
          </div>
          <div className="element2">
            <img src={charles} alt="avatar charles" className="myphoto" />
            <figcaption>Charles</figcaption>
          </div>
          <div className="element3">
            <img src={julie} alt="avatar julie" className="myphoto" />
            <figcaption>Julie</figcaption>
          </div>
          <div className="element4">
            <img src={frank} alt="avatar frank" className="myphoto" />
            <figcaption>Frank</figcaption>
          </div>
        </div>
      </div>
      <div className="container_mission">
        <section className="myelement2">
          <h3>Notre mission</h3>
          <p>
            L'objectif de ce site, c'est de vous proposer des destinations en
            fonction des envies de l'utilisateur à travers un questionnaire. Ce
            concept vient remplacer la méthode traditionnelle qui consiste à
            choisir par soi-même son lieu de vacances. Cependant, nous allons
            continuer de travailler afin de toujours améliorer l'experiences des
            utilisateurs du site.
          </p>
        </section>
        <div>
          <img
            src={mission}
            alt="avatar de mission"
            className="mission_photo"
          />
        </div>
      </div>
    </div>
  );
}

export default About;