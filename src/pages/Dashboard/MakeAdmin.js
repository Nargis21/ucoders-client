import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const MakeAdmin = () => {
    const { isLoading, data: users, refetch } = useQuery(['users'], () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-3xl text-slate-200 font-bold text-center p-4'>Make an Admin</h1>
            <div>
                <div className="overflow-x-auto flex justify-center">
                    <table className="table w-6/12">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <UsersRow
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                ></UsersRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;