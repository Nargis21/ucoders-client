import React from 'react';
import Lottie from "react-lottie";
import html from '../../assets/learn.json'

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

export default HtmlIndex;