import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200 flex flex-col justify-center items-center gap-10"
      style={{ backgroundColor: color }}
    >
      <div className="text-blue-600 text-5xl font-bold">Background Changer</div>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setColor("olive")}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          Olive
        </button>
        <button
          onClick={() => setColor("teal")}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          Teal
        </button>
        <button
          onClick={() => setColor("maroon")}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          Maroon
        </button>
        <button
          onClick={() => setColor("navy")}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          Navy
        </button>
        <button
          onClick={() => setColor("purple")}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          Purple
        </button>
        <button
          onClick={() => setColor("black")}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          Black
        </button>
        <button
          onClick={() => setColor("white")}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          White
        </button>
      </div>
    </div>
  );
}

export default App;

/*
onClick={() => setColor("teal")}
why is it important to pass a callback function to the onClick event handler instead of directly calling setColor("teal")?

Passing a callback function to the onClick event handler is important because it allows the function to be executed only when the event occurs (i.e., when the button is clicked).


onClick = {setColor("teal")}    // function is directly executed and onClick receives the return value of setColor which is not needed by onClick(). onClick() needs a function to execute when the event occurs, not the result of a function call.
*/