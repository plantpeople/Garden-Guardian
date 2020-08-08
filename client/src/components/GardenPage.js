import React, { useState, useLayoutEffect } from "react";
import PlantCard from "./PlantCard";
import Calendar from "./Calendar";
import API from "../util/API";
import "../index.css";
const GardenPage = (props) => {
  const [weatherLoaded, setWeatherLoaded] = useState(false);
  const [rainDays, setRainDays] = useState([]);
  let { plantsArray } = props;
  const getWeather = () => {
    console.log("getWeather called");
    API.getWeather(53202)
      .then((response) => {
        console.log("weather is:", response.data);
        setRainDays(response.data);
        setWeatherLoaded(true);
      })
      .catch(console.log);
  };

  // useLayoutEffect(getWeather, []);

  const plantCards = plantsArray.map((plant) => (
    <PlantCard
      garden={true}
      handleClick={() => console.log("button clicked")}
      days={plant.waterDays}
      key={plant.name}
      name={plant.name}
      button1={{ name: "Save Plant", handler: () => console.log(plant, true) }}
      button2={{ name: "Like Plant", handler: () => console.log(plant, false) }}
    />
  ));

  return (
    <div>
      <div className="my-garden">
        <div className="plants">{plantCards}</div>
        {weatherLoaded ? (
          <Calendar waterDays={plantsArray[0].waterDays} rainDays={rainDays} />
        ) : null}
      </div>
    </div>
  );
};

export default GardenPage;
