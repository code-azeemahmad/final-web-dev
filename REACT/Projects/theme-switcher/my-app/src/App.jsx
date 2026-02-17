import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  let [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in a theme takes place through js

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
            {/* theme button */}
            <ThemeBtn />

            <div className="w-full max-w-sm mx-auto"></div>
            {/* card */}
            <Card />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;

// darkMode: "class", configuration in tailwind.config.js