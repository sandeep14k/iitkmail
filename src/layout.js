import React from "react";
import './layout.css'
import { useEffect,useState } from "react";
import data from "./data.json"
import Maillist from "./maillist";
const Layout=()=>{
  const [selectedComponent, setSelectedComponent] = useState("Inbox");

    const handleClick = (component) => {
        setSelectedComponent(component);
    };

return(
  <>
    <div className="fixed-sections">
    <div className="section">sandeepkj23@iitk.ac.in</div>
    <div className="inbox" onClick={() => handleClick("Inbox")}>
    <img src="//ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/inbox_fill_baseline_p900_20dp.png" alt="logo"/>
    <span>Inbox  </span><span className="len">{data.length}</span>
    </div>
    <div className="sent" onClick={() => handleClick("Sent")}>
        <img src="//ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/send_baseline_nv700_20dp.png" alt="logo" />
        <span>Sent</span>
    </div>
    <div className="draft" onClick={() => handleClick("Draft")}>
        <img src="//ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/draft_baseline_nv700_20dp.png" alt="logo" />
        <span>Drafts</span>
    </div>
    <div className="spam">
        <img src="//ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/report_baseline_nv700_20dp.png" alt="logo" />
        <span>Spam</span>
    </div>
    <div className="trash">
        <img src="//ssl.gstatic.com/ui/v1/icons/mail/gm3/2x/delete_baseline_nv700_20dp.png" alt="" />
        <span>Trash</span>
    </div>
  </div>

  <Maillist selectedComponent={selectedComponent}/>
  </>
);
};
export default Layout;