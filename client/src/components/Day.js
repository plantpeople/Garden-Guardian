import React from "react";

const Day = (props) => {
  return (
    <div>
      <h1>{props.day}</h1>
      <p>{props.willRain ? "rained" : "didnt rain"}</p>
      <p>{props.shouldWater ? "should water" : "dont water"}</p>
    </div>
  );
};

export default Day;
