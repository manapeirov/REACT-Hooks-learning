import React from 'react'
import Table from './Components/Table'
import AddUserForm from './Components/AddUserForm'
import EditUserForm from './Components/EditUserForm'

const App = () => {
    
  
  const usersData = [
      {
        id: 1,
        name: 'Mana',
        username: 'ManaPeirov'
      },
      {
          id: 2,
          name: 'Abbas',
          username:'Abbasynia'
      },
      {
          id: 3,
          name: 'maryam',
          username: 'MarryParry'
      },
    ]
  
  const initialFormState = {
      id: null,
      name: '',
      username: ''
  }

  const [users, setUsers]= React.useState(usersData)

  const [editing, setEditing]= React.useState(false) //make state for whether or not edit mode is turned on

  const [currentUser, setCurrentUser] = React.useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1 
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)
    
    setUsers(users.filter(user => user.id !== id))
  }

  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (

    <div className= "container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
            </div>
        ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser}/>
            </div>
        )}  
        </div>         
        <div className="flex-large">
          <h2>View users</h2>
          <Table users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>

  )
}

export default App

 
 











 //State e.g 1:
//  class App extends Component {
//   initialState = {
//     title: '',
//     available: false,
//   }

//   state = initialState

//   updateBook = book => {
//     this.setState({ title: book.title, available: book.available })
//   }
// }

//state e.g 2:
// class Form extends Component {
//   initialState = {
//       name: '',
//       job: '',
//   }

//   state = this.initialState

//   handleChange= event => {
//       const { name, value } = event.target
// // name here will correspond to whatever the key is called, either job or name
// // value will be the value of the key, either the value of job key or value of name key
//       this.setState({
//           [name]: value,
//       })
// }
 
 
 
 
 
 
 
 //Originial create-react-app:
 // import React from 'react';
  // import logo from './logo.svg';
  // import './App.css';

  // function App() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }

  // export default App;
