import React from "react";
import PlantCard from "./PlantCard";

const GardenPage = (props) => {
  let { plantsArray } = props;
  // plantsArray = [{ name: "plant 1" }, { name: "plant 2" }, { name: "plant 3" }];

  const plantCards = plantsArray.map((plant) => (
    <PlantCard
      garden={true}
      handleClick={() => console.log("button clicked")}
      days={plant.waterDays}
      key={plant.name}
      name={plant.name}
    />
  ));

  return <div>{plantCards}</div>;
};

export default GardenPage;
