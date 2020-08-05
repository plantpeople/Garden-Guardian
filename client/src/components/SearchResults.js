import React from "react";
import "../index.css"

const SearchResults = (props) => {
  const{plants} = props
const plantNames = plants.map(e => (<p>{e}</p>))

  return <div>{plantNames}</div>;

};

export default SearchResults;
