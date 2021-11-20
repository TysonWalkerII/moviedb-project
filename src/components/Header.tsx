import { useState } from "react";
import { Link } from "react-router-dom";
import FilterForm from "./FilterForm";
import "./Header.css";
import SearchBar from "./SearchBar";

const Header = () => {
  const [showFilter, setShowFilter] = useState("filters");

  return (
    <div className="Header">
      <div className="HeaderLinks">
        <h1>
          <Link to="/">Movies to chill to</Link>
        </h1>
        <Link to="/watchlist">
          <h2>Watchlist</h2>
        </Link>
      </div>
      <div className="filters">
        <div className="filterHeaders">
          <h2 onClick={() => setShowFilter("filters")}>Filters</h2>
          <h2 onClick={() => setShowFilter("search")}>Search</h2>
        </div>
        {showFilter === "filters" ? <FilterForm /> : <SearchBar />}
      </div>
      {/* <div className="searchBar">
        {showFilter === "search" && <SearchBar />}
      </div> */}
    </div>
  );
};

export default Header;
