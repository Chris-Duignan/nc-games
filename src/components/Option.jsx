import { Link } from "react-router-dom";

const Option = ({ option }) => {
  return (
    <li>
      <Link key={option} to={`/categories/${option}`}>
        {option}
      </Link>
    </li>
  );
};

export default Option;
