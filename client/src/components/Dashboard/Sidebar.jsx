import React from "react";
import { Link } from "react-router-dom";

import {
  BiHome,
  BiBookAlt,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
} from "react-icons/bi";

import "./sidebar.css";
const Sidebar = ({ onLogout }) => {
  function handleLogout() {
    fetch("http://127.0.0.1:5555/logout", {
      method: "DELETE",
    }).then(() => {
      onLogout();
    });
  }

  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>Kims Management System</h2>
      </div>
      <div className="menu--list">
        <a href="#" className="item active">
          <BiHome className="icon" />
          Dashboard
        </a>
        <a href="#" className="item">
          <BiTask className="icon" />
          Assigment
        </a>
        <a href="#" className="item">
          <BiStats className="icon" />
          Accounting
        </a>
        <a href="#" className="item">
          <BiSolidReport className="icon" />
          Report
        </a>

        <a href="#" className="item">
          <BiHelpCircle className="icon" />
          Help
        </a>
        <>
          <button
            onClick={handleLogout}
            style={{
              marginTop: "10px",
              marginRight: "5px",
              marginLeft: "5px",
              border: "0.5px solid #111111",
            }}
          >
            Logout
          </button>
        </>
      </div>
    </div>
  );
};

export default Sidebar;
