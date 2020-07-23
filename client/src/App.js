import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import { useAuth0 } from "@auth0/auth0-react";
const App = () => {
  return <Search />;
};

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
