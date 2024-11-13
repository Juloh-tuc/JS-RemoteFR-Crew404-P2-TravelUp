import { useState } from "react";
import questionsData from "./questions.json";
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
}

const questionKeys = [
  "climate",
  "budget",
  "activity",
  "environnement",
] as const;
const questionLabels: { [key: string]: string } = {
  climate: "Quel climat désirez-vous ?",
  budget: "Quel budget ?",
  activity: "Quelles activités ?",
  environnement: "Quel environnement ?",
};

const QuestionsForm: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string;
  }>({});

  const currentQuestionKey = questionKeys[currentQuestionIndex];
  const currentQuestionData =
    questionsData[currentQuestionKey as keyof QuestionsData];
  const currentQuestionLabel = questionLabels[currentQuestionKey];

  const handleAnswerChange = (questionKey: string, answerLabel: string) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionKey]: answerLabel,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionKeys.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      alert("All questions completed!"); // Replace this with your own submit logic
    }
  };

  return (
    <div>
      <form className="form">
        <fieldset>
          <legend>{currentQuestionLabel}</legend>
          {currentQuestionData.map((option) => (
            <div
              key={`${currentQuestionKey}-${option.label}`}
              style={{
                display: "inline-block",
                textAlign: "center",
                margin: "10px",
              }}
            >
              <input
                type="radio"
                id={option.label}
                name={currentQuestionKey}
                checked={selectedAnswers[currentQuestionKey] === option.label}
                onChange={() =>
                  handleAnswerChange(currentQuestionKey, option.label)
                }
              />
              <label htmlFor={option.label}>
                <img
                  src={`/${option.img}`}
                  alt={option.label}
                  style={{ width: "50px", height: "50px" }}
                />
                <div>{option.label}</div>
              </label>
            </div>
          ))}
        </fieldset>
        <button
          type="button"
          onClick={handleNextQuestion}
          style={{ marginTop: "20px" }}
        >
          Valider
        </button>
      </form>
    </div>
  );
};

export default QuestionsForm;
