import React from "react";

const Day = (props) => {
  // Create array to hold JSX partials for plants
  var plantItems = [];
  var table = <table></table>
  var tableRow 

  // Loop through array from props to create JSX partial for each plant
  props.plantWaterArray.forEach((plant) => {
    plantItems.push(
      // Make sure each partial has a unique key to satisfy React's reqs
    
      <tr key={plant.name} >
        <td>{plant.name}</td>
        <td>{plant.shouldWaterArray[props.day] ? <img className="water" src="https://s.pngkit.com/png/small/10-100968_raindrop-clipart-raindrop-clipart-transparent-background.png"/> : <img className="water" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Stop.svg/1200px-Stop.svg.png"/> }
        </td>
     </tr>
    );
  });

  return (
    <div>
      <div className="day">
        <h1>{props.day}</h1>
        <div className="water-info">
          <p>{props.willRain ? "rained" : "didnt rain"}</p>
          <table>
        {plantItems}</table>
        </div>
      </div>
    </div>
  );
};

export default Day;
