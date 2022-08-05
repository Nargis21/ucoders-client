import React from 'react';
import Lottie from "react-lottie";
import html from '../../assets/dev .json'

const HtmlIndex = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: html,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className='flex justify-center items-center'>
            <div className='lg:w-6/12 lg:h-6/12 '>
                <Lottie
                    className="mx-3 mb-3"
                    options={defaultOptions}
                // height={600}
                // width={700}
                />
            </div>
        </div>
    );
};

export default HtmlIndex;