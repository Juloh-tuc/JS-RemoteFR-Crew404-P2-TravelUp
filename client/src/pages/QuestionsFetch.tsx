import { useEffect, useState } from "react";
import "./QuestionsForm.css";
import WorldMap from "../components/WorldMap";
import "../components/WorldMap.css";

// Define the structure of a country
interface Country {
  id: string;
  climat: {
    type: string[];
  };
  budget: {
    range: string[];
  };
  activities: {
    type: string[];
  };
  environnement: {
    type: string[];
  };
}

// Define question keys
const questionKeys = [
  "climat",
  "budget",
  "environnement",
  "activities",
  "people",
  "duration",
] as const;

// Image mapping
const questionsImg = {
  climat: [
    { img: "climat-warm.png" },
    { img: "climat-cold.png" },
    { img: "climat-temperate.png" },
  ],
  budget: [
    { img: "budget-high.png" },
    { img: "budget-medium.png" },
    { img: "budget-low.png" },
  ],
  activities: [
    { img: "beach.png" },
    { img: "party.png" },
    { img: "shopping.png" },
    { img: "hiking.png" },
    { img: "touring.png" },
    { img: "culinary.png" },
    { img: "relax.png" },
  ],
  environnement: [
    { img: "beach.png" },
    { img: "mountain.png" },
    { img: "countryside.png" },
    { img: "city.png" },
  ],
  people: [
    { img: "solo.png" },
    { img: "family.png" },
    { img: "couple.png" },
    { img: "friends.png" },
  ],
  duration: [{ img: "week.png" }, { img: "weekend.png" }, { img: "weeks.png" }],
} as const;

// Question labels
const questionLabels: Record<(typeof questionKeys)[number], string> = {
  climat: "Quel climat préférez-vous ?",
  budget: "Quel budget avez-vous ?",
  environnement: "Quel environnement préférez-vous ?",
  activities: "Quelles activités préférez-vous ?",
  people: "Vous voyagez ?",
  duration: "La durée de votre séjour ?",
};

const QuestionsForm = () => {
  const [selectedCriteria, setSelectedCriteria] = useState<
    Record<string, string[]>
  >({
    climat: [],
    budget: [],
    activities: [],
    environnement: [],
  });

  const [remainingCountries, setRemainingCountries] = useState<string[]>([]);
  const [persistedCountries, setPersistedCountries] = useState<string[]>([]);
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Fetch countries data
  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/countries");
        const data: Record<string, Country> = await response.json();
        setAllCountries(Object.values(data));
        setRemainingCountries(Object.values(data).map((country) => country.id));
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchAllCountries();
  }, []);

  const filterCountries = (criteria: Record<string, string[]>) => {
    return allCountries
      .filter((country) =>
        questionKeys.slice(0, 4).every((key) => {
          const selectedValues = criteria[key] || [];
          const property = country[key as keyof Country];

          if (selectedValues.length === 0) return true;

          if (
            property &&
            typeof property === "object" &&
            "type" in property &&
            Array.isArray(property.type)
          ) {
            return selectedValues.some((v) => property.type.includes(v));
          }

          if (property && typeof property === "object" && "range" in property) {
            return selectedValues.some((v) => property.range.includes(v));
          }

          return false;
        }),
      )
      .map((country) => country.id);
  };

  const handleCriteriaToggle = (key: string, value: string): void => {
    const currentValues = selectedCriteria[key] || [];
    const isSelected = currentValues.includes(value);

    const updatedValues = isSelected
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];

    const updatedCriteria = { ...selectedCriteria, [key]: updatedValues };
    setSelectedCriteria(updatedCriteria);

    // Update remaining countries only if the key is part of matching criteria
    if (!["people", "duration"].includes(key)) {
      const updatedRemainingCountries = filterCountries(updatedCriteria);
      setRemainingCountries(updatedRemainingCountries);
      setPersistedCountries(updatedRemainingCountries); // Persist the latest matching countries
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) =>
      prev < questionKeys.length - 1 ? prev + 1 : prev,
    );
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const currentQuestionKey = questionKeys[currentQuestionIndex];
  const currentOptions =
    currentQuestionKey === "climat"
      ? ["chaud", "froid", "tempéré"]
      : currentQuestionKey === "budget"
        ? ["petit", "moyen", "élevé"]
        : currentQuestionKey === "environnement"
          ? ["plage", "montagne", "campagne", "ville"]
          : currentQuestionKey === "people"
            ? ["solo", "famille", "couple", "amis"]
            : currentQuestionKey === "duration"
              ? ["semaine", "weekend", "semaines"]
              : [
                  "plage",
                  "fête",
                  "shopping",
                  "randonnées",
                  "visite",
                  "culinaire",
                  "détente",
                ];

  return (
    <div className="questions-form-container">
      <h2>Questionnaire</h2>
      <div className="map-container">
        <div className="checkbox-container">
          <h3>{questionLabels[currentQuestionKey]}</h3>
          <div className="form-container">
            {currentOptions.map((value, index) => (
              <label key={value} className="option-label">
                <input
                  type="checkbox"
                  onChange={() =>
                    handleCriteriaToggle(currentQuestionKey, value)
                  }
                />
                <div className="option-content">
                  <img
                    src={`../../img/${
                      questionsImg[currentQuestionKey]?.[index]?.img ||
                      "placeholder.png"
                    }`}
                    alt={value}
                    className="option-image"
                  />
                  <span>{value}</span>
                </div>
              </label>
            ))}
          </div>
          <p>
            Pays correspondants :{" "}
            {persistedCountries.length > 0
              ? persistedCountries.join(", ")
              : "Aucun"}
          </p>
        </div>
        <div>
          <WorldMap highlightedCountries={remainingCountries} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Précédent
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentQuestionIndex === questionKeys.length - 1}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsForm;
