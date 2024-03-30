import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Profile from './Profile';

import './dashboard.css';

const Dashboard = ({user}) =>{

    if (user) {
        return <div className='dashboard'>
    
        <Sidebar />
        <div className='dashboard--content'>
    
        <Content />
        <Profile />
        
        </div>
        </div>

    } else {
        return <h1>Please Login or Sign Up</h1>;
    }
    
};

export default Dashboard