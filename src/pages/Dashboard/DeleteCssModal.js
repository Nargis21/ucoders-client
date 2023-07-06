import React from 'react';
import { toast } from 'react-toastify';

const DeleteCssModal = ({ deleteConfirm, setDeleteConfirm, refetch }) => {
    const { _id } = deleteConfirm
    const handleCssDelete = () => {
        fetch(`https://ucoders-server.vercel.app/cssLessons/${_id}`, {
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
            <input type="checkbox" id="delete-css-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure want to delete this Content?</h3>
                    <div class="modal-action">
                        <button className='btn btn-error  px-6 btn-sm' onClick={handleCssDelete}>Delete</button>
                        <label for="delete-css-modal" class="btn px-6 btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteCssModal;