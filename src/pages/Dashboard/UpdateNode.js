import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteNodeModal from './DeleteNodeModal';
import NodeRow from './NodeRow';
import UpdateNodeModal from './UpdateNodeModal';

const UpdateNode = () => {
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const [updateNode, setUpdateNode] = useState(null)

    const { data: lessons, isLoading, refetch } = useQuery(['lessons'], () => fetch('https://ucoders-server.vercel.app/nodeLessons').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-center pb-10'>
            <h1 className='text-3xl text-slate-300 py-10 font-bold'>Update or Remove Node Lesson</h1>
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
                            lessons.map((lesson, index) => <NodeRow
                                key={lesson._id}
                                lesson={lesson}
                                index={index}
                                setDeleteConfirm={setDeleteConfirm}
                                setUpdateNode={setUpdateNode}
                                refetch={refetch}
                            ></NodeRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteConfirm && <DeleteNodeModal
                    deleteConfirm={deleteConfirm}
                    setDeleteConfirm={setDeleteConfirm}
                    refetch={refetch}
                ></DeleteNodeModal>
            }
            {
                updateNode && <UpdateNodeModal
                    updateNode={updateNode}
                    setUpdateNode={setUpdateNode}
                    refetch={refetch}
                ></UpdateNodeModal>
            }
        </div>
    );
};

export default UpdateNode;