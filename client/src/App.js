import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Login from "./components/Login";
import GardenPage from "./components/GardenPage";
import LikedPage from "./components/LikedPage";
import API from "./util/API";

// let gardenListArray = []

class App extends Component {
  state = {
    showGarden: true,
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
      image: plant.image,
      userId: this.state.userId,
      inGarden: inGarden,
    };

    // TODO: fix userId being undefined

    API.addPlant(newPlant, this.state.token)
      .then((dbPlant) => {
        //need to show user that the plant has been 'added' to their garden
        //incorporate catch method in case sthg wrong happens
        dbPlant.data.notes = [];
        const plants = [...this.state.plants, dbPlant.data];
        this.setState({ plants: plants });
      })
      .catch((err) => console.log(err));
  }

  movePlant(plant) {
    plant.inGarden = !plant.inGarden;

    API.updatePlant(plant).then((response) => {
      this.setState({ plants: this.state.plants });
    });
  }

  deletePlant(plant) {
    API.deletePlant(plant.id)
      .then((dbPlant) => {
        const plants = this.state.plants.filter((e) => e.id !== plant.id);
        this.setState({
          plants: plants,
        });
      })
      .catch((err) => console.log(err));
  }

  onLogin(user, token) {
    this.setState({ userId: user.id, token, user: user, plants: user.plants });
  }

  addNote(plant, note){
    plant.notes.push(note)
    API.addNote({note:note, plantId: plant.id}).then((response)=>{
			   
    })
  }

  render() {
    return (
      <div className="mainContent">
      <div className="login">  <button
          className="button-2"
          onClick={() => {
            this.setState({ showGarden: !this.state.showGarden });
          }}
        >
          Change to {!this.state.showGarden ? "Garden Page" : "Likes Page"}
        </button>
        <Login onLogin={this.onLogin.bind(this)} /></div>
        <h1 className="logo">Garden Guardians</h1>
        <Search
          className="search-container"
          savePlant={this.savePlant.bind(this)}
        />

        {this.state.user && (
          <div>

            {this.state.showGarden ? (
              <GardenPage
                plantsArray={this.state.plants.filter((p) => p.inGarden)}
                movePlant={this.movePlant.bind(this)}
                deletePlant={this.deletePlant.bind(this)}
                addNote={this.addNote.bind(this)}
              />
            ) : (
              <LikedPage
                plantsArray={this.state.plants.filter((p) => !p.inGarden)}
                movePlant={this.movePlant.bind(this)}
                deletePlant={this.deletePlant.bind(this)}
                addNote={this.addNote.bind(this)}
              />
            )}

          </div>
        )}
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
