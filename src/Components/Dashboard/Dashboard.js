import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="dashboard-sideber" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-sideber" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-green-100 font-bold text-base-content">
      <li><Link to="/dashboard">My Profile</Link></li>
      <li><Link to="/dashboard/myorder">My Order</Link></li>
      <li><Link to="/dashboard/addreview">Add Reveiw</Link></li>
      <li><Link to="/dashboard/alluser">All User</Link></li>
      <li><Link to="/dashboard/addproduct">Add Product</Link></li>
      <li><Link to="/dashboard/manageorder">Manage Order</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Dashboard;