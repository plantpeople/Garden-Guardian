import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import Calendar from "./Calendar";
import API from "../util/API";
import "../index.css";


const LikedPage = (props) => {
  console.log(props.plantsArray)
    const [plantsArray, setPlantsArray] = useState(props.plantsArray);
    useEffect(()=>{
      setPlantsArray(props.plantsArray)
   
    })



  const deletePlant = (plant) => {
    API.deletePlant(plant.id).then((res) => {
      setPlantsArray(plantsArray.filter((e) => e.id !== plant.id));
    });
  };
  const plantCards = plantsArray.map((plant) => (
    <PlantCard
      plant={plant}
      garden={false}
      handleClick={() => console.log("button clicked")}
      key={plant.id}
      button1={{
        name: "Delete Plant",
        handler: () => deletePlant(plant),
      }}
      button2={{
        name: "Move to Garden",
        handler: () => props.movePlant(plant),
      }}
    />
  ));

  return (
    <div className="myGarden">
      <div>
        <div className="plants">{plantCards}</div>
      
      </div>
    </div>
  ); 
}

export default LikedPage;