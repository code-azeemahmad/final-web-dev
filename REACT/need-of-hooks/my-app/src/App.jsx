import { useState } from 'react'    // how to propagate changes through react

import './App.css'

function App() {
  
  // let [state, setState] = useState(initialValue);
  let [counterValue, setCountervalue] = useState(0);

  // let counterValue = 0;

  const addValue = () => {
    if (counterValue < 20) {
      setCountervalue(counterValue + 1);
    }
  }

  const removeValue = () => {
    if (counterValue > 0) {
      setCountervalue(counterValue - 1);
    }
  }

  return (
    <>
    <h1>Azeem and React</h1>
    <h2>Counter Value: {counterValue}</h2>

    <button onClick={addValue}>Add Value {counterValue}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counterValue}</button>
    <p>Footer {counterValue}</p>
    </>
  )
}

export default App


/*
major power of react is seen in UI updation. React decides when and where the variables should be updated. If we use normal variables, react will not know when to update the UI. Hence, we need to use state variables which are managed by react. This is where hooks come into play. Hooks allow us to use state and other React features without writing a class. The most commonly used hook is useState, which allows us to add state to functional components.
*/
/* 
On the other hand, in JS, we have to use DOM manipulation again and again to update the UI whenever there is a change in the variable value.
*/

// setCountervalue is a method that updates counterValue
