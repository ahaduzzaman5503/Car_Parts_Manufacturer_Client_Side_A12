import React from 'react';
import { Link } from 'react-router-dom';
import car_parts_logo from '../../Assets/car_parts.png';

const Navber = () => {
    return (
        <div className=' bg-green-500'> 
        <div className="navbar   rounded  container mx-auto ">
             <div >
                 <Link to="/" className="btn btn-ghost normal-case text-xl">
                 <img src={car_parts_logo} alt="PrivateTutorlogo" className="rounded-xl h-14" /></Link>
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
                 <li><span>|</span></li>
                <li><Link to="/register">Register</Link></li>
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navber;