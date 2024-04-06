import React from "react";


import { Link, NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";


import {
  BiHome,
  BiBookAlt,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,

  BiSolidCreditCardFront,
  BiSolidLandmark,
  BiSolidArch ,

  BiGroup
} from "react-icons/bi";

import "./sidebar.css";
const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  function handleLogout() {
    fetch("http://127.0.0.1:5555/logout", {
      method: "DELETE",
    }).then(() => {
      onLogout();
      navigate("/");
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
        {/* Links to sub-pages */}
        <NavLink to="/admin" className="item">
          <BiSolidArch className="icon" />
          Admin
        </NavLink>
        <NavLink to="/studentinfo" className="item">
          <BiStats className="icon" />
          Accounting
        </NavLink>
        <NavLink to="/departments" className="item">
          <BiSolidLandmark className="icon" />
          Departments
        </NavLink>
        <NavLink to="/accounting-records" className="item">
          <BiSolidCreditCardFront className="icon" />
          Salaries
        </NavLink>

        
        <div className="item">
          <BiGroup className="icon" />
          <Link to="/UsersList">List of Active Users</Link>
        </div>

        <a href="#" className="item">
          <BiTask className="icon" />
          Assigment
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
