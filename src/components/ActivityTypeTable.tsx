import React, { ChangeEvent, useState } from "react";
import IActivityType from "../interfaces/IActivityType";
import "./ActivityTypeTable.css";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";

import { AddType } from "../utils/dbFunctions";
interface ITable {
  elements: IActivityType[];
}
function ActivityTypeTable(props: ITable) {
  const [newName, setNewName] = useState<string>("");
  const [newColor, setNewColor] = useState<string>("");
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

  const saveNewType = () => {
    AddType({ name: newName, color: newColor, desc: newDesc, _id: "new" });
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
            <tr>
              <td>{element.name}</td>
              <td>{element.color}</td>
              <td>{element.desc ? element.desc : "no description"}</td>
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
            <input value={newName} placeholder="name" onChange={updateName} />
          </td>
          <td>
            <input
              value={newColor}
              placeholder="color"
              onChange={updateColor}
            />
          </td>
          <td>
            <input
              value={newDesc}
              placeholder="description"
              onChange={updateDesc}
            />
          </td>
          <td>
            <button className="button-add" onClick={saveNewType}>
              <IoIosAddCircleOutline size={20} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ActivityTypeTable;
