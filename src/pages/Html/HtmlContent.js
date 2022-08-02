import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Content = () => {

    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [htmlLesson, setHtmlLesson] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/htmlLessons/${id}`)
            .then(res => res.json())
            .then(data => setHtmlLesson(data))
    }, [id])

    const handleBookmark = () => {
        const bookmarkContent = {
            email: user.email,
            type: 'node',
            lesson: htmlLesson.title
        }
        fetch('http://localhost:5000/bookmark', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
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
            <div className='text-4xl font-semibold flex justify-between'>
                <h1># {htmlLesson.title}</h1>
                <div>
                    <button onClick={handleBookmark} className='btn bg-green-600 border-0'>
                        Add To Bookmark</button>
                </div>
            </div>
            <div className='py-4'>
                <hr />
            </div>
            <div>
                <h1 className='text-3xl font-semibold py-4'>{htmlLesson.subTitle}</h1>
                <div className=''>
                    <h1 className='text-xl'>{htmlLesson.description}</h1>
                </div>
            </div>
            <div className='lg:m-4 p-4 my-4 bg-slate-500 rounded'>
                <h1 className='text-3xl font-semibold py-4'>Example:</h1>
                <img src={htmlLesson.exampleImg} alt="" />
                <button className='btn border-0 bg-green-700 mt-4'>
                    <Link to='/login'>Try it Yourself</Link>
                    <FaAngleDoubleRight className='ml-2'></FaAngleDoubleRight>
                </button>
            </div>
            <div className='bg-amber-100 m-6 p-6 text-black'>
                <h1> <span className='font-bold'>Note:</span> {htmlLesson.note}</h1>
            </div>
        </div>
    );
};

export default Content;