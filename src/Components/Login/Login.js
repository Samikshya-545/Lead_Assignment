import React from "react";
import Navbar from "../Navbar/Navbar";
import Login_form from "./Login_form";
import banner from "../../Image/banner.png"
import "../../Style/signup.css";
import "../../Style/navbar.css";

const Login = () =>{
    return(
        <div>
            <Navbar />
          <div className="header_div">
            <div id="header_cont" className=" headercontainer">
              <div className="header_img">
                <img src={banner} alt="Banner" className="banner" />
              </div>
              <div className="header_form">
                <Login_form />
              </div>
            </div>
          </div>
        </div>
    );
}

export default Login;