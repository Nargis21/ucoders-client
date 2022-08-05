import React from 'react';

const DomRow = ({ lesson, index, setDeleteConfirm, setUpdateDom, refetch }) => {
    return (

        <tr class="hover">
            <th>{index + 1}</th>
            <td>{lesson.title}</td>
            <td>
                <label onClick={() => setUpdateDom(lesson)} for="update-Dom-modal" class="btn btn-link">Edit</label>
            </td>
            <td>
                <label onClick={() => setDeleteConfirm(lesson)} for="delete-Dom-modal" class="btn bg-red-500 border-0 btn-sm modal-button">Delete</label>
            </td>
        </tr>

    );
};

export default DomRow;