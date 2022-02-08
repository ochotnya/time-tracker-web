import React from "react";
import MenuItem from "./MenuItem";
import "./SideMenu.css";
import { RiDashboardFill, RiFolder3Fill, RiListOrdered } from "react-icons/ri";
function SideMenu() {
  return (
    <div className="container">
      <MenuItem
        text="Dashboard"
        path="/"
        icon={<RiDashboardFill size={25} />}
      />
      <MenuItem
        text="My Activity"
        path="/myactivity"
        icon={<RiListOrdered size={25} />}
      />
      <MenuItem
        text="Activity Types"
        path="/activitytypes"
        icon={<RiFolder3Fill size={25} />}
      />
    </div>
  );
}

export default SideMenu;
