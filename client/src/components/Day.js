import React from "react";

const Day = (props) => {
  // Create array to hold JSX partials for plants
  var plantItems = [];
  var weatherImg = "";

  var today = "" + new Date(props.weatherArray.date * 1000);

  switch (props.weatherArray.weather) {
    case "Rain":
      weatherImg =
        "https://cdn3.iconfinder.com/data/icons/weather-16/256/Rainy_Day-512.png";
      break;

    case "Clouds":
      weatherImg =
        "https://img2.pngio.com/cloud-cloudy-mostly-partly-sun-sunny-weather-icon-sunny-and-cloudy-png-512_512.png";
      break;

    case "Clear":
      weatherImg =
        "https://www.pinclipart.com/picdir/middle/41-414567_simple-weather-icons-sunny-sunny-weather-icon-png.png";
      break;
  }

  // Loop through array from props to create JSX partial for each plant
  props.plantWaterArray.forEach((plant) => {
    plantItems.push(
      // Make sure each partial has a unique key to satisfy React's reqs

      <tr key={plant.name}>
        <td>{plant.name}</td>
        <td>
          {plant.shouldWaterArray[props.day] ? (
            <img
              className="water"
              src="https://s.pngkit.com/png/small/10-100968_raindrop-clipart-raindrop-clipart-transparent-background.png"
            />
          ) : (
            <img
              className="water"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Stop.svg/1200px-Stop.svg.png"
            />
          )}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="day">
        <h1>{today.substring(0, 10)}</h1>
        <div className="water-info">
          <img className="weather-icon" src={weatherImg} alt="weather icon" />
          <table>
            <tbody>{plantItems}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Day;
