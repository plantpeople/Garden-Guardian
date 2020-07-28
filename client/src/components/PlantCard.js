import React from "react";
import "../index.css";

const PlantCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="img-container">
          {/* TODO: Figure out a good way to resize images to fit card */}
          <img name={props.name} src={props.imageUrl} alt="plant" />
        </div>

        <div className="content">
          <p>
            <strong> Name: </strong>
          </p>
          <button onClick={() => props.addToGarden(props.name, props.imageUrl)}>
            Add to my garden
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
