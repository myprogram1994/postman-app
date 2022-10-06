
import "./Header.css";
import { useState } from "react";
const Header = () => {

  return (
    
<>
<div className="header_top_box1">
<div>File</div>
<div>Edit</div>
<div>View</div>
<div>Help</div>
</div>

<div className="header_top_box2">
<div className="home_text">Home</div>
<div className="worksapce-text">Workspace</div>
<div className="report-text">Reports</div>
<div className="explore-text">Explore</div>

<div className="input_box">
  <form class="nosubmit">
    <input
      class="nosubmit"
      type="search"
      placeholder="Search postman"
    />
  </form>
</div>

<div className="cloud_icon">
  <i class="material-icons" style={{ color: "#90EE90", fontSize: 25 }}>
    cloud_queue
  </i>
</div>

<div className="userbtn">
  <i
    class="far fa-user-circle"
    style={{ fontSize: 15, color: "#fff" }}
  ></i>
  <span style={{ color: "#fff", marginLeft: 5 }}>Invite</span>
</div>
<div className="setting_icon">
  <i class="material-icons" style={{ color: "#6b6b6b", fontSize: 25 }}>
    settings
  </i>
</div>

<div className="bell_icon">
  <i class="fa fa-bell-o" style={{ fontSize: 20 }}></i>{" "}
  <span className="arrow"></span>
</div>

<div className="upgrade-text">Upgrade</div>
</div>
</>
  )
}

export default Header;
