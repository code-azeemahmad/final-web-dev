import React from "react";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import userContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <>
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
        </>
    )
}

export default UserContextProvider;

// children has the same concept as outlet