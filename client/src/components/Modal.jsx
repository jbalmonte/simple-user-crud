
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Forms from './Forms'
import { MODAL } from '../constants'
import useShowToast from '../hooks/useToastAction'


export default function Modal({ type, activeModal, userId, setToastMsg, handleClose, refetch }) {
    const {
        id,
        size = '',
        path,
        method,
        successText,
        successBtnType,
        readOnly
    } = MODAL[type] || {}

    const [user, setUser] = useState({})
    const toast = useShowToast()

    useEffect(() => {

        if (userId && activeModal === type && ['view', 'update'].includes(type)) {
            axios
                .get(`/users/${userId}`)
                .then(response => setUser(response.data))
                .catch(error => console.error('ERROR:', error, ['view', 'update'].includes(type), type))
        }

    }, [type, userId, activeModal])

    useEffect(() => () => setUser({}), [])

    const handleChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (type === activeModal && ['update', 'delete', 'add user'].includes(type)) {
            const payload = type === 'delete' ? null : user
            console.log(type, method, path?.(userId), payload)
            axios[method.toLowerCase()](path?.(userId), payload)
                .then(response => {
                    console.log('RESPONSE:', response.data)
                    refetch()
                    toast('show')
                    setToastMsg(response.data?.message)
                })
                .catch(console.error)
        }
        handleClose()
    }


    return (
        <div className={`modal fade ${size}`} role="dialog" tabIndex="-1" id={id}>
            <div className="modal-dialog modal-dialog-centered">
                <form className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{type.toUpperCase()} USER</h5>
                        <button type="button" onClick={handleClose} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            type === 'delete' ?
                                'Are you sure you want to delete this user?' :
                                <Forms
                                    handleChange={handleChange}
                                    readOnly={readOnly}
                                    user={user}
                                />
                        }
                    </div>
                    <div className="modal-footer">
                        {
                            type !== 'view' &&
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleClose}
                                data-bs-dismiss="modal">Close</button>
                        }
                        <button
                            type={successBtnType}
                            data-bs-dismiss="modal"
                            onClick={handleSubmit}
                            className="btn btn-primary"
                        >
                            {successText}
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
}
