import React from "react";
import Navbar from "../Navbar/Navbar";
import Resetpass_form from "./Resetpass_form";
import banner from "../../Image/banner.png"
import "../../Style/signup.css";
import "../../Style/navbar.css";

const Reset_pass = () =>{
    return(
        <div>
            <Navbar />
          <div className="header_div">
            <div id="header_cont" className=" headercontainer">
              <div className="header_img">
                <img src={banner} alt="Banner" className="banner" />
              </div>
              <div className="header_form">
                <Resetpass_form />
              </div>
            </div>
          </div>
        </div>
    );
}

export default Reset_pass;