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
    const element = document.getElementById("world-map") as HTMLObjectElement;

    if (element?.contentDocument) {
      const paths = element.contentDocument.querySelectorAll("path");

      if (paths.length > 0) {
        for (const path of paths) {
          if ((path as SVGPathElement).style) {
            (path as SVGPathElement).style.fill = "#DBBEA1";
          }
        }
      }

      for (const countryId of highlightedCountries) {
        const countryElement = element.contentDocument.querySelector(
          `#${countryId}`,
        );

        if (countryElement && (countryElement as SVGElement).style) {
          (countryElement as SVGElement).style.fill = "#00a676";
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
        tabIndex={0}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const countryId = target.id;
          if (countryId) handleCountryClick(countryId);
        }}
        onKeyDown={(e) => {
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
