import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Javascript = () => {
    const [javascriptLessons, setjavascriptLessons] = useState([])
    useEffect(() => {
        fetch('https://ucoders.up.railway.app/javascriptLessons')
            .then(res => res.json())
            .then(data => setjavascriptLessons(data))
    }, [])
    return (
        <div className="drawer drawer-mobile">
            <input id="javascript-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-700">
                <div className='py-2 text-center bg-slate-600'>
                    <h2 className='lg:text-5xl text-4xl text-slate-200 '>Javascript Tutorials</h2>
                    <progress class="progress lg:w-5/12 md:w-5/12 w-10/12 bg-white text-white"></progress>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
            <div className="drawer-side">
                <label htmlFor="javascript-sidebar" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-slate-800 text-base-content">

                    {/* { <!-- Sidebar content here -->} */}


                    {javascriptLessons.map(javascriptLesson =>
                        <li key={javascriptLesson._id}><Link className='hover:bg-green-600 hover:text-white text-slate-200 font-bold'
                            to={`/javascript/lesson/${javascriptLesson._id}`}>{javascriptLesson.title}</Link></li>
                    )}

                </ul>

            </div>
        </div>
    );
};

export default Javascript;