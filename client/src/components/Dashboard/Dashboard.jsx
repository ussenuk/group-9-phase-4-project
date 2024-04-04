import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Profile from "./Profile";

import "./dashboard.css";

const Dashboard = ({ onLogout, onLogin, user }) => {
    console.log("User in Dashboard:",{user}); // Log the user object here
  return (
    <div className="dashboard">
      <Sidebar onLogout={onLogout} />
      <div className="dashboard--content">
        <Content />
        <Profile onLogin = {onLogin} user={user} />
      </div>
    </div>
  );
};

export default Dashboard;
