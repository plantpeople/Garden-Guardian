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
    API.getWeather(90210)
      .then((response) => {
        setRainDays(response.data);
        setWeatherLoaded(true);
      })
      .catch(console.log);
  };

  useLayoutEffect(getWeather, []);

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
    <div className="myGarden">
      <div>
        <div className="plants">{plantCards}</div>
        {/* Create a Calendar w/ water data from all plants in My Garden */}
        {weatherLoaded ? (
          <Calendar
            waterDays={plantsArray[0].waterDays}
            plantsArray={plantsArray}
            rainDays={rainDays}
          />
        ) : null}
      </div>
    </div>
  );
};

export default GardenPage;
