import React, { useState } from "react";
import API from "../util/API";
import "../index.css";

const PlantCard = (props) => {
  const {
    button1,
    button2,
    garden,
    search,
    liked,
    loggedIn,
    handleClick,
    days,
  } = props;

  const [waterDays, setWaterDays] = useState(props.plant.waterDays);

  return (
    <div className="card-container">
      <div className="card">
        <div className="img-container">
          {/* TODO: Figure out a good way to resize images to fit card */}
          <img name={props.name} src={props.plant.image} alt="plant" />
        </div>

        <div className="content">
          <p>
            <strong> Name: {props.plant.name} </strong>
          </p>
          <button onClick={button1.handler}>{button1.name}</button>
          <button onClick={button2.handler}>{button2.name}</button>

          {garden ? (
            <div>
              <span>Water this</span>
              <select
                value={waterDays}
                onChange={(event) => {
                  setWaterDays(event.target.value);
                  // Update the plant in the database when water days dropdown is changed
                  const updatedPlant = { ...props.plant };
                  updatedPlant.waterDays = event.target.value;
                  API.updatePlant(updatedPlant);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </select>
              <span>times per week</span>
            </div>
          ) : null}

          {/* <strong> Name: </strong> {props.name}
          </p>
          <button className="add-btn" onClick={() => props.addToGarden(props.name, props.imageUrl)}>
            Add to my garden
          </button>*/}
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
