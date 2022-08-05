import React from 'react'

export default function ActionButtons({ userId, setModal }) {

    const handleClick = type => _ => {
        setModal({ type, userId })
    }

    return (
        <>
            <td>
                <div className="d-flex justify-content-around">
                    <span data-bs-toggle="tooltip" data-bs-title="View">
                        <button type="button" onClick={handleClick('view')}
                            data-bs-toggle="modal" data-bs-target="#view-modal"
                            className="btn btn-sm btn-primary mr-1">
                            <i className="fa-solid fa-eye"></i>
                        </button>
                    </span>

                    <span data-bs-toggle="tooltip" data-bs-title="Update">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#update-modal"
                            onClick={handleClick('update')}
                            className="btn btn-warning mr-1 btn-sm">
                            <i className="fa-solid fa-pen-clip"></i>
                        </button>
                    </span>

                    <span data-bs-toggle="tooltip" data-bs-title="Delete">
                        <button type="button" onClick={handleClick('delete')} className="btn btn-danger btn-sm" data-bs-toggle="modal"
                            data-bs-target="#delete-modal">
                            <i className="fa-solid fa-circle-minus"></i>
                        </button>
                    </span>
                </div>
            </td>

        </>
    )
}
