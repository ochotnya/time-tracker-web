import React, { useEffect, useState } from "react";
import SideMenu from "../components/menu/SideMenu";
import "./Page.css";
import axios from "axios";

function ActivityTypesPage() {
  const [typesList, setTypesList] = useState({});

  const downloadTypes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/types");
      console.log(response);
    } catch (error) {}
  };
  useEffect(() => {}, []);

  return (
    <div className="page">
      <SideMenu />
      <div className="content">Types</div>
      <button onClick={downloadTypes}>dddd</button>
    </div>
  );
}

export default ActivityTypesPage;
