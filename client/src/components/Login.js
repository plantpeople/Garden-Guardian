import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../util/API";

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
    const token = await getAccessTokenSilently();
    var newUser = {
      name: user.name,
      sub: user.sub,
    };

    API.addUser(newUser, token)
      .then((dbUser) => {
        console.log("user added");
        props.onLogin(dbUser.data.id, token);
        console.log(dbUser);
      })
      .catch((err) => {
        console.log(err);
      });
    //to-do: possibly insert option i.e. "see my garden"
  }

  return (
    <div>
      <button
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Login
      </button>
      <button onClick={logout}>Logout</button>
      <button
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
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
