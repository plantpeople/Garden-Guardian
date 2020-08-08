import React from "react";

const Day = (props) => {
  // Create array to hold JSX partials for plants
  var plantItems = [];

  // Loop through array from props to create JSX partial for each plant
  props.plantWaterArray.forEach((plant) => {
    plantItems.push(
      // Make sure each partial has a unique key to satisfy React's reqs
      <div key={plant.name}>
        <p>Name: {plant.name}</p>
        <p>Water today? {plant.shouldWaterArray[props.day] ? "yes" : "no"}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="day">
        <h1>{props.day}</h1>
        <div className="water-info">
          <p>{props.willRain ? "rained" : "didnt rain"}</p>
          <div>{plantItems}</div>
        </div>
      </div>
    </div>
  );
};

export default Day;
