import React from 'react'

export default function UserInfo({user}) {
    return (
        <div className="row justify-content-center m-3">
            <div className="card text-center col-md-3">
                <div className="card-body">
                    <h5 className="card-title">Logged in as: {user.firstName} {user.lastName}</h5>
                    <h6 className="card-subtitle">{user.email}</h6>
                </div>
            </div>
        </div>
    )
}
