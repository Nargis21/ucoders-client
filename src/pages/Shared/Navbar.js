import React from 'react';
import logo from '../../images/logo.png'
import { FaHome, FaLaptopCode, FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = [
        <>
            <li className='hover:bg-green-600 hover:rounded-md'><Link to='/'><FaHome className='text-2xl'></FaHome></Link></li>
            <li className='hover:bg-green-600 hover:rounded-md'><Link to='/html'>HTML</Link></li>
            <li className='hover:bg-green-600 hover:rounded-md'><Link to='/css'>CSS</Link></li>
            <li className='hover:bg-green-600 hover:rounded-md'><Link to='/javascript'>JAVASCRIPT</Link></li>
            <li className='hover:bg-green-600 hover:rounded-md'><Link to='/dom'>DOM</Link></li>
            <li className='hover:bg-green-600 hover:rounded-md'><Link to='/dashboard'>Dashboard</Link></li>
        </>
    ]

    return (
        <div>
            <div class="navbar bg-slate-900 px-4">
                <div class="navbar-start ">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={logo} alt="" />
                        <h1 className='font-semibold text-xl text-white'> <span className='text-green-700 text-3xl '>U</span>coders</h1>
                    </div>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="text-white menu menu-horizontal p-0">
                        {navLinks}
                    </ul>
                </div>
                <div class="navbar-end">
                    <FaSearch className='text-2xl text-white mr-4 hidden lg:flex'></FaSearch>
                    <FaLaptopCode className='text-2xl text-white mr-4 hidden lg:flex'></FaLaptopCode>
                    <input type="checkbox" id='toggle' class="toggle mr-4" />
                    <button className='btn bg-green-600'>
                        <Link to='/login'>Login</Link>
                    </button>
                </div>
            </div>
            <div className="navbar-end bg-slate-900 w-full">
                <label htmlFor="html-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;