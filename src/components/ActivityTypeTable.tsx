import React from "react";
import IActivityType from "../interfaces/IActivityType";
import "./ActivityTypeTable.css";

interface ITable {
  elements: IActivityType[];
}
function ActivityTypeTable(props: ITable) {
  return (
    <table className="typeTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.elements.map((element) => {
          return (
            <tr>
              <td>{element.name}</td>
              <td>{element.color}</td>
              <td>{element.desc ? element.desc : "no description"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ActivityTypeTable;
