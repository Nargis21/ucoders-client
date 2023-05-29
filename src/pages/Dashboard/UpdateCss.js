import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteCssModal from './DeleteCssModal';
import CssRow from './CssRow';
import UpdateCssModal from './UpdateCssModal';

const UpdateHtml = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [updateCss, setUpdateCss] = useState(null)

    const { data: lessons, isLoading, refetch } = useQuery(['lessons'], () => fetch('https://ucoders.up.railway.app/cssLessons').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-center pb-10'>
            <h1 className='text-3xl text-slate-300 py-10 font-bold'>Update or Remove CSS Lesson</h1>
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
                            lessons.map((lesson, index) => <CssRow
                                key={lesson._id}
                                lesson={lesson}
                                index={index}
                                setDeleteConfirm={setDeleteConfirm}
                                setUpdateCss={setUpdateCss}
                                refetch={refetch}
                            ></CssRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteConfirm && <DeleteCssModal
                    deleteConfirm={deleteConfirm}
                    setDeleteConfirm={setDeleteConfirm}
                    refetch={refetch}
                ></DeleteCssModal>
            }
            {
                updateCss && <UpdateCssModal
                    updateCss={updateCss}
                    setUpdateCss={setUpdateCss}
                    refetch={refetch}
                ></UpdateCssModal>
            }
        </div>
    );
};

export default UpdateHtml;