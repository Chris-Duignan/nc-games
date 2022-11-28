const SortForm = ({searchTerm, handleSubmit, handleReset, handleChange}) => {

  const sortTerms = ["created_at", "comment_count", "votes"]
  const order = ["desc", "asc"]
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
      <button onClick={handleReset}>Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SortForm;
