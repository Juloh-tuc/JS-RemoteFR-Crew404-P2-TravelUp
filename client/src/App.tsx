import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import QuestionsForm from "./components/QuestionsForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <QuestionsForm />
      <div>
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
