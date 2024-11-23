import Login from "./login";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./profile";

function App() {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        console.log("access token", token);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };

    if (isAuthenticated) {
      fetchToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  // 定义一个异步函数来获取访问令牌
  const getAccessToken = async () => {
    try {
      const token = await getAccessTokenSilently(); // 获取令牌
      console.log("Access Token:", token); // 在控制台打印令牌
    } catch (error) {
      console.error("Error during getting access token:", error);
    }
  };
  return (
    <>
      {isAuthenticated ? (
        <Profile
          onClick={() => logout({ returnTo: window.location.origin })}
          user={user}
        />
      ) : (
        <Login onClick={loginWithRedirect} />
      )}
    </>
  );
}

export default App;
