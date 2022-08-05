import React from 'react'
import useToastAction from '../hooks/useToastAction'

export default function Toast({ message }) {
    const toast = useToastAction()
    return (
        <div className="toast" id="toast" style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <div className="toast-header d-flex justify-content-between">
                <strong className="mr-auto">Notification</strong>
                <div>
                    <small>Just now</small>
                    <button type="button" onClick={() => toast('hide')} className="ml-auto mr-2 mb-1 btn-close" data-dismiss="toast" aria-label="Close" />
                </div>
            </div>
            <div className="toast-body">
                {message}
            </div>
        </div>
    )
}
