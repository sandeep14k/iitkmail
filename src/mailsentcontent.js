import React from "react";
import "./mailContent.css";
import data from "./sentdata.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faPaperclip } from '@fortawesome/free-solid-svg-icons';

const MailSentContent = (props) => {
    const {id}=props;
    const mail = data.find(item => item.id === id);
    if (!mail) {
        return <div>No mail found for this id</div>;
    }
    const timestamp = new Date(mail.timestamp);
    const formattedTimestamp = `${timestamp.getFullYear()}-${("0" + (timestamp.getMonth() + 1)).slice(-2)}-${("0" + timestamp.getDate()).slice(-2)} ${("0" + timestamp.getHours()).slice(-2)}:${("0" + timestamp.getMinutes()).slice(-2)}`;
    return (  
    <div className="content">
        <span className="title">{mail.title}</span>
        <div className="user-icon">
        <FontAwesomeIcon icon={faUser} className="icon"/>
     </div>
     <span className="from"><span className="from-text">From  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{mail.from.name}</span>
     <span className="sender"><span className="sender-text">Sender  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{mail.from.email}</span>
     <span className="to"><span className="to-text">To  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{mail.to}</span>
     <span className="date"><span className="date-text">Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>{formattedTimestamp}</span>
     <div className="main">
        {mail.body}
     </div>
    </div>
    );
}

export default MailSentContent;