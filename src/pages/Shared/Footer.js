import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className=' text-slate-200'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-24 py-10 bg-green-400 text-slate-700 text-center lg:text-left'>
                <div className='text-center lg:text-left'>
                    <h1 className='font-bold text-2xl text-slate-700 mb-4 mt-4 lg:mt-0'>TOP LINKS</h1>
                    <Link className='link link-hover' to='/html'>HTML Tutorials</Link><br />
                    <Link className='link link-hover' to='/css'>CSS Tutorials</Link> <br />
                    <Link className='link link-hover' to='/javascript'>Javascript Tutorials</Link><br />
                    <Link className='link link-hover' to='/react'>React.js Tutorials</Link><br />
                    <Link className='link link-hover' to='/node'>Node.js Tutorials</Link><br />
                    <Link className='link link-hover' to='/dom'>Dom Tutorials</Link><br />
                </div>
                <div>
                    <h1 className='font-bold text-2xl text-slate-700 mb-4 mt-4 lg:mt-0'>LEGAL</h1>
                    <Link className='link link-hover' to='/html'>Terms and conditions</Link><br />
                    <Link className='link link-hover' to='/css'>Privacy policy</Link> <br />
                    <Link className='link link-hover' to='/javascript'>Cookie policy</Link><br />
                </div>
                <div>
                    <h1 className='font-bold ml-2 text-2xl text-slate-700 mb-4 mt-4 lg:mt-0'>SOCIAL</h1>
                    <div>
                        <SocialIcon target='_blank' style={{ height: 40, width: 40, marginLeft: '12px' }} fgColor="#ffffff" url="https://web.facebook.com/?_rdc=1&_rdr" network='facebook' />
                        <SocialIcon target='_blank' style={{ height: 40, width: 40, marginLeft: '12px' }} fgColor="#ffffff" url="https://www.linkedin.com/in/nargis-akther-331192241/" network='linkedin' />
                        <SocialIcon target='_blank' style={{ height: 40, width: 40, marginLeft: '12px' }} fgColor="#000000" bgColor="#ffffff" url="https://github.com/Nargis21" network='github' />
                    </div>
                </div>
            </div>
            <div className='p-10 text-center bg-slate-900 text-slate-400'>
                <h1>
                    Ucoders is optimized for learning . Examples might be simplified to improve reading and learning. References, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using Ucoders, you agree to have read and accepted our terms of use, cookie and privacy policy.
                </h1>
                <h1 className='text-sm my-2'>Copyright 2022 by Nargis21. All Rights Reserved.</h1>
                <div className='flex justify-center'>
                    <img width={'50px'} src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;