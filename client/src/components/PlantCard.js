import React from "react";

const PlantCard = () => {
  return ( 
  <div>
    <div className = "card" >
        
        <div className = "img-container">
            <img src="https://bs.floristic.org/image/o/c6e885c91752dde563029b0a6d1448ecc4ca19ca" alt="plant"/>
        </div>

            <div className = "content">
                <p>
                      <strong> Name: </strong> 
                  </p>
            </div>
      </div>
    </div>
    );
}

export default PlantCard;
