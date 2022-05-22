import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className=' bg-green-500'> 
        <div className="navbar   rounded  container mx-auto ">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold text-fuchsia-700	">Car Parts Manufacturers </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-lg font-bold   ">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/purchase">Purchase</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/my_portfolio">My Portfolio</Link></li>
                </ul>
            </div>
            <div className="navbar-end ">
                <ul className="menu menu-horizontal p-0 text-lg font-bold  ">
                <li><Link to="/login">login</Link></li>
                 <li><span>||</span></li>
                <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navber;