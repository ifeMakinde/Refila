import "./App.css";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/login"
            element={
              <Loginpage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
