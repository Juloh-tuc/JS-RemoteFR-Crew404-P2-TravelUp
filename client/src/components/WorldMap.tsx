import { useEffect, useState } from "react";
import world from "../assets/world.svg";

interface MapProps {
  highlightedCountries: string[];
}

const WorldMap: React.FC<MapProps> = ({ highlightedCountries }) => {
  const [_, setSelectedCountries] = useState<string[]>([]);

  const handleCountryClick = (countryId: string) => {
    setSelectedCountries((prevSelected) =>
      prevSelected.includes(countryId)
        ? prevSelected.filter((id) => id !== countryId)
        : [...prevSelected, countryId],
    );
  };

  useEffect(() => {
    const element = document.getElementById("world-map");
    if (element && element instanceof SVGElement) {
      // Set default color for all countries
      const paths = element.querySelectorAll("path");
      for (const path of paths) {
        path.setAttribute("fill", "gray");
      }

      // Highlight selected countries
      for (const countryId of highlightedCountries) {
        const countryElement = element.querySelector(`#${countryId}`);
        if (countryElement) {
          countryElement.setAttribute("fill", "red");
        }
      }
    }
  }, [highlightedCountries]);

  return (
    <div>
      <object
        id="world-map"
        className="map"
        data={world}
        type="image/svg+xml"
        aria-label="Interactive world map"
        tabIndex={0} // Allows focusing with keyboard
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const countryId = target.id;
          if (countryId) handleCountryClick(countryId);
        }}
        onKeyDown={(e) => {
          // Handle keyboard events for accessibility (optional)
          if (e.key === "Enter" || e.key === " ") {
            const target = e.target as HTMLElement;
            const countryId = target.id;
            if (countryId) handleCountryClick(countryId);
          }
        }}
      />
    </div>
  );
};

export default WorldMap;
