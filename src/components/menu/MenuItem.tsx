import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";

interface IMenuItem {
  text: string;
  path: string;
}
function MenuItem(props: IMenuItem) {
  return (
    <Link to={props.path}>
      <div className="menuitem">{props.text}</div>
    </Link>
  );
}

export default MenuItem;
