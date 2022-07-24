import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight, FaHashtag } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const Content = () => {
    const { id } = useParams()
    const [htmlLesson, setHtmlLesson] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/htmlLessons/${id}`)
            .then(res => res.json())
            .then(data => setHtmlLesson(data))
    }, [id])


    return (
        <div className='lg:px-4 px-2 lg:pt-4 text-slate-200'>
            <div className='text-4xl font-semibold flex justity-center items-center'>
                <FaHashtag></FaHashtag>
                <h1>{htmlLesson.title}</h1>
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