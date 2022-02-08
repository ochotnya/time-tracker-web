import React, { useEffect, useState } from "react";
import SideMenu from "../components/menu/SideMenu";
import "./Page.css";
import { DownloadTypes } from "../utils/dbFunctions";
import IActivityType from "../interfaces/IActivityType";
import { IoIosAddCircleOutline } from "react-icons/io";
import ActivityTypeTable from "../components/ActivityTypeTable";

function ActivityTypesPage() {
  const [typesList, setTypesList] = useState<IActivityType[]>([]);

  const downloadTypes = async () => {
    try {
      const response = await DownloadTypes();
      setTypesList(response);
    } catch (error) {}
  };

  useEffect(() => {
    downloadTypes();
  }, []);

  return (
    <div className="page">
      <SideMenu />
      <div className="pageLayout">
        <div className="header">
          <p className="title">Activity Types</p>
          <button className="headerMainButton">
            <IoIosAddCircleOutline size={25} />
            Create new type
          </button>
        </div>
        <div className="content">
          {/* <div className="list">
            {typesList.map((element) => (
              <ActivityTypeRow key={element._id} object={element} />
            ))}
          </div> */}
          <ActivityTypeTable elements={typesList} />
        </div>
      </div>
    </div>
  );
}

export default ActivityTypesPage;
