import React, { useState } from "react";
import './menu.css';
import Layout from "./layout";
import Maillist from "./maillist";
import Editmsg from "./editmsg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEnvelope, faAddressBook, faCalendarAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const Menu=()=>{
  const [component,setComponent]=useState("msg");
  const handlemenuClick=(component)=>{
    setComponent(component);
  }
    return(
        <>
        <div className="menu_section">
            <img src="https://formfees.com/wp-content/uploads/iit_kanpur_logo.png" alt="logo" />
            <button className="fb" onClick={() => handlemenuClick("editmsg")}><FontAwesomeIcon icon={faEdit} className="fb"/> </button>
           <button onClick={() => handlemenuClick("msg")}><FontAwesomeIcon icon={faEnvelope } /> </button>
            <button onClick={() => handlemenuClick("contact")}><FontAwesomeIcon icon={faAddressBook} /> </button>
          <button onClick={() => handlemenuClick("calender")}><FontAwesomeIcon icon={faCalendarAlt} /></button>
         <button onClick={() => handlemenuClick("seting")}><FontAwesomeIcon icon={faCog} /></button>
         <button className="logout"><FontAwesomeIcon icon={faSignOutAlt} className="logout"/></button>
       
  </div>
  {component==="msg" && <Layout/>}
  {component==="editmsg" && <Editmsg/>}

  </>

    );
};
export default Menu;