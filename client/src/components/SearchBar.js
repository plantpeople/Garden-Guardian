import React, { useState } from "react";

const SearchBar = (props) => {
  const { value, handleInputChange } = props;
  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
    </div>
  );
};

export default SearchBar;
