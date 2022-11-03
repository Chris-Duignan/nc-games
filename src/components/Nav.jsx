import { Link } from "react-router-dom";


const Nav = () => {
    return (
      <nav className="nav">
        <ul className="navList">
          <Link to="/">Home</Link>
        </ul>
      </nav>
    );
};

export default Nav;
