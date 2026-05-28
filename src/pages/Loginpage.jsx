// import React from "react";
import Login from "../components/auth/login";

function Loginpage({ isLoggedIn, setIsLoggedIn }) {
  return <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
}

export default Loginpage;
