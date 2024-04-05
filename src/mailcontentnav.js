import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faReplyAll, faForward, faTrash, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import "./nav.css"
function Mailcontentnav () {
  const handleReply = () => {
    console.log("Reply clicked");
    // Add logic for reply action
  };

  const handleReplyAll = () => {
    console.log("Reply All clicked");
    // Add logic for reply all action
  };

  const handleForward = () => {
    console.log("Forward clicked");
    // Add logic for forward action
  };

  const handleDelete = () => {
    console.log("Delete clicked");
    // Add logic for delete action
  };

  const handleSpam = () => {
    console.log("Spam clicked");
    // Add logic for spam action
  };

  return (
    <div className="navbar">
      <button onClick={handleReply}><FontAwesomeIcon icon={faReply} /> Reply</button>
      <button onClick={handleReplyAll}><FontAwesomeIcon icon={faReplyAll} /> Reply All</button>
      <button onClick={handleForward}><FontAwesomeIcon icon={faForward} /> Forward</button>
      <button onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /> Delete</button>
      <button onClick={handleSpam}><FontAwesomeIcon icon={faExclamationTriangle} /> Spam</button>
    </div>
  );
}

export default Mailcontentnav;
