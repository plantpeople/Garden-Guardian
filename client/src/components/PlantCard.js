import React, { useState } from "react";
import "../index.css";

const PlantCard = (props) => {
  const { garden, search, saved, handleClick, days } = props;
  const [waterDays, setWaterDays] = useState(days);

  let buttonName;
  if (garden) {
    buttonName = "Remove from My Garden";
  } else if (search) {
    buttonName = "Add to Saved";
  } else if (saved) {
    buttonName = "Remove from Saved";
  }

  return (
    <div>
      <div className="card">
        <div className="img-container">
          {/* TODO: Figure out a good way to resize images to fit card */}
          <img
            src="https://bs.floristic.org/image/o/c6e885c91752dde563029b0a6d1448ecc4ca19ca"
            alt="plant"
          />
        </div>

        <div className="content">
          <p>
            <strong> Name: {props.name} </strong>
          </p>
          <button onClick={handleClick}>{buttonName}</button>
          <div>
            <span>Water this</span>
            <select
              value={waterDays}
              onChange={(event) => {
                setWaterDays(event.target.value);
                // TODO update plant in database
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
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
