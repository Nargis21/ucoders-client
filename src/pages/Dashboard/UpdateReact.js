import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteReactModal from './DeleteReactModal';
import ReactRow from './ReactRow';
import UpdateReactModal from './UpdateReactModal';

const UpdateReact = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [updateReact, setUpdateReact] = useState(null)

    const { data: lessons, isLoading, refetch } = useQuery(['lessons'], () => fetch('https://floating-peak-19260.herokuapp.com/reactLessons').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-center pb-10'>
            <h1 className='text-3xl text-slate-300 py-10 font-bold'>Update or Remove React Lesson</h1>
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
                            lessons.map((lesson, index) => <ReactRow
                                key={lesson._id}
                                lesson={lesson}
                                index={index}
                                setDeleteConfirm={setDeleteConfirm}
                                setUpdateReact={setUpdateReact}
                                refetch={refetch}
                            ></ReactRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteConfirm && <DeleteReactModal
                    deleteConfirm={deleteConfirm}
                    setDeleteConfirm={setDeleteConfirm}
                    refetch={refetch}
                ></DeleteReactModal>
            }
            {
                updateReact && <UpdateReactModal
                    updateReact={updateReact}
                    setUpdateReact={setUpdateReact}
                    refetch={refetch}
                ></UpdateReactModal>
            }
        </div>
    );
};

export default UpdateReact;