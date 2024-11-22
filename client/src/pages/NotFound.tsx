import "./NotFound.css";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.body.className = "body-error";

    return () => {
      document.body.className = "body-default"; //ou default
    };
  }, []);
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Oops! Cet itinéraire n'existe pas !</p>
      <a href="/" className="not-found__link">
        Take me Home
      </a>
      <div className="not-found__animation">
        <div className="not-found__circle">_</div>
      </div>
    </div>
  );
};

export default NotFound;
