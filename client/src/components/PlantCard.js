import React from "react";
import "../index.css";

const PlantCard = (props) => {
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
            <strong> Name: </strong>
          </p>
          <button onClick={() => props.addToGarden()}>Add to my garden</button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
