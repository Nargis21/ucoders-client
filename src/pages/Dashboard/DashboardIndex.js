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
        <div>
            <Lottie
                className="mx-3 mb-3"
                options={defaultOptions}
            // height={700}
            // width={700}
            />
        </div>
    );
};

export default DashboardIndex;