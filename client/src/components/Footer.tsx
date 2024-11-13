import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import "../App.css";

function Footer() {
  return (
    <section>
      <footer>
        <h3 className="footer_title">Suivez-nous</h3>
        <div className="container_icon">
          <img src={instagram} alt="icone instagram" className="social_icon" />
          <img src={facebook} alt="icone facebook" className="social_icon" />
          <img src={linkedin} alt="icone linkedin" className="social_icon" />
          <img src={twitter} alt="icone twitter" className="social_icon" />
        </div>
        <p className="creators">
          Travel up@2024|Designed by Julie Lohier, Frank Sena Agbolosu, Charles
          Catto and Camille Lemort{" "}
        </p>
      </footer>
    </section>
  );
}

export default Footer;
