import { useLocation } from "react-router";
import "./style.css";

const links = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/teams",
		name: "Teams",
	},
	{
		path: "/submit",
		name: "Create project",
	},
	{
		path: "/team-register",
		name: "Register team",
	},
];

function Navbar() {
	const location = useLocation();

	return (
		<div className="Navbar">
			{links.map((link) => (
				<div
					key={link.path}
					className={`Navbar__link ${
						location.pathname === link.path ? "--active" : ""
					}`}
				>
					<a href={link.path}>{link.name}</a>
				</div>
			))}
		</div>
	);
}

export default Navbar;
