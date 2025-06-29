import "./style.css";

function ProjectCard({ project }) {
	return (
		<div className="ProjectCard">
			<h1 className="ProjectCard__Title">{project.title}</h1>
			<div className="ProjectCard__Image">
				<img src={project.image} alt="" />
			</div>
			<div className="ProjectCard__Description">
				<p>
					<span>Genre:</span> {project.genre}
				</p>
				<p>
					<span>Team:</span> {project.team}
				</p>
			</div>
		</div>
	);
}

export default ProjectCard;
