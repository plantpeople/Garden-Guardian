import React from "react";

const SearchBar = (props) => {
  const { value, handleInputChange, handleSearch } = props;
  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
