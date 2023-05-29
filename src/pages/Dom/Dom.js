import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const Dom = () => {
    const [domLessons, setDomLessons] = useState([])
    useEffect(() => {
        fetch('https://ucoders.up.railway.app/domLessons')
            .then(res => res.json())
            .then(data => setDomLessons(data))
    }, [])
    return (
        <div className="drawer drawer-mobile">
            <input id="dom-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-700">
                <div className='py-2 text-center bg-slate-600'>
                    <h2 className='lg:text-5xl text-4xl text-slate-200 '>Dom Tutorials</h2>
                    <progress class="progress lg:w-80 w-64 bg-white text-white"></progress>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
            <div className="drawer-side">
                <label htmlFor="dom-sidebar" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-slate-800 text-base-content">

                    {/* { <!-- Sidebar content here -->} */}


                    {domLessons.map(domLesson =>
                        <li key={domLesson._id}><Link className='hover:bg-green-600 hover:text-white text-slate-200 font-bold'
                            to={`/dom/lesson/${domLesson._id}`}>{domLesson.title}</Link></li>
                    )}

                </ul>

            </div>
        </div>
    );
};

export default Dom;