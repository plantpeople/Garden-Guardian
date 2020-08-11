import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import Calendar from "./Calendar";
import API from "../util/API";
import "../index.css";

const LikedPage = (props) => {
  console.log(props.plantsArray);
  const [plantsArray, setPlantsArray] = useState(props.plantsArray);
  useEffect(() => {
    setPlantsArray(props.plantsArray);
  });

  const plantCards = plantsArray.map((plant) => (
    <PlantCard
      plant={plant}
      garden={false}
      handleClick={() => console.log("button clicked")}
      key={plant.id}
      button1={{
        name: "Delete Plant",
        handler: () => props.deletePlant(plant),
      }}
      button2={{
        name: "Move to Garden",
        handler: () => props.movePlant(plant),
      }}
    />
  ));

  return (
    <div className="myGarden">
      <h1 className="logo-1">Likes Page</h1>
      <div>
        <div className="plants">{plantCards}</div>
      </div>
    </div>
  );
};

export default LikedPage;
