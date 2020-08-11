import React, { useEffect } from "react";
import Day from "./Day";
import API from "../util/API";

const Calendar = (props) => {
  var day = 0;
  var daysArray = [];
  var shouldWater = false;

  // Create a new array to hold water data for each plant
  var plantWaterArray = [];

  // Grab array of plants in My Garden and days it will rain this week from props
  const precipArray = props.precipArray;
  console.log(props.precipArray);
  var plantsArray = props.plantsArray;
  var weatherArray = props.weatherArray;
  console.log(weatherArray);
  // Loop through plantsArray and get water data for each plant for each day
  plantsArray.forEach((plant) => {
    // Create a new array to hold whether or not plant should be watered on each day
    var shouldWaterArray = [];

    // Grab how many days there currently are until plant needs to be watered
    // This is based on # of times to water per week that user chose in dropdown
    var daysUntil = plant.waterDays;

    // Loop through 8 days
    while (day < 8) {
      // Reset shouldWater indicator
      shouldWater = false;

      // Decrement # of days until plant needs to be watered
      daysUntil--;

      // Grab whether or not it will rain on this day
      let willRain = precipArray[day];

      // If it will rain on this day...
      if (willRain) {
        // Reset # of days until the plant needs to be watered
        daysUntil = plant.waterDays;
      }

      // If there are 0 days left until plant needs to be watered...
      if (daysUntil === 0) {
        // Indicate that the plant should be watered
        shouldWater = true;

        // Reset # of days until plant needs to be watered
        daysUntil = plant.waterDays;
      }

      // Add whether the plant should be watered on this day to the array
      shouldWaterArray.push(shouldWater);

      // Increment day to continue on in the while loop
      day++;
    }

    // Create an object to hold plant data
    var plantData = {
      name: plant.name,
      shouldWaterArray,
    };

    // Push plant data object to plantWaterArray
    plantWaterArray.push(plantData);

    // Reset day counter
    day = 0;
  });

  // Reset day counter
  day = 0;

  // Loop through 8 days
  while (day < 8) {
    // Create an array of Days components to build the Calendar
    daysArray.push(
      <Day
        key={day}
        day={day}
        weatherArray={weatherArray[day]}
        plantWaterArray={plantWaterArray}
      />
    );

    // Increment day to continue on in the while loop
    day++;
  }

  return <div className="calendar">{daysArray}</div>;
};

export default Calendar;
