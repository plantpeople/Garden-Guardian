import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import PlantCard from "./components/PlantCard";
import Login from "./components/Login";
import API from "./util/API";

// let gardenListArray = []

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
    userId: "",
    token: "",
    plantsAdded: []
  };

  //need to make MyGarden model? component? both? myGarden = plantsAdded...?
  //need to make call to backend
   addToGarden = (name, imageUrl) => {
    console.log(name);
    const plantsAdded = this.state.plantsAdded.push(plant => plant.name !== name);

    // const addPlant = this.setState.PlantCard

    var newPlant = {
      name: name,
      imageUrl: imageUrl,
      userId: this.state.userId,
      inGarden: true
    };

    // TODO: fix userId being undefined

    API.addPlant(newPlant, this.state.token).then((dbPlant) => {
      this.setState({ plantsAdded })
       //need to show user that the plant has been 'added' to their garden
       //incorporate catch method in case sthg wrong happens
    }).catch(err => console.log(err));

    //once plant added to garden, does view change/routed to their garden?? --> we want myGarden page where a user's garden will be rendered.
    //do we want user routed to myGarden in response to a certain action? i.e., clicking on addToGarden button

    console.log("Clicking this button will add the plant to garden");
  }

  onLogin(userId, token) {
    this.setState({ userId, token });
    console.log(this.state.userId);
  }

  render() {
    return (
      <div>
        <Search />
        <PlantCard
          addToGarden={this.addToGarden}
          name="onion"
          imageUrl="https://bs.floristic.org/image/o/c6e885c91752dde563029b0a6d1448ecc4ca19ca"
        />
        <Login onLogin={this.onLogin.bind(this)} />
        <Login />
        <GardenPage />
          plantsArray={this.state.user.plants.filter((p) => p.inGarden)}
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
