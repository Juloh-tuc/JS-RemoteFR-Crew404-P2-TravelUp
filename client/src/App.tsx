import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";
import "./pages/Contact.css";
import "./BackgroundStyles.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "body-default";

    const knownPaths = ["/", "/about", "/contact", "/quiz"];

    if (location.pathname === "/") {
      document.body.classList.add("body-home");
    } else if (!knownPaths.some((path) => location.pathname.startsWith(path))) {
      document.body.classList.add("body-error");
    }
  }, [location]);

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
