import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import PlantCard from "./components/PlantCard";
import Login from "./components/Login";
import GardenPage from "./components/GardenPage";
import API from "./util/API";

// let gardenListArray = []

class App extends Component {
  state = {
    user: {
      name: "user 1",
      plants: [],
    },
    userId: "",
    token: "",
    plantsAdded: [],
  };

  //need to make MyGarden model? component? both? myGarden = plantsAdded...?
  //need to make call to backend
  //  addToGarden = (name, imageUrl) => {
  //   console.log(name);
  //   const plantsAdded = this.state.plantsAdded.push(plant => plant.name !== name);

  //   var newPlant = {
  //     name: name,
  //     imageUrl: imageUrl,
  //     userId: this.state.userId,
  //     inGarden: true
  //   };
  // }
  savePlant(plant, inGarden) {
    var newPlant = {
      name: plant.name,
      imageUrl: plant.imageUrl,
      userId: this.state.userId,
      inGarden: inGarden,
    };
    console.log(newPlant);

    // TODO: fix userId being undefined

    API.addPlant(newPlant, this.state.token)
      .then((dbPlant) => {
        //need to show user that the plant has been 'added' to their garden
        //incorporate catch method in case sthg wrong happens
      })
      .catch((err) => console.log(err));
    console.log("Clicking this button will add the plant to garden");
  }

  deletePlant(plantId) {
    API.deletePlant(plantId, this.state.token)
      .then((dbPlant) => {
        //need to show user that the plant has been 'added' to their garden
        //incorporate catch method in case sthg wrong happens
      })
      .catch((err) => console.log(err));
    console.log("Clicking this button will add the plant to garden");
  }

  onLogin(user, token) {
    console.log(user.plants, "plants should be here");
    this.setState({ userId: user.id, token, user: user });
    console.log(this.state.userId);
  }

  render() {
    return (
      <div className="mainContent">
        <Login onLogin={this.onLogin.bind(this)} />
        <h1 className="logo">Garden Guardians</h1>
        <Search
          className="search-container"
          savePlant={this.savePlant.bind(this)}
        />
        <PlantCard
          className="plant-container"
          button1={{ name: "name", handler: () => {} }}
          button2={{ name: "name", handler: () => {} }}
          addToGarden={this.addToGarden}
          name="onion"
          imageUrl="https://bs.floristic.org/image/o/c6e885c91752dde563029b0a6d1448ecc4ca19ca"
        />

        <GardenPage
          plantsArray={this.state.user.plants.filter((p) => p.inGarden)}
        />
        {/* <Title>My Garden</Title> */}
        {/* {this.state.plantsAdded.map(plantsAdded => (
          <PlantCard
          addToGarden={this.addToGarden}
            name={plant.name}
            image={plant.imageUrl}
          />
        )} */}
      </div>
    );
  }
}

export default App;
