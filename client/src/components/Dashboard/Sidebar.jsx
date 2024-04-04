import React from "react";

import { Link, NavLink } from "react-router-dom";

import {
  BiHome,
  BiBookAlt,
  BiSolidReport,
  BiStats,
  BiTask,
  BiHelpCircle,
  BiSolidCreditCardFront,
  BiSolidLandmark,
  BiSolidArch 
} from "react-icons/bi";

import "./sidebar.css";
const Sidebar = () => {
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
        <a href="#" className="item">
          <BiSolidReport className="icon" />
          Report
        </a>

        <a href="#" className="item">
          <BiHelpCircle className="icon" />
          Help
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
