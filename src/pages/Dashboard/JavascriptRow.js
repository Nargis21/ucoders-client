import React from 'react';

const JavascriptRow = ({ lesson, index, setDeleteConfirm, setUpdateJavascript, refetch }) => {
    return (

        <tr class="hover">
            <th>{index + 1}</th>
            <td>{lesson.title}</td>
            <td>
                <label onClick={() => setUpdateJavascript(lesson)} for="update-javascript-modal" class="btn btn-link">Edit</label>
            </td>
            <td>
                <label onClick={() => setDeleteConfirm(lesson)} for="delete-javascript-modal" class="btn bg-red-500 border-0 btn-sm modal-button">Delete</label>
            </td>
        </tr>

    );
};

export default JavascriptRow;