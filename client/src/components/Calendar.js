import React from "react";
import Day from "./Day";

// props:
// - willRain
// - shouldWater
// - dayNumber (day of week)

const Calendar = (props) => {
  // Display the next 10 days relative to today
  const today = 1;
  var day = 1;
  var daysUntil = props.waterDays;
  var daysArray = [];
  var shouldWater = false;

  while (day < 11) {
    daysArray.push(<Day day={day} shouldWater={shouldWater} />);
    shouldWater = false;
    daysUntil--;

    if (daysUntil === 0) {
      shouldWater = true;
      daysUntil = props.waterDays;
    }

    day++;
  }

  return <div>{daysArray}</div>;
};

export default Calendar;
