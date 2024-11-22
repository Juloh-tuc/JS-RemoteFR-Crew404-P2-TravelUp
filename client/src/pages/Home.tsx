import "./Home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    // Add the class for the home background JS style
    document.body.className = "body-home";

    // Cleanup to reset to default background JS style
    return () => {
      document.body.className = "body-default";
    };
  }, []);
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
