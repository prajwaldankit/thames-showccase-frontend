import { Routes, Route } from "react-router";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/projects/details";
import Teams from "./pages/teams";
import Navbar from "./components/Navbar";
import CreateProjectForm from "./components/forms/CreateProjectForm";
import CreateTeamForm from "./components/forms/CreateTeamForm";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Projects />} />
				<Route path="/teams" element={<Teams />} />
				<Route path="/submit" element={<CreateProjectForm />} />
				<Route path="/projects/:id" element={<ProjectDetails />} />
				<Route path="/team-register" element={<CreateTeamForm />} />
			</Routes>
		</>
	);
}

export default App;
