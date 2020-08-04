import React from "react";
import PlantCard from "./PlantCard"
import API from "./../util/API"
import SavedPlant from "./SavedPlant";

const SearchResults = (props) => {
  const{plants, savePlant} = props;
  console.log(props);

const plantCards = plants.map((plant) => (
  <PlantCard
    garden={false}
    handleClick={() => savePlant(plant)}
    key={plant.name}
    name={plant.name}
    image={plant.image}
  />
));

  return (
  <div>
  {plantCards}
  </div>
);
};

export default SearchResults;
