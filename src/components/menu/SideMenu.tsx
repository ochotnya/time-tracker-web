import React from "react";
import MenuItem from "./MenuItem";
import "./SideMenu.css";

function SideMenu() {
  return (
    <div className="container">
      <MenuItem text="Dashboard" path="/" />
      <MenuItem text="My Activity" path="/myactivity" />
      <MenuItem text="Activity Types" path="/" />
    </div>
  );
}

export default SideMenu;
