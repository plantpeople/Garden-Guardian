import React from "react";
import PlantCard from "./PlantCard"
import API from "./../util/API"
import SavedPlant from "./SavedPlant";
import "../index.css"

const SearchResults = (props) => {
  const{plants, savePlant} = props;

const plantCards = plants.map((plant, index) => (
  <PlantCard
  className="resultCard"
    garden={false}
    button1={{name: "Save Plant", handler: ()=>savePlant(plant, true)}}
    button2={{name: "Like Plant", handler: ()=>savePlant(plant, false)}}
    key={index}
    name={plant.name}
    image={plant.image}
  />
));

  return (
  <div className="results">
  {plantCards}
  </div>
);
};

export default SearchResults;
