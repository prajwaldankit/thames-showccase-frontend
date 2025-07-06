import { useNavigate } from "react-router";
import "./style.css";

function ProjectCard({ project }) {
	const navigate = useNavigate();
	return (
		<div
			className="ProjectCard"
			onClick={() => navigate(`/projects/${project._id}`)}
		>
			<h1 className="ProjectCard__Title">{project.title}</h1>
			<div className="ProjectCard__Image">
				<img src={project.image} alt="" />
			</div>
			<div className="ProjectCard__Description">
				<p>
					<span>Genres:</span> {project.genre}
				</p>
				<p>
					<span>Team:</span> {project.team}
				</p>
			</div>
		</div>
	);
}

export default ProjectCard;
