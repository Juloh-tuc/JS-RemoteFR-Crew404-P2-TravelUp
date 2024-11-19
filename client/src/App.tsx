import { Outlet } from "react-router-dom";
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
        <main style={{ paddingTop: "2rem" }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
