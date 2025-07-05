import { getAllProjects } from "../../api/projects";
import ProjectCard from "../../components/ProjectCard";
import "./style.css";
const dummyData = [
	{
		title: "Weather App",
		image: "https://placehold.jp/150x150.png",
		genre: "Webdev",
		team: "Mugiwara",
	},
	{
		title: "E-commerce Site",
		image: "https://placehold.jp/150x150.png?text=E-Comm",
		genre: "Frontend",
		team: "Straw Hats",
	},
	{
		title: "AI Chatbot",
		image: "https://placehold.jp/150x150.png?text=Chatbot",
		genre: "Machine Learning",
		team: "Skynet",
	},
	{
		title: "Fitness Tracker",
		image: "https://placehold.jp/150x150.png?text=Fitness",
		genre: "Mobile App",
		team: "FitCoders",
	},
	{
		title: "Portfolio Website",
		image: "https://placehold.jp/150x150.png?text=Portfolio",
		genre: "Webdev",
		team: "Solo Dev",
	},
];

function Projects() {
	getAllProjects();
	return (
		<div className="Projects">
			{dummyData.map((project) => (
				<ProjectCard key={project.image} project={project} />
			))}
		</div>
	);
}

export default Projects;
