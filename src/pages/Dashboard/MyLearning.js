import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteLessonModal from './DeleteLessonModal';
import LessonRow from './LessonRow';

const MyLearning = () => {
    const [user] = useAuthState(auth)
    const [deleteConfirm, setDeleteConfirm] = useState(null)
    const { isLoading, data: lessons, refetch } = useQuery(['lessons'], () => fetch(`https://floating-peak-19260.herokuapp.com/bookmark/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='p-6 pb-20 bg-slate-700'>
            <div className='py-12 text-center text-slate-200'>
                <div class="indicator">
                    <span class="indicator-item badge badge-accent font-bold">{lessons?.length}</span>
                    <h1 className='text-4xl font-bold '>Your Lessons</h1>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {
                    lessons.map((lesson, index) => <LessonRow
                        key={lesson._id}
                        content={lesson}
                        index={index}
                        setDeleteConfirm={setDeleteConfirm}
                        refetch={refetch}
                    ></LessonRow>)
                }
            </div>
            {
                deleteConfirm && <DeleteLessonModal
                    deleteConfirm={deleteConfirm}
                    setDeleteConfirm={setDeleteConfirm}
                    refetch={refetch}
                ></DeleteLessonModal>
            }
        </div>

        // <div>
        //     <h1 className='text-3xl text-slate-200 font-bold text-center p-4'>Your Learning</h1>
        //     <div>
        //         <div className="overflow-x-auto flex justify-center">
        //             <table className="table w-6/12">
        //                 <thead>
        //                     <tr>
        //                         <th></th>
        //                         <th>Your Lesson</th>
        //                         <th>Action</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {
        //                         lessons.map((lesson, index) => <LessonRow
        //                             key={lesson._id}
        //                             content={lesson}
        //                             index={index}
        //                             setDeleteConfirm={setDeleteConfirm}
        //                             refetch={refetch}
        //                         ></LessonRow>)
        //                     }
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        //     {
        //         deleteConfirm && <DeleteLessonModal
        //             deleteConfirm={deleteConfirm}
        //             setDeleteConfirm={setDeleteConfirm}
        //             refetch={refetch}
        //         ></DeleteLessonModal>
        //     }
        // </div>
    );
};

export default MyLearning;