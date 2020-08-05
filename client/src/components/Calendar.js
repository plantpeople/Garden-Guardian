import React, { useEffect } from "react";
import Day from "./Day";
import API from "../util/API";

// props:
// - willRain
// - shouldWater
// - dayNumber (day of week)

const Calendar = (props) => {
  const rainDays = props.rainDays;
  console.log("rainDays:",rainDays)
  // Display the next 10 days relative to today
  let n = 10;
  let odds = 0.3;

  // while (n > 0) {
  //   rainDays.push(Math.random() < odds);
  //   n--;
  // }

  var day = 0;
  var daysUntil = props.waterDays;
  var daysArray = [];
  var shouldWater = false;

  while (day < 8) {
    let willRain = rainDays[day];
    console.log("willRain: ",willRain)
    daysArray.push(
      <Day key={day} day={day} willRain={willRain} shouldWater={shouldWater} />
    );
    shouldWater = false;
    if (willRain) {
      daysUntil = props.waterDays;
    }
    daysUntil--;
    if (daysUntil === 0) {
      shouldWater = true; 
      if (rainDays[day + 1]) {
        shouldWater = false;
      }
      daysUntil = props.waterDays;
    }

    day++;
  }

  return <div className="calendar">{daysArray}</div>;
};

export default Calendar;
