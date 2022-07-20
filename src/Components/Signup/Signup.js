import React from "react";
import Navbar from "../Navbar/Navbar";
import Signup_form from "./Signup_form";
import banner from "../../Image/banner.png"
import "../../Style/signup.css";
import "../../Style/navbar.css";

const Signup = () =>{
    return (
        <div>
          <Navbar />
          <div className="header_div">
            <div id="header_cont" className=" headercontainer">
              <div className="header_img">
                <img src={banner} alt="Banner" className="banner" />
              </div>
              <div className="header_form">
                <Signup_form />
              </div>
            </div>
          </div>
        </div>
      );
}

export default Signup;