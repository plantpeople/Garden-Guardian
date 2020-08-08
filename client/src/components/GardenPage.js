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
        setRainDays(response.data);
        setWeatherLoaded(true);
      })
      .catch(console.log);
  };

  useLayoutEffect(getWeather, []);

  const plantCards = plantsArray.map((plant) => (
    <PlantCard
      plant={plant}
      garden={true}
      handleClick={() => console.log("button clicked")}
      key={plant.id}
      button1={{ name: "Save Plant", handler: () => console.log(plant, true) }}
      button2={{ name: "Like Plant", handler: () => console.log(plant, false) }}
    />
  ));

  return (
    <div className="myGarden">
      <div>
        <div className="plants">{plantCards}</div>
        {/* Create a Calendar w/ water data from all plants in My Garden */}
        {weatherLoaded ? (
          <Calendar plantsArray={plantsArray} rainDays={rainDays} />
        ) : null}
      </div>
    </div>
  );
};

export default GardenPage;
