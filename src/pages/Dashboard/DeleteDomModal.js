import React from 'react';
import { toast } from 'react-toastify';

const DeleteDomModal = ({ deleteConfirm, setDeleteConfirm, refetch }) => {
    const { _id } = deleteConfirm
    const handleDomDelete = () => {
        fetch(`https://floating-peak-19260.herokuapp.com/domLessons/${_id}`, {
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
            <input type="checkbox" id="delete-Dom-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure want to delete this Content?</h3>
                    <div class="modal-action">
                        <button className='btn btn-error  px-6 btn-sm' onClick={handleDomDelete}>Delete</button>
                        <label for="delete-Dom-modal" class="btn px-6 btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteDomModal;