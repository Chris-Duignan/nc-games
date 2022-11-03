import { useState } from "react";

const SortForm = ({ setSearchParams }) => {
  const sortTerms = ["created_at", "comment_count", "votes"];
  const order = ["asc", "desc"];

  const [searchTerm, setSearchTerm] = useState({
    sort_by: "created_at",
    order: "desc",
  });

  const handleChange = (event) => {
    setSearchTerm({ ...searchTerm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="sortForm">
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default SortForm;
