import { useState } from "react";

const SortForm = () => {
  const sortTerms = ["created_at", "comments", "votes"];
  const order = ["asc", "desc"];

  const [searchTerm, setSearchTerm] = useState({
    sort_by: "created_at",
    order: "desc",
  });

  const handleChange = (event) => {
    setSearchTerm({ ...searchTerm, [event.target.name]: event.target.value });
  };

  console.log(searchTerm)

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="sortBar" onSubmit={handleSubmit}>
      <label>
        Sort By:
        <select name="sort_by" id="sort_by" onChange={handleChange}>
          {sortTerms.map((term) => (
            <option key={term} name="sort_by" value={term}>
              {term}
            </option>
          ))}
        </select>
      </label>
      {order.map((o) => {
        return (
          <label key={`label${o}`}>
            {o}
            <input key={o} type="radio" id={o} name="order" value={o} onChange={handleChange}></input>
          </label>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SortForm;
