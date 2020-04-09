import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
    )
}



const TableBody = props => {
    const { users, deleteUser, editRow } = props
    return (
        <tbody>
            {users.length > 0 ? ( 
                users.map( user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button className='button muted-button' onClick={() => editRow(user)}>Edit</button>
                            <button className='button muted-button' onClick={() => deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    )
}



const Table = props => {
    return(
        <table>
            <TableHeader/>
            <TableBody users={props.users} deleteUser={props.deleteUser} editRow={props.editRow}/>
        </table>

    )
}




export default Table