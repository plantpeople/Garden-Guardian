import React from "react";

const SearchResults = (props) => {
  const{plants} = props
const plantNames = plants.map(e => (<p>{e}</p>))

  return <div>{plantNames}</div>;

};

export default SearchResults;
