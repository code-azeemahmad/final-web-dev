// /* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");

  const passworRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNum) {
      str += "0123456789";
    }
    if (allowChar) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowNum, allowChar, setPassword]);   // optimize setPassword

  const copyPasswordToClipboard = useCallback(() => {
    passworRef.current?.select();
    passworRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);     // window object is not at server side(nextjs)
  }, [password]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    passwordGenerator();
  }, [length, allowChar, allowNum, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passworRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowNum}
              id="numberInput"
              onChange={() => {
                setAllowNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={allowChar}
              id="characterInput"
              onChange={() => {
                setAllowChar((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

/*
useCallback:
  useCallback is a React Hook that lets you cache a function definition between re-renders.

  const cachedFn = useCallback(fn, dependencies)

calls the passwrordGenerator function only when the dependencies change like when you click to add numbers or characters or when you change the length of the password. This can help improve performance by avoiding unnecessary function re-creations on every render.
*/

/*
onChange={() => {
  setAllowNum((prev) => !prev);   // fire a callback to get a access of previous state and return the     opposite of it to toggle the checkbox state
}}
*/

/*
what is the correct way to call the setPassword function?
--> add button and click to call
--> useEffect hook and call it when the dependencies change
 */

/*
useEffect
  useEffect is a React Hook that lets you synchronize a component with an external system.

  useEffect(setup, dependencies?)
*/

/*
useRef
  useRef is a React Hook that lets you reference a value that’s not needed for rendering.

  const ref = useRef(initialValue)
*/

/*
?. is called Optional Chaining in JavaScript. “Only run this if the value exists. Otherwise, don’t crash.”
*/