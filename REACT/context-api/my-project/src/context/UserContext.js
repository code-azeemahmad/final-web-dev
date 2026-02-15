// extension is js, file is written in pure Javacript
// state managemnent is applied in almost all projects
// Context API is used to share data between components without passing props (prop drilling) manually at every level.

import React from "react";

const userContext = React.createContext();

export default userContext;

// each context is a provider
// all the components in a wrapper get a access to global userContext 
