import { Routes, Route } from "react-router";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/projects/details";
import Teams from "./pages/teams";
import Posts from "./pages/posts";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Projects />} />
				<Route path="/teams" element={<Teams />} />
				<Route path="/submit" element={<Posts />} />
				<Route path="/projects/:id" element={<ProjectDetails />} />
			</Routes>
		</>
	);
}

export default App;
