import { useEffect, useRef } from "react";
import "./NotFound.css";
import airplaneSvg from "./airplane-svgrepo-com.svg";

const NotFound = () => {
  const airplaneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 100;
    let y = 100;
    let dirX = 1;
    let dirY = 1;
    const speed = 3;

    const airplaneElement = airplaneRef.current;

    if (!airplaneElement) return;

    const airplaneWidth = airplaneElement.offsetWidth;
    const airplaneHeight = airplaneElement.offsetHeight;

    let animationFrameId: number;

    const animate = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (y + airplaneHeight >= screenHeight || y <= 0) {
        dirY *= -1;
        airplaneElement.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
      }

      if (x + airplaneWidth >= screenWidth || x <= 0) {
        dirX *= -1;
        airplaneElement.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
      }

      x += dirX * speed;
      y += dirY * speed;

      airplaneElement.style.transform = `translate(${x}px, ${y}px) rotate(${Date.now() / 20}deg)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Oops! Cet itinéraire n'existe pas !</p>
      <a href="/" className="not-found__link">
        Take me Home
      </a>
      <div ref={airplaneRef} className="not-found__airplane">
        <img src={airplaneSvg} alt="Rotating Airplane" />
      </div>
    </div>
  );
};

export default NotFound;
