import "./style.css";

function TeamCard({ team }) {
	return (
		<div className="TeamCard">
			<h1 className="TeamCard__Title">{team.name}</h1>
			<div className="TeamCard__Image">
				<img src={team.image} alt="" />
			</div>
			<div className="TeamCard__Description">
				<p>
					<span>Members:</span> {team.members}
				</p>
			</div>
		</div>
	);
}

export default TeamCard;
