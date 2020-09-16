import React from 'react'
import './Table.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'


export default props => {
    const triangleBySort = props.sort === 'asc'
        ? <small><FontAwesomeIcon icon={faCaretUp} /></small>
        : <small><FontAwesomeIcon icon={faCaretDown} /></small>

    const triangleDown = <small><FontAwesomeIcon icon={faCaretDown} /></small>

    return (
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th onClick={props.onSort.bind(null, 'id')} >
                        id {props.sortField === 'id' ? triangleBySort : triangleDown}
                    </th>
                    <th onClick={props.onSort.bind(null, 'firstName')}>
                        firstName {props.sortField === 'firstName' ? triangleBySort : triangleDown}
                    </th>
                    <th onClick={props.onSort.bind(null, 'lastName')}>
                        lastName {props.sortField === 'lastName' ? triangleBySort : triangleDown}
                    </th>
                    <th onClick={props.onSort.bind(null, 'email')}>
                        email {props.sortField === 'email' ? triangleBySort : triangleDown}
                    </th>
                    <th onClick={props.onSort.bind(null, 'phone')}>
                        phone {props.sortField === 'phone' ? triangleBySort : triangleDown}
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.data && props.data.map(item => (
                    <tr
                        key={item.id + item.phone}
                        onClick={props.onRowSelect.bind(null, item)}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}