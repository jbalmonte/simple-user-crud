import React, { PureComponent } from 'react'
import Modal from './Modal'

export class Modals extends PureComponent {
    render() {
        const { modal, handleClose, refetch, setToastMsg } = this.props
        return (
            <>
                {
                    ['add user', 'view', 'update', 'delete'].map(type => (
                        <Modal
                            key={type}
                            type={type} userId={modal.userId}
                            activeModal={modal.type}
                            setToastMsg={setToastMsg}
                            refetch={refetch}
                            handleClose={handleClose}
                        />
                    ))
                }
            </>
        )
    }
}

export default Modals