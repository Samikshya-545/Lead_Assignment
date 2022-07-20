import React from "react";
import logo from "../../Image/logo1.png";
import "../../Style/navbar.css";


const Navbar = () =>{
    return( <nav className='navbar'>
        <div className="navcont nav_con">
            <div className="nav_logo">
                <img src={logo} alt="Leadsquared_logo" className="lsq_logo" />
            </div>
            <div className="lead_profile_pic">

            </div>
        </div>
    </nav>);
};

export default Navbar;