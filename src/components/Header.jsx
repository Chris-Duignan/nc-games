import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header center">
      <Link to="/">
        <h1 className="title">Board Games Galore</h1>
      </Link>
    </header>
  );
};



export default Header;
