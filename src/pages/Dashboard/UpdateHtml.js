import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteHtmlModal from './DeleteHtmlModal';
import HtmlRow from './HtmlRow';
import UpdateHtmlModal from './UpdateHtmlModal';

const UpdateHtml = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [updateHtml, setUpdateHtml] = useState(null)

    const { data: lessons, isLoading, refetch } = useQuery(['lessons'], () => fetch('http://localhost:5000/htmlLessons').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-center'>
            <h1 className='text-3xl text-slate-300 py-6'>Update or Remove HTML Lesson</h1>
            <div class="overflow-x-auto flex justify-center items-center px-2">
                <table class="table w-full lg:w-3/5">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Lessons</th>
                            <th>Update</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lessons.map((lesson, index) => <HtmlRow
                                key={lesson._id}
                                lesson={lesson}
                                index={index}
                                setDeleteConfirm={setDeleteConfirm}
                                setUpdateHtml={setUpdateHtml}
                                refetch={refetch}
                            ></HtmlRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteConfirm && <DeleteHtmlModal
                    deleteConfirm={deleteConfirm}
                    setDeleteConfirm={setDeleteConfirm}
                    refetch={refetch}
                ></DeleteHtmlModal>
            }
            {
                updateHtml && <UpdateHtmlModal
                    updateHtml={updateHtml}
                    setUpdateHtml={setUpdateHtml}
                    refetch={refetch}
                ></UpdateHtmlModal>
            }
        </div>
    );
};

export default UpdateHtml;