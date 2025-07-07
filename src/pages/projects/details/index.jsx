import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getProjectById } from "../../../api/projects";

function ProjectDetails() {
	const params = useParams();

	const [project, setProject] = useState(null);

	useEffect(() => {
		getProjectById(params.id).then((res) => setProject(res));
	}, [params.id]);

	return (
		<div>
			<h1>Project Details</h1>
			{project ? project.name : "Loading..."}
		</div>
	);
}

export default ProjectDetails;
