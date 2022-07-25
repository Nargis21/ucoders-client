import React from 'react';
import { toast } from 'react-toastify'

const UpdateHtmlModal = ({ updateHtml, setUpdateHtml, refetch }) => {
    const handleUpdateHtml = event => {
        event.preventDefault()
        const lesson = {
            title: event.target.title.value,
            subTitle: event.target.subTitle.value,
            description: event.target.description.value,
            exampleImg: event.target.exampleImg.value,
            note: event.target.note.value
        }

        fetch(`http://localhost:5000/htmlLessons/${updateHtml._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(lesson)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Content Updated!')
                    setUpdateHtml(null)
                    refetch()
                }
            })


    }
    return (
        <div>
            <input type="checkbox" id="update-html-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-slate-700 text-3xl text-center mb-2">Update Content</h3>
                    <form onSubmit={handleUpdateHtml} className='w-full text-center'>
                        <input type="text" placeholder="Add Your Content Title" class="input input-bordered input-lg w-full mb-4 " name='title' />
                        <input type="text" placeholder="Add Your Content Sub Title" class="input input-bordered input-lg w-full mb-4" name='subTitle' />
                        <textarea type="text" placeholder="Add Your Content Description" class="input input-bordered input-lg w-full h-36 mb-4" name='description' />
                        <input type="text" placeholder="Add Your Content Example Image URL" class="input input-bordered input-lg w-full mb-4 " name='exampleImg' />
                        <input type="text" placeholder="Add Your Note/Tip" class="input input-bordered input-lg w-full mb-4 " name='note' />
                        <input type="submit" value="Update Content" className='btn btn-sm border-0 bg-green-700 mb-4' />
                    </form>

                    <div className="modal-action">
                        <label htmlFor="update-html-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateHtmlModal;