import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaAngleDoubleRight, FaBookmark } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const CssContent = () => {

    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [cssLesson, setCssLesson] = useState({})
    useEffect(() => {
        fetch(`https://ucoders-server.vercel.app/cssLessons/${id}`)
            .then(res => res.json())
            .then(data => setCssLesson(data))
    }, [id])

    const handleBookmark = () => {
        {
            !user && toast.error('Please Login')
        }
        const bookmarkContent = {
            email: user.email,
            type: 'css',
            lesson: cssLesson.title
        }
        fetch('https://ucoders-server.vercel.app/bookmark', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(bookmarkContent)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Bookmarked!')
                }
                else {
                    toast.error('Already Bookmarked')
                }
            })
    }


    return (
        <div className='lg:px-4 px-2 lg:pt-4 text-slate-200'>
            <div className='lg:text-4xl  text-3xl font-semibold flex lg:flex-row flex-col gap-2 justify-between'>
                <h1># {cssLesson.title}</h1>
                <div>
                    <button onClick={handleBookmark} className='btn bg-green-600 border-0'>
                        <span className='pr-2'> Add To Bookmark </span><FaBookmark></FaBookmark> </button>
                </div>
            </div>
            <div className='py-4'>
                <hr />
            </div>
            <div>
                <h1 className='lg:text-3xl text-2xl font-semibold py-4'>{cssLesson.subTitle}</h1>
                <div className=''>
                    <h1 className='text-xl'>{cssLesson.description}</h1>
                </div>
            </div>
            <div className='lg:m-4 p-4 my-4 bg-slate-500 rounded'>
                <h1 className='text-3xl font-semibold py-4'>Example:</h1>
                <img src={cssLesson.exampleImg} alt="" />
                <button className='btn border-0 bg-green-700 mt-4'>
                    <Link to='/login'>Try it Yourself</Link>
                    <FaAngleDoubleRight className='ml-2'></FaAngleDoubleRight>
                </button>
            </div>
            <div className='bg-amber-100 m-6 p-6 text-black'>
                <h1> <span className='font-bold'>Note:</span> {cssLesson.note}</h1>
            </div>
        </div>
    );
};

export default CssContent;