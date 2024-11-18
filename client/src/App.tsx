import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Questionnaire</h1>
      <QuestionsForm />
      <div>
        <NavBar />
        <main style={{ paddingTop: "2rem" }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
