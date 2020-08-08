import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../util/API";
import "../index.css";

const Login = (props) => {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(
    function () {
      if (user) {
        addUser();
      }
    },
    [user]
  );

  async function addUser() {
    // const token = await getAccessTokenSilently();
    var newUser = {
      name: user.name,
      sub: user.sub,
    };
    const token = "";
    API.addUser(newUser, token)
      .then((dbUser) => {
        console.log("user added");
        props.onLogin(dbUser.data, token);
      })
      .catch((err) => {
        console.log(err);
      });
    //to-do: possibly insert option i.e. "see my garden"
  }

  return (
    <div className="login">
      <button
        className="button-2"
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Login
      </button>
      <button className="button-2" onClick={logout}>
        Logout
      </button>
      <button
        className="button-2"
        onClick={() => {
          console.log(user);
          console.log(isAuthenticated);
        }}
      >
        Log user
      </button>
      {isAuthenticated && (
        <>
          <div>
            <p className="username">{user.email}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
