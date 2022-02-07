import React from "react";
import SideMenu from "../components/menu/SideMenu";
import "./Page.css";

function Dashboard() {
  return (
    <div className="page">
      <SideMenu />
      <div className="content">Dashboard</div>
    </div>
  );
}

export default Dashboard;
