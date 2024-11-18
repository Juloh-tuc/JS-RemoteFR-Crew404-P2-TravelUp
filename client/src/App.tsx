import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <main style={{ paddingTop: "2rem" }}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
