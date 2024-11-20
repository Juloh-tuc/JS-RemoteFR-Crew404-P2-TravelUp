import Checkbox from "./components/Checkbox";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import QuestionsForm from "./components/QuestionsForm";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <QuestionsForm />

      <div>
        <NavBar />
        <Checkbox />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
