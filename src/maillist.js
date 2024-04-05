import React from "react";
import './maillist.css'
import data from "./data.json"
import Mailcontentnav from "./mailcontentnav";
import Navbarmaillist from "./maillistnav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Inbox from "./inbox";
import Sent from "./sent";

const Maillist = ({selectedComponent}) => {
  const handlecontent=()=>{
    
  }
    return (
        <>
            <div className="maillist">
                <Navbarmaillist />
                {selectedComponent==="Inbox" && <Inbox/>}
                {selectedComponent==="Sent" && <Sent/>}
            </div>
            
        </>
    );
};

export default Maillist;
