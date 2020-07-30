import React from "react";
import PlantCard from "./PlantCard";
import Calendar from "./Calendar";

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

  return (
    <div>
      <div className="my-garden">
        <div className="plants">{plantCards}</div>
        <Calendar waterDays={plantsArray[0].waterDays} />
      </div>
    </div>
  );
};

export default GardenPage;
