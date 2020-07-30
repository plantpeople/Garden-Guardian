import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import PlantCard from "./components/PlantCard";
import Login from "./components/Login";
import GardenPage from "./components/GardenPage";
class App extends Component {
  state = {
    user: {
      name: "user 1",
      plants: [
        { name: "plant 1", inGarden: true, waterDays: 3 },
        { name: "plant 2", inGarden: true, waterDays: 6 },
        { name: "plant 3", inGarden: false, waterDays: 3 },
      ],
    },
  };

  addToGarden() {
    // TODO: Create functionality to add plant to user's garden in database
    console.log("Clicking this button will add the plant to garden");
  }

  render() {
    return (
      <div>
        <Search />
        <PlantCard addToGarden={this.addToGarden} />
        <Login />
        <GardenPage
          plantsArray={this.state.user.plants.filter((p) => p.inGarden)}
        />
      </div>
    );
  }
}

export default App;
