import React, { useEffect, useState } from "react";
import SideMenu from "../components/menu/SideMenu";
import "./Page.css";
import { AddType, DownloadTypes, RemoveType } from "../utils/dbFunctions";
import IActivityType from "../interfaces/IActivityType";
import { IoIosAddCircleOutline } from "react-icons/io";
import ActivityTypeTable from "../components/ActivityTypeTable";

function ActivityTypesPage() {
  const [typesList, setTypesList] = useState<IActivityType[]>([]);

  const downloadTypes = async () => {
    try {
      const response = await DownloadTypes();
      setTypesList(response);
    } catch (error) {
      console.log("download error");
    }
    console.log(typesList);
  };

  const saveNewType = async (props: IActivityType) => {
    if (props.name) {
      await AddType(props);
      downloadTypes();
    }
  };

  const removeType = async (props: IActivityType) => {
    await RemoveType(props);
    downloadTypes();
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
        </div>
        <div className="content">
          <ActivityTypeTable
            elements={typesList}
            refreshData={() => downloadTypes()}
            addData={saveNewType}
            removeData={removeType}
          />
        </div>
      </div>
    </div>
  );
}

export default ActivityTypesPage;
