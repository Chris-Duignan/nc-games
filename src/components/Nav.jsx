import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navBar">
      <ul className="navList center">
        <li className="navListItem center">
          <Link to="/" className="link navListItem center"><h2>Home</h2></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
