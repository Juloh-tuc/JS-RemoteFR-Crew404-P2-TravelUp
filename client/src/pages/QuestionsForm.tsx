// import { useEffect, useState } from "react";
// import questionsData from "../components/questions.json";
// import "./QuestionsForm.css";
// import WorldMap from "../components/WorldMap";
// import "../components/WorldMap.css";

// interface Answer {
//   img: string;
//   checked: boolean;
//   label: string;
// }

// interface QuestionsData {
//   climat: Answer[];
//   budget: Answer[];
//   activities: Answer[];
//   environnement: Answer[];
//   people: Answer[];
//   duration: Answer[];
// }

// const questionKeys = [
//   "climat",
//   "budget",
//   "activities",
//   "environnement",
//   "people",
//   "duration",
// ] as const;

// const questionLabels: { [key: string]: string } = {
//   climat: "Quel climat préférez-vous ?",
//   budget: "Quel budget avez-vous ?",
//   activities: "Quelles activités auriez-vous envie de faire ?",
//   environnement: "Vous êtes plutôt ?",
//   people: "Vous voyagez ?",
//   duration: "La durée de votre séjour ?",
// };

// interface Country {
//   name: string;
//   id: string;
//   climat: { type: string[] };
//   environnement: { type: string[] };
//   budget: { type: string[] };
//   activities: string[];
//   image: { href: string; alt: string };
// }

// const QuestionsForm: React.FC = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState<{
//     [key: string]: string[];
//   }>({});
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [highlightedCountries, setHighlightedCountries] = useState<string[]>(
//     []
//   );

//   const currentQuestionKey = questionKeys[currentQuestionIndex];
//   const currentQuestionData =
//     questionsData[currentQuestionKey as keyof QuestionsData];
//   const currentQuestionLabel = questionLabels[currentQuestionKey];

//   useEffect(() => {
//     document.body.className = "body-QuestionsForm";
//     return () => {
//       document.body.className = "body-QuestionsForm";
//     };
//   }, []);

//   useEffect(() => {
//     fetch("http://localhost:3310/api/countries")
//       .then((response) => response.json())
//       .then((data: { [key: string]: Country }) => {
//         const countryArray = Object.values(data);
//         setCountries(countryArray);
//       })
//       .catch((error) => {
//         console.error("Error fetching countries:", error);
//       });
//   }, []);

//   useEffect(() => {
//     const updatedHighlightedCountries = countries
//       .filter((country) => {
//         let matchScore = 0;

//         if (
//           selectedAnswers.climat?.some((climat) =>
//             country.climat.type.includes(climat)
//           )
//         ) {
//           matchScore++;
//         }

//         if (
//           selectedAnswers.budget?.some((budget) =>
//             country.budget.type.includes(budget)
//           )
//         ) {
//           matchScore++;
//         }

//         if (
//           selectedAnswers.activities?.some((activities) =>
//             country.activities.includes(activities)
//           )
//         ) {
//           matchScore++;
//         }

//         if (
//           selectedAnswers.environnement?.some((env) =>
//             country.environnement.type.includes(env)
//           )
//         ) {
//           matchScore++;
//         }

//         return matchScore >= 1;
//       })
//       .map((country) => country.id);

//     setHighlightedCountries(updatedHighlightedCountries);
//   }, [selectedAnswers, countries]);

//   const handleAnswerChange = (questionKey: string, answerLabel: string) => {
//     setSelectedAnswers((prevAnswers) => {
//       const answersForCurrentQuestion = prevAnswers[questionKey] || [];

//       const updatedAnswersForCurrentQuestion =
//         answersForCurrentQuestion.includes(answerLabel)
//           ? answersForCurrentQuestion.filter((answer) => answer !== answerLabel)
//           : [...answersForCurrentQuestion, answerLabel];

//       return {
//         ...prevAnswers,
//         [questionKey]: updatedAnswersForCurrentQuestion,
//       };
//     });
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questionKeys.length - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   return (
//     <div className="questions-form-container">
//       <div className="map-container">
//         <WorldMap highlightedCountries={highlightedCountries} />
//       </div>
//       <div className="form-container">
//         <div className="checkbox-container">
//           <form className="form">
//             <fieldset>
//               <h2>{currentQuestionLabel}</h2>
//               <div className="options-container">
//                 {currentQuestionData.map((option) => (
//                   <div
//                     key={`${currentQuestionKey}-${option.label}`}
//                     className="option-wrapper"
//                   >
//                     <input
//                       className="questions show"
//                       type="checkbox"
//                       id={option.label}
//                       name={currentQuestionKey}
//                       checked={
//                         selectedAnswers[currentQuestionKey]?.includes(
//                           option.label
//                         ) || false
//                       }
//                       onChange={() =>
//                         handleAnswerChange(currentQuestionKey, option.label)
//                       }
//                     />
//                     <label htmlFor={option.label} className="option-label">
//                       <img
//                         src={`./img/${option.img}`}
//                         alt={option.label}
//                         className="option-image"
//                       />
//                       <div>{option.label}</div>
//                     </label>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 className="validate"
//                 type="button"
//                 onClick={handleNextQuestion}
//                 style={{ marginTop: "20px" }}
//               >
//                 Valider
//               </button>
//             </fieldset>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionsForm;
