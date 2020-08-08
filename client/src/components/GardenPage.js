import React, { useState, useLayoutEffect } from "react";
import PlantCard from "./PlantCard";
import Calendar from "./Calendar";
import API from "../util/API";
import "../index.css";
const GardenPage = (props) => {
  const [plantsArray, setPlantsArray] = useState(props.plantsArray);
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [rainDays, setRainDays] = useState([]);
  console.log("plants array", props.plantsArray, plantsArray);
  const getWeather = () => {
    console.log("getWeather called");
    API.getWeather(53202)
      .then((response) => {
        setRainDays(response.data);
        setWeatherLoaded(true);
      })
      .catch(console.log);
  };

  useLayoutEffect(getWeather, []);

  const deletePlant = (plant) => {
    API.deletePlant(plant.id).then((res) => {
      setPlantsArray(plantsArray.filter((e) => e.id !== plant.id));
    });
  };
  const plantCards = plantsArray.map((plant) => (
    <PlantCard
      plant={plant}
      garden={true}
      handleClick={() => console.log("button clicked")}
      key={plant.id}
      button1={{
        name: "Delete Plant",
        handler: () => deletePlant(plant),
      }}
      button2={{
        name: "Move to Likes",
        handler: () => console.log(plant, false),
      }}
    />
  ));

  return (
    <div className="myGarden">
      <div>
        <div className="plants">{plantCards}</div>
        {/* Create a Calendar w/ water data from all plants in My Garden */}
        {weatherLoaded && (
          <Calendar plantsArray={plantsArray} rainDays={rainDays} />
        )}
      </div>
    </div>
  );
};

export default GardenPage;
