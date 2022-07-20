import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Forget_pass from "./Components/Forget_Password/Forget_Pass";
import Reset_pass from "./Components/Reset_Password/Reset_pass";
import Dashboard from "./Components/Dashboard/Dashboard";


const App = () =>{
  return(<div className="body">
    <Dashboard/>
  </div>
  );
};

export default App;
