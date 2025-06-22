import TeamCard from "../../components/TeamCard";
import "./style.css";
const dummyData = [
  {
    name: "Team 1",
    image: "https://placehold.jp/150x150.png",
    members: "Mugiwara, ZOro, Sanji",
  },
  {
    name: "Team 2",
    image: "https://placehold.jp/150x150.png?text=Team",
    members: "Straw Hats",
  },
  {
    name: "Team 3",
    image: "https://placehold.jp/150x150.png?text=Team",
    members: "Skynet",
  },
  {
    name: "Team 4",
    image: "https://placehold.jp/150x150.png?text=Team",
    members: "FitCoders",
  },
  {
    name: "Team 5",
    image: "https://placehold.jp/150x150.png?text=Team",
    members: "Solo Dev",
  },
];

function Teams() {
  return (
    <div className="Teams">
      {dummyData.map((team) => (
        <TeamCard team={team} />
      ))}
    </div>
  );
}

export default Teams;
