import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";
import "./pages/Contact.css";

function App() {
  return (
    <div className="App">
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
