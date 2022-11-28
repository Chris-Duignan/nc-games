import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navBar">
      <ul className="navList center">
        <li className="navListItem center">
          <Link to="/reviews" className="link navListItem center">
            <p>All Reviews</p>
          </Link>
        </li>
        <li className="navListItem center">
          <Link to="/categories" className="link navListItem center">
            <p>Categories</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
