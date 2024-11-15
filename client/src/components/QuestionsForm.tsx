import { useEffect, useState } from "react";
import questionsData from "./questions.json";
import "./QuestionsForm.css";

interface Answer {
  img: string;
  checked: boolean;
  label: string;
}

interface QuestionsData {
  climate: Answer[];
  budget: Answer[];
  activity: Answer[];
  environnement: Answer[];
  people: Answer[];
  duration: Answer[];
}

const questionKeys = [
  "climate",
  "budget",
  "activity",
  "environnement",
  "people",
  "duration",
] as const;

const questionLabels: { [key: string]: string } = {
  climate: "Quel climat désirez-vous ?",
  budget: "Quel budget ?",
  activity: "Quelles activités ?",
  environnement: "Quel environnement ?",
  people: "Combien de personnes ?",
  duration: "Pour combien de temps ?",
};

interface Country {
  name: string;
  id: number;
  climat: { type: string[] };
  environnement: { type: string[] };
  budget: { type: string[] };
  activities: string[];
  image: { href: string; alt: string };
}

const QuestionsForm: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string[];
  }>({});
  const [isComplete, setIsComplete] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [matchingCountries, setMatchingCountries] = useState<Country[]>([]);

  const currentQuestionKey = questionKeys[currentQuestionIndex];
  const currentQuestionData =
    questionsData[currentQuestionKey as keyof QuestionsData];
  const currentQuestionLabel = questionLabels[currentQuestionKey];

  useEffect(() => {
    if (isComplete) {
      fetch("/path/to/countriesData.json")
        .then((response) => response.json())
        .then((data: { [key: string]: Country }) => {
          const countryArray = Object.values(data);
          setCountries(countryArray);

          const filteredCountries = countryArray.filter((country) => {
            let matchScore = 0;

            if (
              selectedAnswers.climate?.some((climate) =>
                country.climat.type.includes(climate),
              )
            ) {
              matchScore++;
            }

            if (
              selectedAnswers.budget?.some((budget) =>
                country.budget.type.includes(budget),
              )
            ) {
              matchScore++;
            }

            if (
              selectedAnswers.activity?.some((activity) =>
                country.activities.includes(activity),
              )
            ) {
              matchScore++;
            }

            if (
              selectedAnswers.environnement?.some((env) =>
                country.environnement.type.includes(env),
              )
            ) {
              matchScore++;
            }

            return matchScore >= 3;
          });

          setMatchingCountries(filteredCountries.slice(0, 3));
        });
    }
  }, [isComplete, selectedAnswers]);

  const handleAnswerChange = (questionKey: string, answerLabel: string) => {
    setSelectedAnswers((prevAnswers) => {
      const answersForCurrentQuestion = prevAnswers[questionKey] || [];

      const updatedAnswersForCurrentQuestion =
        answersForCurrentQuestion.includes(answerLabel)
          ? answersForCurrentQuestion.filter((answer) => answer !== answerLabel)
          : [...answersForCurrentQuestion, answerLabel];

      return {
        ...prevAnswers,
        [questionKey]: updatedAnswersForCurrentQuestion,
      };
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionKeys.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  return (
    <div>
      {isComplete ? (
        <div className="recap">
          <h3>Recap of Your Answers</h3>
          {questionKeys.map((questionKey) => (
            <div key={questionKey} style={{ marginBottom: "15px" }}>
              <h4>{questionLabels[questionKey]}</h4>
              <ul>
                {selectedAnswers[questionKey]?.map((answer) => (
                  <li key={answer}>{answer}</li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3>Recommended Countries</h3>
            {matchingCountries.length > 0 ? (
              <ul>
                {matchingCountries.map((country) => (
                  <li key={country.id}>
                    <img
                      src={`/${country.image.href}`}
                      alt={country.image.alt}
                      width="100"
                    />
                    <p>{country.name}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No destinations match your preferences.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="checkbox-container">
          <form className="form">
            <fieldset>
              <h2>{currentQuestionLabel}</h2>
              <div className="options-container">
                {currentQuestionData.map((option) => (
                  <div
                    key={`${currentQuestionKey}-${option.label}`}
                    className="option-wrapper"
                  >
                    <input
                      className="questions"
                      type="checkbox"
                      id={option.label}
                      name={currentQuestionKey}
                      checked={
                        selectedAnswers[currentQuestionKey]?.includes(
                          option.label,
                        ) || false
                      }
                      onChange={() =>
                        handleAnswerChange(currentQuestionKey, option.label)
                      }
                    />
                    <label htmlFor={option.label} className="option-label">
                      <img
                        src={`./public/img/${option.img}`}
                        alt={option.label}
                        className="option-image"
                      />
                      <div>{option.label}</div>
                    </label>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="validate"
                onClick={handleNextQuestion}
                style={{ marginTop: "20px" }}
              >
                Valider
              </button>
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
};

export default QuestionsForm;
