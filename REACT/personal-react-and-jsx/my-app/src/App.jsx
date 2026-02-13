import Chai from "./Chai"

function App() {    // how to inject variales in jsx as it is js

  const userName = "azeem";

  return (
      <>
      <Chai />
      <h1>{userName} and react</h1>   
      <p>test para</p>
      </>
  )
}

export default App


// {userName} is called evaluated expression. We write the final outcome of JS which is evaluated
/* you can't write JS code inside JSX but you can write the final outcome of JS which is evaluated. We can write any JS expression inside JSX as long as it evaluates to a value. We can't write statements like if, for, while etc. inside JSX but we can write ternary operator which is an expression. We can also write functions inside JSX as long as they return a value. We can also write arrow functions inside JSX as long as they return a value. We can also write IIFE (Immediately Invoked Function Expression) inside JSX as long as it returns a value. */