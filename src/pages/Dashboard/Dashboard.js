import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="html-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-700">
                <div className='py-2 text-center bg-slate-600'>
                    <h2 className='text-5xl text-slate-200 '>Dashboard</h2>
                    <progress class="progress w-72 bg-white text-white"></progress>
                </div>
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="html-sidebar" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-slate-800 text-base-content">

                    {/* { <!-- Sidebar content here -->} */}

                    <li><Link to='/dashboard/addHtml' className='hover:bg-green-600 hover:text-white text-slate-200 bg-slate-600 font-bold mb-2'
                    >Add HTML Content</Link></li>
                    <li><Link to='/dashboard/updateHtml' className='hover:bg-green-600 hover:text-white text-slate-200 bg-slate-600 font-bold mb-2 '
                    >Update HTML Content</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;