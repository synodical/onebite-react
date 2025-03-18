import { useState } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <>
      <Viewer count={count}></Viewer>
      <Controller onClickButton={onClickButton}></Controller>
    </>
  );
}

export default App;
