import { Link } from "react-router-dom";

const Option = ({ option }) => {
  return (
    <li>
      <Link className="dropdownOption" key={option} to={`/categories/${option}`}>
        {option}
      </Link>
    </li>
  );
};

export default Option;
