import React from 'react';
import { toast } from 'react-toastify';

const AddJavascript = () => {
    const handleAddJavascriptContent = event => {
        event.preventDefault()
        const javascriptContent = {
            title: event.target.title.value,
            subTitle: event.target.subTitle.value,
            description: event.target.description.value,
            exampleImg: event.target.exampleImg.value,
            note: event.target.note.value
        }
        fetch('https://ucoders-server.vercel.app/javascriptLessons', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(javascriptContent)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Content Added Successfully!')
                    event.target.title.value = ''
                    event.target.subTitle.value = ''
                    event.target.description.value = ''
                    event.target.exampleImg.value = ''
                    event.target.note.value = ''
                }
            })
    }
    return (
        <div className='flex justify-center items-center my-6 lg:mx-0 mx-4'>
            <div class="card pr-8 lg:w-3/5 shadow-xl text-center bg-slate-300">
                <h1 className='text-3xl text-slate-700 my-4 font-bold'>Add a New Javascript Lesson</h1>
                <form onSubmit={handleAddJavascriptContent} className='text-center'>
                    <input type="text" placeholder="Add Your Content Title" class="input input-bordered input-lg w-full mb-4 mx-4" name='title' required />
                    <input type="text" placeholder="Add Your Content Sub Title" class="input input-bordered input-lg w-full mb-4 mx-4" name='subTitle' required />
                    <textarea type="text" placeholder="Add Your Content Description" class="input input-bordered input-lg w-full h-36 mb-4 mx-4" name='description' required />
                    <input type="text" placeholder="Add Your Content Example Image URL" class="input input-bordered input-lg w-full mb-4 mx-4" name='exampleImg' required />
                    <input type="text" placeholder="Add Your Note/Tip" class="input input-bordered input-lg w-full mb-4 mx-4" name='note' required />
                    <input type="submit" value="Add Content" className='btn border-0 bg-green-700 mb-4' required />
                </form>
            </div>
        </div>
    );
};

export default AddJavascript;