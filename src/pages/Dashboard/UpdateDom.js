import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteDomModal from './DeleteDomModal';
import DomRow from './DomRow';
import UpdateDomModal from './UpdateDomModal';

const UpdateDom = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [updateDom, setUpdateDom] = useState(null)

    const { data: lessons, isLoading, refetch } = useQuery(['lessons'], () => fetch('https://ucoders-server.vercel.app/domLessons').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-center pb-10'>
            <h1 className='text-3xl text-slate-300 py-10 font-bold'>Update or Remove Dom Lesson</h1>
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
                            lessons.map((lesson, index) => <DomRow
                                key={lesson._id}
                                lesson={lesson}
                                index={index}
                                setDeleteConfirm={setDeleteConfirm}
                                setUpdateDom={setUpdateDom}
                                refetch={refetch}
                            ></DomRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteConfirm && <DeleteDomModal
                    deleteConfirm={deleteConfirm}
                    setDeleteConfirm={setDeleteConfirm}
                    refetch={refetch}
                ></DeleteDomModal>
            }
            {
                updateDom && <UpdateDomModal
                    updateDom={updateDom}
                    setUpdateDom={setUpdateDom}
                    refetch={refetch}
                ></UpdateDomModal>
            }
        </div>
    );
};

export default UpdateDom;