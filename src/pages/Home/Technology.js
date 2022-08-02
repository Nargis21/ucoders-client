import React from 'react';
import Lottie from "react-lottie";
import html from '../../assets/html.json'
import css from '../../assets/css.json'
import javascript from '../../assets/javascript.json'
import react from '../../assets/react.json'
import node from '../../assets/node.json'
import dom from '../../assets/dom.json'
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Technology = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: html,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const defaultOption = {
        loop: true,
        autoplay: true,
        animationData: css,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const defaultOptio = {
        loop: true,
        autoplay: true,
        animationData: javascript,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const defaultOpti = {
        loop: true,
        autoplay: true,
        animationData: react,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const defaultOpt = {
        loop: true,
        autoplay: true,
        animationData: node,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const defaultOp = {
        loop: true,
        autoplay: true,
        animationData: dom,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-slate-700 p-5 gap-5 text-white'>
            <div class="card break-all bg-slate-800 shadow-xl ">
                <div class="card-body">
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <Lottie
                                className="mx-3 mb-3"
                                options={defaultOptions}
                                height={300}
                                width={300}
                            />
                        </div>
                        <h2 class="card-title text-3xl font-bold mb-2">HTML</h2>
                        <h1 className='text-xl'>The language for building web pages</h1>
                        <button className='btn border-0 bg-green-700 mt-4'>
                            <Link to='/html'>Explore Now</Link>
                            <FaAngleDoubleRight className='ml-2'></FaAngleDoubleRight>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card break-all bg-slate-800 shadow-xl ">
                <div class="card-body">
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <Lottie
                                className="mx-3 mb-3"
                                options={defaultOption}
                                height={300}
                                width={300}
                            />
                        </div>
                        <h2 class="card-title text-3xl font-bold mb-2">CSS</h2>
                        <h1 className='text-xl'>The language for styling web pages</h1>
                        <button className='btn border-0 bg-green-700 mt-4'>
                            <Link to='/css'>Explore Now</Link>
                            <FaAngleDoubleRight className='ml-2'></FaAngleDoubleRight>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card break-all bg-slate-800 shadow-xl ">
                <div class="card-body">
                    <div className='flex flex-col justify-center items-center'>
                        <div >
                            <Lottie
                                className="mx-3 mb-3"
                                options={defaultOptio}
                                height={300}
                                width={300}
                            />
                        </div>
                        <h2 class="card-title text-3xl font-bold mb-2">Javascript</h2>
                        <h1 className='text-xl'>The language for programming web pages</h1>
                        <button className='btn border-0 bg-green-700 mt-4'>
                            <Link to='/javascript'>Explore Now</Link>
                            <FaAngleDoubleRight className='ml-2'></FaAngleDoubleRight>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card break-all bg-slate-800 shadow-xl ">
                <div class="card-body">
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <Lottie
                                className="mx-3 mb-3"
                                options={defaultOpti}
                                height={300}
                                width={300}
                            />
                        </div>
                        <h2 class="card-title text-3xl font-bold mb-2">React</h2>
                        <h1 className='text-xl'>React is a JavaScript library for building user interfaces.</h1>
                        <button className='btn border-0 bg-green-700 mt-4'>
                            <Link to='/react'>Explore Now</Link>
                            <FaAngleDoubleRight className='ml-2'></FaAngleDoubleRight>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card break-all bg-slate-800 shadow-xl ">
                <div class="card-body">
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <Lottie
                                className="mx-3 mb-3"
                                options={defaultOpt}
                                height={300}
                                width={300}
                            />
                        </div>
                        <h2 class="card-title text-3xl font-bold mb-2">Node.js</h2>
                        <h1 className='text-xl'>Node.js is an open source server environment.</h1>
                        <button className='btn border-0 bg-green-700 mt-4'>
                            <Link to='/node'>Explore Now</Link>
                            <FaAngleDoubleRight className='ml-2'></FaAngleDoubleRight>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card break-all bg-slate-800 shadow-xl ">
                <div class="card-body">
                    <div className='flex flex-col justify-center items-center'>
                        <div >
                            <Lottie
                                className="mx-3 mb-3"
                                options={defaultOp}
                                height={300}
                                width={300}
                            />
                        </div>
                        <h2 class="card-title text-3xl font-bold mb-2">DOM</h2>
                        <h1 className='text-xl'>The DOM presents a document node objects.</h1>
                        <button className='btn border-0 bg-green-700 mt-4'>
                            <Link to='/dom'>Explore Now</Link>
                            <FaAngleDoubleRight className='ml-2'></FaAngleDoubleRight>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technology;