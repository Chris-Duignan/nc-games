import { useState, useEffect } from "react";
import { fetchCategories } from "../api";

const SortForm = ({ setSearchParams }) => {
  const sortTerms = ["created_at", "comment_count", "votes"];
  const order = ["desc", "asc"];

  const [categories, setCategories] = useState([{slug: "all reviews"}]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState({category: "all reviews", sort_by: "created_at", order: "desc"});

  useEffect(() => {
    setIsLoading(true);
    fetchCategories().then((categories) => {
      setCategories(currCategories => [...currCategories, ...categories]);
      setIsLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setSearchTerm({ ...searchTerm, [event.target.name]: event.target.value });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setSearchTerm({sort_by: "created_at", order: "desc"});
    setSearchParams();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams(searchTerm);
  };

  if (isLoading) return <h3>Loading ...</h3>;
  return (
    <form onSubmit={handleSubmit} className="sortForm">
      <label>
        Category:
        <select
          name="category"
          id="category"
          onChange={handleChange}
          value={searchTerm.category}
        >
          {categories.map((category) => (
            <option key={category.slug} name="category" value={category.slug}>
              {category.slug}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sort By:
        <select
          name="sort_by"
          id="sort_by"
          onChange={handleChange}
          value={searchTerm.sort_by}
        >
          {sortTerms.map((term) => (
            <option key={term} name="sort_by" value={term}>
              {term}
            </option>
          ))}
        </select>
      </label>
      <label>
        Order:
        <select
          name="order"
          id="order"
          onChange={handleChange}
          value={searchTerm.order}
        >
          {order.map((direction) => (
            <option key={direction} name="order" value={direction}>
              {direction}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleReset}>Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SortForm;
