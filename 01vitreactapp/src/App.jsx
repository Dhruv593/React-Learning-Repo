import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dev from "./Dev.jsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello There !</h1>
      <Dev/>
    </>
  );
}

export default App;
