import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import QuestionsForm from "./components/QuestionsForm";
import "./App.css";

function App() {
  return (

    <div className="App">
      <QuestionsForm />
      <div>
        <div className="Worldmap">
          <Map />
        </div>
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
