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
    name: "Submit your Project",
  },
  {
    path: "/login",
    name: "Login and view your progress",
  },
];

function Navbar() {
  return (
    <div className="Navbar">
      {links.map((link) => (
        <a href={link.path}>{link.name}</a>
      ))}
    </div>
  );
}

export default Navbar;
