import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../api";

const Nav = () => {
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
          <li>Home</li>
          <li>Reviews</li>
          {categories.map((category) => {
            return <Link key={category.slug} to={`/categories/${category.slug}`}>{category.slug}</Link>
          })}
        </ul>
      </nav>
    );
};

export default Nav;
