import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Forget_pass from "./Components/Forget_Password/Forget_Pass";
import Reset_pass from "./Components/Reset_Password/Reset_pass";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () =>{
  return(<div className="body">
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgetpassword" element={<Forget_pass />} />
          <Route exact path="/resetpassword" element={<Reset_pass />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
};

export default App;
