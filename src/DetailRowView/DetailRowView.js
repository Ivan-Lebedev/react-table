import React, { useState } from 'react'

export default ({ person }) => {

    const [closeUserInfo, setCloseUserInfo] = useState(true)

    const HideInfoBtn = <button
        type="button"
        className="btn btn-danger mb-3"
        onClick={() => setCloseUserInfo(false)}>
        Close
        </button>

    const showInfoBtn = <button
        type="button"
        className="btn btn-primary mb-3"
        onClick={() => setCloseUserInfo(true)}>
        Open
        </button>

    const userData = (person.address && person.description)
        ? (
            <div>
                <p>Selected User <b>{person.firstName} {person.lastName}</b></p>
                <p><b>Description: </b>{person.description}</p>
                <p>Address: <b>{person.address.streetAddress}</b></p>
                <p>City: <b>{person.address.city}</b></p>
                <p>State: <b>{person.address.state}</b></p>
                <p>Zip: <b>{person.address.zip}</b></p>
                {HideInfoBtn}
            </div>
        )
        : (
            <div>
                <p>Selected User <b>{person.firstName} {person.lastName}</b></p>
                <p><b>No detailed data</b></p>
                {HideInfoBtn}
            </div>
        )

    const displayUserData = closeUserInfo
        ? userData
        : showInfoBtn

    return displayUserData
}