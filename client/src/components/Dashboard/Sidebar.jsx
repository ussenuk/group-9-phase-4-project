import React from 'react';

import {
    BiHome, 
    BiBookAlt, 
    BiSolidReport,
    BiStats,
    BiTask,
    BiHelpCircle,
} from "react-icons/bi";

import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="menu">
    <div className='logo'>
    <BiBookAlt className="logo-icon"/>
    <h2>Kims Management System</h2>
    </div>
    <div className='menu--list'>
        <a href='#' className='item active'>
            <BiHome className='icon'/>
            Dashboard
        </a>
        <a href='#' className='item'>
            <BiTask className='icon'/>
            Assigment
        </a>
        <a href='#' className='item'>
            <BiStats className='icon'/>
            Accounting
        </a>
        <a href='#' className='item'>
            <BiSolidReport className='icon'/>
            Report
        </a>
        
        <a href='#' className='item'>
            <BiHelpCircle className='icon'/>
            Help
        </a>

    </div>
    </div>
  )
}

export default Sidebar

