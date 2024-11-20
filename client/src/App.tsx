import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import QuestionsForm from "./components/QuestionsForm";
import About from "./pages/About";


import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Checkbox />
        <About />
        <main style={{ paddingTop: "2rem" }}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
