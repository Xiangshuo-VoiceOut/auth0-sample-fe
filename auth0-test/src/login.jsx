import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Auth0Provider } from "@auth0/auth0-react";

const Login = ({ onClick }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={onClick}>Login</button>
    </div>
  );
};

export default Login;
