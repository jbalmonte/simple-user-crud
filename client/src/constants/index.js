
export const MODAL = {
    'add user': {
        successBtnType: 'submit',
        successText: 'Add',
        size: '',
        readOnly: false,
        id: 'add-user-modal',
        method: 'POST',
        path: _ => '/users',
        toastMsg: 'User added successfully'
    },
    view: {
        successText: 'Okay',
        successBtnType: 'button',
        readOnly: true,
        id: 'view-modal'
    },
    update: {
        successBtnType: 'button',
        successText: 'Update',
        readOnly: false,
        id: 'update-modal',
        method: 'PUT',
        path: id => `/users/${id}`,
        toastMsg: 'User updated successfully'
    },
    delete: {
        readonly: false,
        successBtnType: 'submit',
        successText: 'Delete',
        size: 'modal-sm',
        id: 'delete-modal',
        method: 'DELETE',
        path: id => `/users/${id}`,
        toastMsg: 'User deleted successfully'
    }
}