import React from "react";

const Day = (props) => {
  // Create array to hold JSX partials for plants
  var plantItems = [];

  // Loop through array to create JSX partial for each plant
  props.plantWaterArray.forEach((plant) => {
    plantItems.push(
    <div>
      <p>Name: {plant.name}</p>
      <p>Water today? {plant.shouldWaterArray[props.day]}</p>
    </div>);
  })

  return (
    <div>
      <div className="day">
        <h1>{props.day}</h1>
        <div className="water-info">
          <p>{props.willRain ? "rained" : "didnt rain"}</p>

          {/* For each plant in the plantWaterArray...
                - Display plant name
                - Display whether or not plant should be watered that day */}

              <p>{plantItems}</p>
        </div>
      </div>
    </div>
  );
};

export default Day;
