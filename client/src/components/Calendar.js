import React, { useEffect } from "react";
import Day from "./Day";
import API from "../util/API";

const Calendar = (props) => {
  const rainDays = props.rainDays;

  var day = 0;
  var daysArray = [];
  var shouldWater = false;

  // Grab plantsArray from props
  var plantsArray = props.plantsArray;

  // Create a new array to hold water data for each plant
  var plantWaterArray = [];

  // Loop through plantsArray and get water data for each plant for each day
  plantsArray.forEach((plant) => {
    // Create a new array to hold whether or not plant should be watered on each day
    var shouldWaterArray = [];

    // Grab how many days there currently are until plant needs to be watered
    // This is based on # of times to water per week that user chose in dropdown
    var daysUntil = plant.waterDays;

    // Loop through 8 days
    while (day < 8) {
      // Grab whether or not it will rain on this day
      let willRain = rainDays[day];

      // If it will rain on this day...
      if (willRain) {
        // Reset the # of days there are until the plant needs to be watered
        daysUntil = plant.waterDays;
      }

      // If there are 0 days left until plant needs to be watered...
      if (daysUntil === 0) {
        // Indicate that the plant should be watered...
        shouldWater = true;

        // ...unless it will rain tomorrow, then...
        if (rainDays[day + 1]) {
          // ...indicate that the plant should not be watered.
          shouldWater = false;
        }

        // Reset the # of days there are until the plant needs to be watered
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
        willRain={rainDays[day]}
        plantWaterArray={plantWaterArray}
      />
    );

    day++;
  }

  return <div className="calendar">{daysArray}</div>;
};

export default Calendar;
