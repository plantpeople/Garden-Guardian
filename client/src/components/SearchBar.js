import React from "react";
import "../index.css"

const SearchBar = (props) => {
  const { value, handleInputChange, handleSearch } = props;
  return (
    <div className="search-container">
      <input className="search-bar" type="text" value={value} onChange={handleInputChange} />
      <button className="button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
