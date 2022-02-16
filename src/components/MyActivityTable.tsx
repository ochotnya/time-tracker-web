import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import IActivityType from "../interfaces/IActivityType";
import IActivity from "../interfaces/IActivity";
import {
  AddActivity,
  DownloadActivities,
  DownloadTypes,
} from "../utils/dbFunctions";
import "./MyActivityTable.css";

function MyActivityTable() {
  const now = new Date().toISOString().slice(0, -8);
  const [typesList, setTypesList] = useState<IActivityType[]>([]);
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("not selected");
  const [start, setStart] = useState(now);
  const [end, setEnd] = useState(now);

  const updateDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };

  const updateType = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const updateStart = (e: ChangeEvent<HTMLInputElement>) => {
    setStart(e.target.value);
  };

  const updateEnd = (e: ChangeEvent<HTMLInputElement>) => {
    setEnd(e.target.value);
  };

  const saveEntry = async () => {
    const newData: IActivity = {
      desc: desc,
      type: type,
      start: start,
      end: end,
      _id: "new",
    };
    await AddActivity(newData);
    console.log(newData);
  };

  const downloadTypes = async () => {
    try {
      const response = await DownloadTypes();
      setTypesList(response);
    } catch (error) {
      console.log("download error");
    }
  };

  const downloadActivities = async () => {
    try {
      const response = await DownloadActivities();
      setActivities(response);
      console.log(response);
    } catch (error) {
      console.log("download error");
    }
  };

  useEffect(() => {
    downloadTypes();
    downloadActivities();
  }, []);

  return (
    // <div className="table-container">
    <table className="my-activity-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Type</th>
          <th>Start</th>
          <th>End</th>
          <th>Total hours</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity) => {
          const startDate = new Date(activity.start);
          const endDate = new Date(activity.end);
          const diff = endDate.getHours() - startDate.getHours();
          return (
            <tr
              key={activity._id}
              style={{
                backgroundColor: typesList.find(
                  (item) => item._id === activity.type
                )?.color,
              }}
            >
              <td aria-label="Description">{activity.desc}</td>
              <td aria-label="Type">
                {typesList.find((item) => item._id === activity.type)?.name}
              </td>
              <td aria-label="Start">{startDate.toLocaleString("pl-PL")}</td>
              <td aria-label="End">{endDate.toLocaleString("pl-PL")}</td>
              <td aria-label="Hours">{diff}</td>
              <td>
                <button className="button-remove">
                  <IoIosRemoveCircleOutline size={20} />
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td>
            <input
              maxLength={50}
              placeholder="Description*"
              value={desc}
              onChange={updateDesc}
            />
          </td>
          <td>
            <select value={type} onChange={updateType}>
              <option key="not selected" value="not selected">
                select...
              </option>
              {typesList.map((type) => (
                <option key={type._id} value={type._id}>
                  {type.name}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input type="datetime-local" onChange={updateStart} value={start} />
          </td>
          <td>
            <input type="datetime-local" onChange={updateEnd} value={end} />
          </td>
          <td>-</td>
          <td>
            {desc !== "" &&
              type !== "" &&
              type !== "not selected" &&
              end > start && (
                <button className="button-add" onClick={saveEntry}>
                  <IoIosAddCircleOutline size={20} />
                </button>
              )}
          </td>
        </tr>
      </tbody>
    </table>
    // </div>
  );
}

export default MyActivityTable;
