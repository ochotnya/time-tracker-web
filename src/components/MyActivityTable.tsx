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
  const [typesList, setTypesList] = useState<IActivityType[]>([]);
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [start, setStart] = useState(Date.now.toString());
  const [end, setEnd] = useState(Date.now.toString());

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
          return (
            <tr
              key={activity._id}
              style={{
                backgroundColor: typesList.find(
                  (item) => item._id === activity.type
                )?.color,
              }}
            >
              <td>{activity.desc}</td>
              <td>
                {typesList.find((item) => item._id === activity.type)?.name}
              </td>
              <td>{activity.start}</td>
              <td>{activity.end}</td>
              <td>4</td>
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
              maxLength={20}
              placeholder="Description*"
              value={desc}
              onChange={updateDesc}
            />
          </td>
          <td>
            <select value={type} onChange={updateType}>
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
          <td>
            <button onClick={downloadActivities}>elelelel</button>
          </td>
          <td>
            <button className="button-add" onClick={saveEntry}>
              <IoIosAddCircleOutline size={20} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default MyActivityTable;
