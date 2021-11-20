import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const history = useHistory();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    history.push(
      `/?${new URLSearchParams({
        ...(searchTerm ? { searchTerm } : {}),
      })}`
    );
  };

  return (
    <div className="SearchBarContainer">
      <form className="SearchBar" onSubmit={submitHandler}>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
