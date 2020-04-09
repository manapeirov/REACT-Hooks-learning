import React, {useState, useEffect} from 'react'


const EditUserForm = (props) => {
    
    const { currentUser, updateUser, setEditing } = props
    const  [user, setUser]= useState(currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({...user, [name]: value })
    }

    const { name, username } = user
    
    return(
        <form
            onSubmit= {event => {
                event.preventDefault()

                updateUser(user.id, user)
            }}
        >
            <label>Name</label>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleInputChange}/>
            <label>Username</label>
                <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleInputChange}/>
            <button >Update user</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
    )
}

export default EditUserForm


