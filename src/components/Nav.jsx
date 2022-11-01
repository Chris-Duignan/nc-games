import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../api";
import Expandable from "./Expandable";
import Option from "./Option";

const Nav = () => {
  const tag = "Categories";
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCategories().then((categories) => {
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h3>Loading ...</h3>;
  else
    return (
      <nav className="nav">
        <ul className="navList">
          <Link to="/">Home</Link>
          <Expandable className="dropdown" tag={tag}>
            {categories.map((category) => {
              return <Option className="dropdownOption" option={category.slug} />;
            })}
          </Expandable>
        </ul>
      </nav>
    );
};

export default Nav;
