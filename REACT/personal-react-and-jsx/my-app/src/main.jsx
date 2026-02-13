import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './Chai.jsx'

// function MyApp() {
//     return (
//         <>
//         <Chai />
//         <h1>code-azeem and react | chai</h1>
//         <p>test para</p>
//         </>
//     )
// }

// const ReactElement = {    // why this does not run though it is a object but it is not a react element object because it does not have the type and props properties which are required for a react element object. It is just a normal object.
//     type: "a",
//     props: {
//         href: "https://www.google.com",
//         target: "_blank",
//     },
//     children: "click me to visit Google",
// }

const anotherUser = "code-azeem";

const ReactElement = React.createElement(   // react element object (babel transpiler injects createElement function bts)
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'click me to visit Google',
  anotherUser   // variable injection comes after building tree
)

// JS SYNTAX
// {
//   (can't insert if-else in object)
// }


const AnotherReactElement = (   // converts to an object like ReactElement
  <a href='https://www.google.com' target='_blank'>Visit Google from here</a>
)


createRoot(document.getElementById('root')).render(     // for react render function, we need to pass a react element object
    // <MyApp />
    ReactElement
    // AnotherReactElement
    // ReactElement
    // <App />
)

/* react uses a bundler which does magic behind the scenes.
converts 
        const reactElement = {
            type: "a",
            props: {
                href: "https://www.google.com",
                target: "_blank",
            },
            children: "click me to visit Google",
        }
to
        <>
        <h1>code-azeem and react</h1>
        <p>test para</p>
        </>
*/
/*
react does not understand html, beacause it is JS
so the <MyApp /> can be written as MyApp() but it is not the same as MyApp() because MyApp() is a function call and <MyApp /> is a react element which is an object. So react does some magic behind the scenes to convert <MyApp /> to MyApp() and then to the react element object. This is done by the bundler which is used in react. The bundler is responsible for converting the JSX code to JavaScript code which can be understood by the browser. The bundler also does some optimizations to make the code run faster.
*/
