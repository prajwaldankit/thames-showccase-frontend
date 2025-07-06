import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getTeamById } from "../../../api/teams";

function ProjectDetails() {
	const params = useParams();

	const [project, setProject] = useState(null);

	useEffect(() => {
		getTeamById(params.id).then((res) => setProject(res));
	});

	return (
		<div>
			<h1>Project Details</h1>
			{project ? project.name : "Loading..."}
		</div>
	);
}

export default ProjectDetails;
