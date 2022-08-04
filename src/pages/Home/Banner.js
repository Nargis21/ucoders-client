import React from 'react';
import Lottie from "react-lottie";
import banner from '../../assets/learn.json'

const Banner = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: banner,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className='flex lg:flex-row flex-col gap-6 justify-evenly py-12 items-center bg-slate-800'>
            <div className='lg:text-6xl text-5xl font-bold text-slate-200 leading-normal text-center lg:text-left ml-4'>
                <h1>Learn Code With</h1>
                <h1><span className='text-green-600 font-bold lg:text-9xl text-7xl'>U</span>coders</h1>
                <p className='text-xl pt-4'>"The world's largest web developer site"</p>
            </div>
            <div className=''>
                <Lottie
                    className=" lg:w-3/6 lg:h-3/6"
                    options={defaultOptions}
                // height={700}
                // width={700}
                />
            </div>
        </div>
    );
};

export default Banner;