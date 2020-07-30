import React from "react";

const Day = (props) => {
  return (
    <div>
      <div className="day">
        <h1>{props.day}</h1>
        <div className="water-info">
          <p>{props.willRain ? "rained" : "didnt rain"}</p>
          <p>{props.shouldWater ? "should water" : "dont water"}</p>
        </div>
      </div>
    </div>
  );
};

export default Day;
