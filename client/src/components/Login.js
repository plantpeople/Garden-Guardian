import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../util/API";

const Login = () => {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

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
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>userId: {user.sub}</p>
          </div>
          <button
            onClick={async () => {
              const token = await getAccessTokenSilently();
              console.log(token);
              API.testAuthApi(token).then((e) => {
                console.log(e);
              });
            }}
          >
            Test APi
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
