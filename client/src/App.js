import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import { useAuth0 } from "@auth0/auth0-react";
import PlantCard from "./components/PlantCard";

class App extends Component {
  state = {};

  addToGarden() {
    // TODO: Create functionality to add plant to user's garden in database
    console.log("Clicking this button will add the plant to garden");
  }

  render() {
    return (
      <div>
        <Search />
        <PlantCard addToGarden={this.addToGarden} />
      </div>
    );
  }
}

export default App;

/* const { loginWithRedirect, logout, user } = useAuth0();
  return (
    <div className="App">
      <button
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Login
      </button>
      <button onClick={logout}>logout</button>
      <h1>{user}</h1>
    </div>
  ); */
