import React from "react";
import Navbar from "../Navbar/Navbar";
import Lead_details_table from "./Lead_details_table";
import "../../Style/dashboard.css"
import "../../Style/lead_deatail_table.css"

const Dashboard = () =>{
    return(
        <div>
            <Navbar/>
            <div id="details_table">
            <Lead_details_table/>
            </div>
        </div>
    )
}
export default Dashboard;