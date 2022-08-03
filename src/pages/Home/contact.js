import React from 'react';
import Lottie from "react-lottie";
import mail from '../../assets/email2.json'
import emailjs from '@emailjs/browser';
import { FaFly, FaPlane } from 'react-icons/fa';


const Editor = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i3x8ub3', 'template_52otbsb', e.target, 'vzPMpB6AzBd8B5-YZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: mail,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className='flex lg:flex-row flex-col bg-slate-800 justify-evenly items-center lg:py-16 py-8 w-full'>
            <div className='lg:w-4/12 lg:h-4/12 lg:p-0 p-2'>
                <Lottie
                    className="mx-3 mb-3"
                    options={defaultOptions}
                // height={600}
                // width={700}
                />
            </div>
            <div className='text-center bg-slate-300 p-4 rounded-xl shadow'>
                <h1 className='text-4xl text-slate-800 mb-4'>Get in Touch </h1>
                <div className='w-96'>
                    <form onSubmit={sendEmail} >
                        <input class="input input-bordered  mb-4 w-full max-w-sm" type="text" name='name' placeholder='Name' /><br />
                        <input class="input input-bordered  mb-4 w-full max-w-sm" type="email" name="email" placeholder='Email' /> <br />
                        <input class="input input-bordered  mb-4 w-full max-w-sm" type="text" name="subject" placeholder='Subject' /><br />
                        <textarea class="textarea max-w-sm w-full mb-4 " name="message" placeholder='Your Message' cols="42" rows="4"></textarea> <br />
                        <div className='btn bg-green-600 border-0'>
                            <input type="submit" className='text-xl mr-3' value="Send" />
                            <FaFly></FaFly>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Editor;