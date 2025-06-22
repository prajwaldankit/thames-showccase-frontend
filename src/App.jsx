import Projects from "./pages/projects";
import Teams from "./pages/teams";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </>
  );
}

export default App;
