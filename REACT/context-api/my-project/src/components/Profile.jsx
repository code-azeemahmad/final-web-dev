import React, {useContext} from 'react'
import userContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(userContext);

    // conditional return
    if (!user) {
        return <div>Please Log In</div>
    }
    return <div>Welcome! {user.username}</div>
}

export default Profile

// const {user} access the global state and then we can access it in any component that is wrapped by UserContextProvider.jsx