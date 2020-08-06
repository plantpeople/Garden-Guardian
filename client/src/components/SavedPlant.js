import React from 'react';
import PlantCard from './PlantCard';
 
const SavedPlant = (props) => {
    let { plantsArray } = props;
    const plantCards = plantsArray.map((plant) => (
        <PlantCard
          garden={false}
          handleClick={() => console.log("button clicked")}
          key={plant.name}
          name={plant.name}
        />
      ));
    
 
    return (
        <div>
            {plantCards}
        </div>
    );
};
 
export default SavedPlant;