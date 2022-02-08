import React, { ChangeEvent, useState } from "react";
import IActivityType from "../interfaces/IActivityType";
import "./ActivityTypeTable.css";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { BsCircleFill } from "react-icons/bs";

interface ITable {
  elements: IActivityType[];
  refreshData: () => Promise<void>;
  addData: (props: IActivityType) => Promise<void>;
  removeData: (props: IActivityType) => Promise<void>;
}
function ActivityTypeTable(props: ITable) {
  const [newName, setNewName] = useState<string>("");
  const [newColor, setNewColor] = useState<string>("#123456");
  const [newDesc, setNewDesc] = useState<string>("");

  const updateName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };
  const updateColor = (e: ChangeEvent<HTMLInputElement>) => {
    setNewColor(e.target.value);
  };
  const updateDesc = (e: ChangeEvent<HTMLInputElement>) => {
    setNewDesc(e.target.value);
  };

  return (
    <table className="typeTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.elements.map((element) => {
          return (
            <tr key={element._id}>
              <td>{element.name}</td>
              <td>
                <BsCircleFill size={20} color={element.color} />
              </td>
              <td>{element.desc ? element.desc : "no description"}</td>
              <td>
                <button
                  className="button-remove"
                  onClick={async () => await props.removeData(element)}
                >
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
              value={newName}
              placeholder="name*"
              onChange={updateName}
            />
          </td>
          <td>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              value={newColor}
              onChange={updateColor}
            />
          </td>
          <td>
            <input
              maxLength={50}
              value={newDesc}
              placeholder="description"
              onChange={updateDesc}
            />
          </td>
          <td>
            <button
              className="button-add"
              onClick={async () => {
                await props.addData({
                  name: newName,
                  color: newColor,
                  desc: newDesc,
                  _id: "new",
                });
                setNewName("");
                setNewDesc("");
                setNewColor("#eeeeee");
              }}
            >
              <IoIosAddCircleOutline size={20} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ActivityTypeTable;
