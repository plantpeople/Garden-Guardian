import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import PlantCard from "./components/PlantCard";
import Login from "./components/Login";
class App extends Component {
  state = {
    userId: "",
  };

  addToGarden() {
    // TODO: Create functionality to add plant to user's garden in database
    console.log("Clicking this button will add the plant to garden");
  }

  onLogin(userId) {
    this.setState({ userId });
    console.log(this.state.userId);
  }

  render() {
    return (
      <div>
        <Search />
        <PlantCard addToGarden={this.addToGarden} />
        <Login onLogin={this.onLogin.bind(this)} />
      </div>
    );
  }
}

export default App;
