import React from 'react';

const NodeRow = ({ lesson, index, setDeleteConfirm, setUpdateNode, refetch }) => {
    return (

        <tr class="hover">
            <th>{index + 1}</th>
            <td>{lesson.title}</td>
            <td>
                <label onClick={() => setUpdateNode(lesson)} for="update-node-modal" class="btn btn-link">Edit</label>
            </td>
            <td>
                <label onClick={() => setDeleteConfirm(lesson)} for="delete-node-modal" class="btn bg-red-500 border-0 btn-sm modal-button">Delete</label>
            </td>
        </tr>

    );
};

export default NodeRow;