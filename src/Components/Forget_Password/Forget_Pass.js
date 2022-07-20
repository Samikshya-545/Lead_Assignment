import React from "react";
import Navbar from "../Navbar/Navbar";
import Forgetpass_form from "./Forgetpass_form";
import banner from "../../Image/banner.png"
import "../../Style/signup.css";
import "../../Style/navbar.css";

const Forget_pass = () =>{
    return(
        <div>
            <Navbar />
          <div className="header_div">
            <div id="header_cont" className=" headercontainer">
              <div className="header_img">
                <img src={banner} alt="Banner" className="banner" />
              </div>
              <div className="header_form">
                <Forgetpass_form />
              </div>
            </div>
          </div>
        </div>
    );
}

export default Forget_pass;