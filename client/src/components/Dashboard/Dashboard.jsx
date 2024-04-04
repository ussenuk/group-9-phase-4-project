import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import Profile from './Profile';

import './dashboard.css';

const Dashboard = ({onLogout, user}) =>{
    return <div className='dashboard'>
    
    <Sidebar onLogout={onLogout} user={user}/>
    <div className='dashboard--content'>

    <Content />
    <Profile />
    
    </div>
    </div>
};

export default Dashboard