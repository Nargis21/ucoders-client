import React from 'react';
import Lottie from "react-lottie";
import dashboard from '../../assets/chart.json'

const DashboardIndex = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: dashboard,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className='flex justify-center items-center'>
            <div className='lg:w-8/12 lg:h-8/12'>
                <Lottie
                    options={defaultOptions}
                // height={700}
                // width={700}
                />
            </div>
        </div>
    );
};

export default DashboardIndex;