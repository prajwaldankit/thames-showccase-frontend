import { useEffect, useState } from "react";
import { getAllProjects } from "../../api/projects";
import ProjectCard from "../../components/ProjectCard";
import "./style.css";

function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getAllProjects().then((res) => setProjects(res));
	}, []);

	return (
		<div className="Projects">
			{projects.map((project) => (
				<ProjectCard key={project.image} project={project} />
			))}
		</div>
	);
}

export default Projects;
