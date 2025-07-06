import { useEffect, useState } from "react";
import TeamCard from "../../components/TeamCard";
import "./style.css";
import { getAllTeams } from "../../api/teams";

function Teams() {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		getAllTeams().then((res) => setTeams(res));
	}, []);

	return (
		<div className="Teams">
			{teams.map((team) => (
				<TeamCard key={team._id} team={team} />
			))}
		</div>
	);
}

export default Teams;
