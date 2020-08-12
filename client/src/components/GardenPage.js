import React, { useState, useLayoutEffect, useEffect } from "react";
import PlantCard from "./PlantCard";
import Calendar from "./Calendar";
import API from "../util/API";
import "../index.css";

const GardenPage = (props) => {
  const [plantsArray, setPlantsArray] = useState(props.plantsArray);
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [weatherArray, setweatherArray] = useState([]);

  const getWeather = () => {
    console.log("getWeather called");
    API.getWeather(53202)
      .then((response) => {
        setweatherArray(response.data);
        setWeatherLoaded(true);
      })
      .catch(console.log);
  };
  useEffect(() => {
    setPlantsArray(props.plantsArray);
  });

  var precipArray = [];

  weatherArray.forEach((day) => {
    if (day.weather === "Rain") {
      precipArray.push(true);
    } else {
      precipArray.push(false);
    }
  });

  useLayoutEffect(getWeather, []);

  const plantCards = plantsArray.map((plant) => (
    <PlantCard
      plant={plant}
      garden={true}
      handleClick={() => console.log("button clicked")}
      key={plant.id}
      button1={{
        name: "Delete Plant",
        handler: () => props.deletePlant(plant),
      }}
      button2={{
        name: "Move to Likes",
        handler: () => props.movePlant(plant),
      }}
      addNote={props.addNote}
    />
  ));

  return (
    <div className="myGarden">
      <h1 className="logo-1">My Garden</h1>
      <div>
        <div className="plants">{ plantCards.length ? plantCards: <h2>Add your first plant!</h2>} 
       </div>
        {/* Create a Calendar w/ water data from all plants in My Garden */}
        {weatherLoaded && (
          <Calendar
            plantsArray={plantsArray}
            weatherArray={weatherArray}
            precipArray={precipArray}
          />
        )}
      </div>
    </div>
  );
};

export default GardenPage;
