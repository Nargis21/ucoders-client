import React from 'react';
import { toast } from 'react-toastify';

const DeleteLessonModal = ({ deleteConfirm, setDeleteConfirm, refetch }) => {
    const { _id } = deleteConfirm
    const handleLessonDelete = () => {
        fetch(`https://ucoders.up.railway.app/bookmark/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Content deleted Successfully!`)
                    setDeleteConfirm(null)
                    refetch()
                }
                else {
                    toast.error(`Failed to delete content!`)
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="delete-lesson-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure want to delete this lesson from Your Bookmark?</h3>
                    <div class="modal-action">
                        <button className='btn btn-error  px-6 btn-sm' onClick={handleLessonDelete}>Delete</button>
                        <label for="delete-lesson-modal" class="btn px-6 btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteLessonModal;