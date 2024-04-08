import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Profile from "./Profile";

import "./dashboard.css";

const Dashboard = ({ onLogout, onLogin, user }) => {
  
  if (user) {
    return (
      <div className="dashboard">
        <Sidebar onLogout={onLogout} />
        <div className="dashboard--content">
          <Content />
          <Profile onLogin={onLogin} user={user} />
        </div>
      </div>
    );
  } else {
    return <h1>User not logged in. Please log in to view the Dashboard...</h1>;
  }
};

export default Dashboard;
