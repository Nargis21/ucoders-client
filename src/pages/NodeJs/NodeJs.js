import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const NodeJs = () => {
    const [nodeLessons, setNodeLessons] = useState([])
    useEffect(() => {
        fetch('https://floating-peak-19260.herokuapp.com/nodeLessons')
            .then(res => res.json())
            .then(data => setNodeLessons(data))
    }, [])
    return (
        <div className="drawer drawer-mobile">
            <input id="node-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-700">
                <div className='py-2 text-center bg-slate-600'>
                    <h2 className='lg:text-5xl text-4xl text-slate-200 '>Node.Js Tutorials</h2>
                    <progress class="progress lg:w-96 w-72 bg-white text-white"></progress>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>

            </div>
            <div className="drawer-side">
                <label nodeFor="node-sidebar" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-slate-800 text-base-content">

                    {/* { <!-- Sidebar content here -->} */}


                    {nodeLessons.map(nodeLesson =>
                        <li key={nodeLesson._id}><Link className='hover:bg-green-600 hover:text-white text-slate-200 font-bold'
                            to={`/node/lesson/${nodeLesson._id}`}>{nodeLesson.title}</Link></li>
                    )}

                </ul>

            </div>
        </div>
    );
};

export default NodeJs;