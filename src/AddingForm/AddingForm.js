import React, { useState } from 'react'


export default props => {
    const [openPanel, setOpenPanel] = useState(true)
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const submitNewUserData = (e) => {
        e.preventDefault()
        if (id && firstName && lastName && email && phone) {
            props.addNewUserToTable(id, firstName, lastName, email, phone)
            setOpenPanel(true)
            setId('')
            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
        }
    }

    const cancelNewUserData = () => {
        setOpenPanel(true)
        setId('')
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
    }

    const addNewPersonBtn = <button
        className="btn btn-primary mb-3"
        onClick={() => setOpenPanel(false)}>
        Add New Persone
        </button>

    const addNewPersonForm = <form onSubmit={(e) => submitNewUserData(e)}>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th >id </th>
                    <th >firstName</th>
                    <th >lastName</th>
                    <th >email</th>
                    <th >phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="id"
                            onInput={(e) => setId(e.target.value)} /></td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            onInput={(e) => setFirstName(e.target.value)} /></td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            onInput={(e) => setLastName(e.target.value)} /></td>
                    <td>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="email"
                            onInput={(e) => setEmail(e.target.value)} /></td>
                    <td>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="phone"
                            onInput={(e) => setPhone(e.target.value)} /></td>
                </tr>

            </tbody>
        </table>
        <button type="submit" className="btn btn-primary mb-3">Add Persone</button>
        <button
            type="button"
            className="btn btn-danger mb-3 ml-3"
            onClick={() => cancelNewUserData()}>
            Cancel
                </button>
    </form>

    const AddingFormContent = openPanel
        ? addNewPersonBtn
        : addNewPersonForm


    return (
        AddingFormContent
    )
}