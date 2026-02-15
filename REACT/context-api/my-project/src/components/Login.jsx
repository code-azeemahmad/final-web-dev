import React, {useState, useContext} from 'react'
import userContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
  return (
    <div> 
        <h2>Login</h2>
        <input 
        type="text" 
        value={username} 
        placeholder='Username' 
        onChange={(e) => setUsername(e.target.value)} 
        />
        <br />
        <input 
        type="text" 
        value={password} 
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        /> 
        <br />
        <button onClick = {handleSubmit}>Submit</button>
        <br />
    </div>
  )
}

export default Login

// {setUser} is passed from prop in UserContextProvider.jsx
// send the username and password to the global state and then we can access it in any component that is wrapped by UserContextProvider.jsx