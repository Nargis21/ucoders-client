import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Html = () => {
    const [htmlLessons, setHtmlLessons] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/htmlLessons')
            .then(res => res.json())
            .then(data => setHtmlLessons(data))
    }, [])
    return (
        <div className="drawer drawer-mobile">
            <input id="html-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-700">
                <div className='py-2 text-center bg-slate-600'>
                    <h2 className='text-5xl text-slate-200 '>HTML Lessons</h2>
                    <progress class="progress w-80 bg-white text-white"></progress>
                </div>
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="html-sidebar" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-slate-800 text-base-content">

                    {/* { <!-- Sidebar content here -->} */}

                    {htmlLessons.map(htmlLesson =>
                        <li key={htmlLesson._id}><Link className='hover:bg-green-600 hover:text-white text-slate-200 font-bold'
                            to={`/html/lesson/${htmlLesson._id}`}>{htmlLesson.title}</Link></li>
                    )}

                </ul>

            </div>
        </div>
    );
};

export default Html;