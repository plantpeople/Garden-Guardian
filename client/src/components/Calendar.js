import React from "react";
import Day from "./Day";

// props:
// - willRain
// - shouldWater
// - dayNumber (day of week)

const Calendar = (props) => {
  // Display the next 10 days relative to today
  let n = 10;
  let odds = 0.3;
  const rainDays = [];
  while (n > 0) {
    rainDays.push(Math.random() < odds);
    n--;
  }
  const today = 1;
  var day = 1;
  var daysUntil = props.waterDays;
  var daysArray = [];
  var shouldWater = false;

  while (day < 11) {
    let willRain = rainDays[day];
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

  return <div>{daysArray}</div>;
};

export default Calendar;
