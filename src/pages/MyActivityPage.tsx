import React from "react";
import SideMenu from "../components/menu/SideMenu";
import MyActivityTable from "../components/MyActivityTable";
import "./Page.css";
function MyActivity() {
  return (
    <div className="page">
      <SideMenu />
      <div className="pageLayout">
        <div className="header">
          <p className="title">My Activity Today</p>
        </div>
        <div className="content">
          <MyActivityTable />
        </div>
      </div>
    </div>
  );
}

export default MyActivity;
