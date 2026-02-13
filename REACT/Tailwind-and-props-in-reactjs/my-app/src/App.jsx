import "./App.css";
import Card from "./components/Card";

function App() {

    let myObj = {
        userName: "bilal",
        age: 21
    }
    console.log("myObj: ", myObj.userName);  
    
    let newArr = [1, 2, 3, 4, 5];
    console.log("newArr: ", newArr[0]);

  return (
    <>
      <h1 className="bg-blue-500 text-white p-4 rounded-lg mb-4">
        Tailwind Test
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card name = "azeem" btnText = "Click me"/>
            <Card name = "ali" btnText = "Click me too"/>
            <Card name = "hamza" btnText = "Click me also"/>
            <Card name = {myObj.userName} someObj = {myObj} someArr = {newArr} btnText = "Click me object"/>      
        </div>
    </>
  );
}

export default App;

// props make a component reusable.
/* want to reuse a card, write its html, css, js once and use it multiple times with different data by passing different props */
// Props = Data passed from one component to another.

/*
you cannot pass an array or an object as a prop without using curly braces. you can only pass a string without using curly braces. if you want to pass an array or an object, you need to use curly braces and then pass the variable that holds the array or object.
*/

/*
function Card({name, btnText = "default value", someObj, someArr})
default value is used when we do not pass any value for that prop. Default value is overridden when we pass a value for that prop.
*/