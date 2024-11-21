import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>Explorez le Monde</h1>
        <p>Découvrez votre prochaine destination de rêve .</p>
        <img
          src="https://i.ibb.co/tQZYCfj/Gif.gif"
          alt="Animation du voyage"
          className="home-animation"
        />
      </div>

      <div className="home-right">
        <Link to="/quiz" className="home-quiz-button customizable">
          Découvrez votre voyage !
        </Link>
      </div>
    </div>
  );
}

export default Home;
