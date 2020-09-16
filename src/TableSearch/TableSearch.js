import React, { useState } from 'react'

export default props => {

    const [value, setValue] = useState('')

    const valueChangeHandler = e => {
        setValue(e.target.value.trim())
    }
    const onFormSubmit = e => {
        e.preventDefault()
        props.onSearch(value)
    }

    return (
        <form className="input-group mb-3 mt-3"
            onSubmit={(e) => onFormSubmit(e)}>
            <input
                type="text"
                className="form-control"
                placeholder="Text for search..."
                aria-label="Text for search..."
                aria-describedby="button-addon2"
                value={value}
                onChange={valueChangeHandler} />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    id="button-addon2">
                    Search
                    </button>
            </div>
        </form>
    )
}