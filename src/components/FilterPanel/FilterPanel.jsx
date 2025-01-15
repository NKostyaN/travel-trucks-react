// import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./FilterPanel.css";

// const FilterPanel = ({ search, queryValue }) => {
const FilterPanel = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if (value === "") {
      console.log("Nothing to search, you need to enter something");
      return;
    }
    search(value);
    e.target.reset();
  };
  return (
    <div className="filter-block">
      <div className="filter-location">
        <p>Location</p>
      </div>
      <p>Filters</p>
      <div className="filter-equipment">
        <p>Vehicle equipment</p>
        <hr />
      </div>
      <div className="filter-type">
        <p>Vehicle type</p>
        <hr />
      </div>
      <Link to="/catalog">
        <button>Search</button>
      </Link>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="search"
          defaultValue={queryValue}
        />
        <button type="submit">Search</button>
      </form> */}
      {/* <Toaster /> */}
    </div>
  );
};

export default FilterPanel;
