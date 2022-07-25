import React from 'react';

const HtmlRow = ({ lesson, index, setDeleteConfirm, setUpdateHtml, refetch }) => {
    return (

        <tr class="hover">
            <th>{index + 1}</th>
            <td>{lesson.title}</td>
            <td>
                <label onClick={() => setUpdateHtml(lesson)} for="update-html-modal" class="btn btn-link">Edit</label>
            </td>
            <td>
                <label onClick={() => setDeleteConfirm(lesson)} for="delete-html-modal" class="btn bg-red-500 border-0 btn-sm modal-button">Delete</label>
            </td>
        </tr>

    );
};

export default HtmlRow;