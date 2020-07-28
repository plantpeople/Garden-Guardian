import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import PlantCard from "./components/PlantCard";
import Login from "./components/Login";
import API from "./util/API";

class App extends Component {
  state = {
    userId: "",
    token: "",
  };

  // add plant to user's garden in database
  addToGarden(name, imageUrl) {
    console.log(name, imageUrl);

    var newPlant = {
      name: name,
      imageUrl: imageUrl,
      userId: this.state.userId,
    };

    // TODO: fix userId being undefined

    API.addPlant(newPlant, this.state.token).then((dbPlant) => {
      console.log(dbPlant);
    });

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
      </div>
    );
  }
}

export default App;
