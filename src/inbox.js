import React, { useState, useEffect } from "react";
import data from "./data.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Mailcontentnav from "./mailcontentnav";
import MailContent from "./mailContent";

const Inbox = () => {
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        if (data.length > 0) {
            setSelectedId(data[0].id); // Select the first item by default
        }
    }, []);

    const handleItemClick = (id) => {
        setSelectedId(id);
    }

    return (
        <div className="mails">
            {data.map(item => (
                <div key={item.id} className={selectedId === item.id ? "mails-item clicked" : "mails-item"} onClick={() => handleItemClick(item.id)}>
                    <span style={{ fontSize: '12px', marginLeft: '5%', color: '#585858' }}>{item.from.name}</span><br />
                    <span>
                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px', verticalAlign: 'middle', marginRight: '5px' }} />
                        {item.title}
                    </span>
                </div>
            ))}
            <div className="mailcontent">
                 <Mailcontentnav/>
                {selectedId && <MailContent id={selectedId} />}
            </div>
        </div>
    );
};

export default Inbox;
