import React from 'react'

export default ({ person }) => {
    const userData = (person.address && person.description)
        ? (
            <div>
                <p>Selected User <b>{person.firstName} {person.lastName}</b></p>
                <p><b>Description: </b>{person.description}</p>
                <p>Address: <b>{person.address.streetAddress}</b></p>
                <p>City: <b>{person.address.city}</b></p>
                <p>State: <b>{person.address.state}</b></p>
                <p>Zip: <b>{person.address.zip}</b></p>
            </div>
        )
        : (
            <div>
                <p>Selected User <b>{person.firstName} {person.lastName}</b></p>
                <p><b>No detailed data</b></p>
            </div>
        )

    return userData
}