import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteJavascriptModal from './DeleteJavascriptModal';
import JavascriptRow from './JavascriptRow';
import UpdateJavascriptModal from './UpdateJavascriptModal';

const UpdateJavascript = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [updateJavascript, setUpdateJavascript] = useState(null)

    const { data: lessons, isLoading, refetch } = useQuery(['lessons'], () => fetch('https://ucoders.up.railway.app/javascriptLessons').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-center pb-10'>
            <h1 className='text-3xl text-slate-300 py-10 font-bold'>Update or Remove Javascript Lesson</h1>
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
                            lessons.map((lesson, index) => <JavascriptRow
                                key={lesson._id}
                                lesson={lesson}
                                index={index}
                                setDeleteConfirm={setDeleteConfirm}
                                setUpdateJavascript={setUpdateJavascript}
                                refetch={refetch}
                            ></JavascriptRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteConfirm && <DeleteJavascriptModal
                    deleteConfirm={deleteConfirm}
                    setDeleteConfirm={setDeleteConfirm}
                    refetch={refetch}
                ></DeleteJavascriptModal>
            }
            {
                UpdateJavascript && <UpdateJavascriptModal
                    updateJavascript={updateJavascript}
                    setUpdateJavascript={setUpdateJavascript}
                    refetch={refetch}
                ></UpdateJavascriptModal>
            }
        </div>
    );
};

export default UpdateJavascript;