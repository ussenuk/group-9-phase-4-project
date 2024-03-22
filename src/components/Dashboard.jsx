// Dashboard.jsx
import React from 'react';

const Dashboard = () => {
    // Dummy data for dashboard widgets
    const widgetData = {
        usersCount: 1000,
        salesAmount: '$50,000',
        newOrders: 50,
        // Add more widget data as needed
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 p-4 rounded">
                    <h3 className="text-xl font-semibold">Users Count</h3>
                    <p className="text-3xl">{widgetData.usersCount}</p>
                </div>
                <div className="bg-gray-200 p-4 rounded">
                    <h3 className="text-xl font-semibold">Sales Amount</h3>
                    <p className="text-3xl">{widgetData.salesAmount}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
