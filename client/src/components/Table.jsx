/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import ActionButtons from './ActionButtons'


export default function Table({ setModal, users, fetchUsers, loading }) {
    const columns = ['id', 'name', 'age', 'gender', 'email', 'contact_number', 'address']


    useEffect(() => fetchUsers(), [])


    return (
        <div
            className="card my-5 mx-auto shadow-sm"
            style={{ maxWidth: '80%' }}
        >

            <div
                className="card-header d-flex justify-content-between p-3 align-items-center text-light bg-primary text-center">
                <div className="mx-auto ">
                    <div className='d-flex align-items-center gap-1'>
                        <i className="fas fa-user-alt"></i>
                        USER RECORD
                    </div>
                </div>
                <div data-bs-toggle="tooltip" data-bs-title="Add User">
                    <button
                        className="btn btn-light btn-md btn-sm"
                        data-bs-target="#add-user-modal"
                        type="button"
                        data-bs-toggle="modal"
                        onClick={() => setModal({ type: 'add user' })}
                    >
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
            <div className="card-body bg-light px-5 py-4">

                <table className="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            {
                                columns.concat('actions').map((column, i) => (
                                    <th key={i} className="py-3 text-center">{column.toUpperCase()}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {

                            !loading && users?.length ?
                                users.map(user => (
                                    <tr key={user.id}>
                                        {
                                            columns.map((column, i) =>
                                                <td key={i} className="text-center">{user[column]}</td>)
                                        }
                                        <ActionButtons setModal={setModal} userId={user.id} />
                                    </tr>
                                )) :
                                <tr>
                                    <td colSpan={8} className="text-center">
                                        <em>
                                            {loading ? 'Loading data...' : 'No users to display'}
                                        </em>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
