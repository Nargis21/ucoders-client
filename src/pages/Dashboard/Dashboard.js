import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Footer from '../Shared/Footer';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="html-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-700">
                <div className='py-2 text-center bg-slate-600'>
                    <h2 className='lg:text-5xl text-4xl text-slate-200 '>Dashboard</h2>
                    <progress class="progress lg:w-72 w-52 bg-white text-white"></progress>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
            <div className="drawer-side">
                <label htmlFor="html-sidebar" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-slate-800 text-base-content">

                    {/* { <!-- Sidebar content here -->} */}

                    <li><Link to='/dashboard/myProfile' className='hover:bg-green-600 hover:text-white text-slate-200 bg-slate-600 font-bold mb-2'
                    >My Profile</Link></li>
                    <li><Link to='/dashboard/myLearning' className='hover:bg-green-600 hover:text-white text-slate-200 bg-slate-600 font-bold mb-2'
                    >My Learning</Link></li>
                    {
                        admin && <>
                            <li><Link to='/dashboard/addHtml' className='hover:bg-green-600 hover:text-white text-slate-200 bg-slate-600 font-bold mb-2'
                            >Add HTML Content</Link></li>
                            <li><Link to='/dashboard/updateHtml' className='hover:bg-green-600 hover:text-white text-slate-200 bg-slate-600 font-bold mb-2 '
                            >Update HTML Content</Link></li>
                            <li><Link to='/dashboard/makeAdmin' className='hover:bg-green-600 hover:text-white text-slate-200 bg-slate-600 font-bold mb-2 '
                            >Make Admin</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;