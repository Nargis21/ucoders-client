import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user, index, refetch, setDeleteConfirm, setMakeAdmin, setRemoveAdmin }) => {
    const { email, role } = user

    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role === 'admin' ? <button className="btn btn-sm mr-4">Already Admin</button> : <label onClick={() => setMakeAdmin(user)} for="make-admin-modal" className="btn btn-sm">Make Admin</label>}
            </td>
            <td>
                {role === 'admin' ?
                    <label onClick={() => setRemoveAdmin(user)} for="remove-admin-modal" className="btn bg-red-500 border-0 btn-sm">Remove Admin</label>
                    : <label onClick={() => setDeleteConfirm(user)} for="delete-user-modal" class="btn bg-red-500 border-0 btn-sm modal-button">Remove User</label>
                }
            </td>
        </tr>

    );
};

export default UsersRow;