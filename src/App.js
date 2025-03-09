import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword.jsx.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
    </Router>

    
  );
}

export default App;
