import React from 'react'

export default function Forms(props) {
    const { readOnly, handleChange, user } = props

    return (
        <div className="row g-3">
            <div className="col-8">
                <input
                    type="text"
                    name="name"
                    readOnly={readOnly}
                    className="form-control"
                    placeholder="Name"
                    value={user.name || ''}
                    onChange={handleChange}
                />
            </div>
            <div className="col-4">
                <input
                    type="number"
                    name="age"
                    readOnly={readOnly}
                    className="form-control"
                    placeholder="Age"
                    value={user.age || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="col-8">
                <input
                    type="email"
                    name="email"
                    readOnly={readOnly}
                    className="form-control"
                    placeholder="Email"
                    onChange={handleChange}
                    value={user.email || ''}
                />
            </div>

            <div className="col-4">
                <select
                    value={user.gender || ''}
                    onChange={handleChange}
                    disabled={readOnly}
                    name="gender"
                    className="form-select"
                >
                    <option>Gender</option>
                    <option value="male" >Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <div className="col-12">
                <input
                    type="text"
                    name="contact_number"
                    readOnly={readOnly}
                    className="form-control"
                    placeholder="Contact No."
                    value={user.contact_number || ''}
                    onChange={handleChange}
                />
            </div>

            <div className="col-12">
                <textarea
                    className="form-control"
                    name="address"
                    readOnly={readOnly}
                    placeholder="Address"
                    defaultValue={user.address || ''}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}
