import React from "react";
import SideMenu from "../components/menu/SideMenu";
import "./Page.css";
function MyActivity() {
  return (
    <div className="page">
      <SideMenu />
      <div className="content">My Activity</div>
    </div>
  );
}

export default MyActivity;
