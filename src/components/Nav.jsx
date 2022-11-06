import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navBar">
      <ul className="navList center">
        <li className="navListItem center">
          <Link to="/" className="link navListItem center">
            <h2>All Reviews</h2>
          </Link>
        </li>
        <li className="navListItem center">
          <Link to="/categories" className="link navListItem center">
            <h2>Categories</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
