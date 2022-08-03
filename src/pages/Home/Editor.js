import React from 'react';
import Lottie from "react-lottie";
import code from '../../assets/code.json'

const Editor = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: code,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className='flex flex-col bg-slate-700 justify-center items-center lg:py-16 py-8'>
            <div className='text-center text-slate-200'>
                <h1 className='lg:text-6xl text-4xl font-bold mb-4'>Code Editor</h1>
                <h1 className='text-xl mb-10'>With our online code editor, you can edit code and view the result in your browser</h1>
            </div>
            <div className='lg:w-8/12 lg:h-8/12 lg:p-0 p-2'>
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

export default Editor;