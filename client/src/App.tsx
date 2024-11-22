import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";
import "./pages/Contact.css";
import { useEffect } from "react";
import "./BackgroundStyles.css";

function App() {
  useEffect(() => {
    // Set a default background on app load
    document.body.className = "body-default";
  }, []);
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
