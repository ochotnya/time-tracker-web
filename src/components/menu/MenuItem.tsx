import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

interface IMenuItem {
  text: string;
  path: string;
  icon: object;
}
function MenuItem(props: IMenuItem) {
  return (
    <Link to={props.path}>
      <div className="menuitem">
        <div className="icon">{props.icon}</div>
        <div className="text">{props.text}</div>
      </div>
    </Link>
  );
}

export default MenuItem;
