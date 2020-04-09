import React from 'react'

const AddUserForm = props => {

    const initialFormState = {
        id: null,
        name: '',
        username: '',
    }

    const [user, setUser] = React.useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({...user, [name]: value })
    }

    const { id, name, username } = user
    const { addUser } = props

    return(
        <form 
            onSubmit = {event => {
                event.preventDefault() //prevents default form submission from firing
                if (!user.name || !user.username) return //validation to make sure empty values cannot be submitted

                addUser(user)
                setUser(initialFormState)
            }}
        >
            <label>Name</label>
                <input 
                    type='text'
                    name='name'
                    id={id}
                    value={name}
                    onChange={handleInputChange}/>
            <label>Username</label>
                <input
                    type='text'
                    name='username'
                    id={id}
                    value={username}
                    onChange={handleInputChange}/>
            <button>Add new user</button>
        </form>
    )

}

export default AddUserForm





// const submitForm = userToAddToUserData => {
//     const { addUser } = props
//     addUser(userToAddToUserData)
//     setUser(initialFormState)
// }