import React from 'react';
import { toast } from 'react-toastify';

const AddHtml = () => {
    const handleAddHtmlContent = event => {
        event.preventDefault()
        const htmlContent = {
            title: event.target.title.value,
            subTitle: event.target.subTitle.value,
            description: event.target.description.value,
            exampleImg: event.target.exampleImg.value,
            note: event.target.note.value
        }
        fetch('http://localhost:5000/htmlLessons', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(htmlContent)
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
        <div className='flex justify-center items-center my-6'>
            <div class="card pr-8 lg:w-3/5 shadow-xl text-center bg-slate-300">
                <h1 className='text-3xl text-slate-700 my-4 font-bold'>Add a New HTML Lesson</h1>
                <form onSubmit={handleAddHtmlContent} className='text-center'>
                    <input type="text" placeholder="Add Your Content Title" class="input input-bordered input-lg w-full mb-4 mx-4" name='title' />
                    <input type="text" placeholder="Add Your Content Sub Title" class="input input-bordered input-lg w-full mb-4 mx-4" name='subTitle' />
                    <textarea type="text" placeholder="Add Your Content Description" class="input input-bordered input-lg w-full h-36 mb-4 mx-4" name='description' />
                    <input type="text" placeholder="Add Your Content Example Image URL" class="input input-bordered input-lg w-full mb-4 mx-4" name='exampleImg' />
                    <input type="text" placeholder="Add Your Note/Tip" class="input input-bordered input-lg w-full mb-4 mx-4" name='note' />
                    <input type="submit" value="Add Content" className='btn border-0 bg-green-700 mb-4' />
                </form>
            </div>
        </div>
    );
};

export default AddHtml;