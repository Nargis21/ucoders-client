import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Css = () => {
    const [cssLessons, setCssLessons] = useState([])
    useEffect(() => {
        fetch('https://ucoders-server.vercel.app/cssLessons')
            .then(res => res.json())
            .then(data => setCssLessons(data))
    }, [])
    return (
        <div className="drawer drawer-mobile">
            <input id="css-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-700">
                <div className='py-2 text-center bg-slate-600'>
                    <h2 className='lg:text-5xl text-4xl text-slate-200 '>CSS Tutorials</h2>
                    <progress class="progress lg:w-80  w-64 bg-white text-white"></progress>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
            <div className="drawer-side">
                <label htmlFor="css-sidebar" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-slate-800 text-base-content">

                    {/* { <!-- Sidebar content here -->} */}


                    {cssLessons.map(cssLesson =>
                        <li key={cssLesson._id}><Link className='hover:bg-green-600 hover:text-white text-slate-200 font-bold'
                            to={`/css/lesson/${cssLesson._id}`}>{cssLesson.title}</Link></li>
                    )}

                </ul>

            </div>
        </div>
    );
};

export default Css;