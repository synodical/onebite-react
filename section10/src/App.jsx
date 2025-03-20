// import { useState} from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import { useReducer } from "react";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Header from "./components/Header";
import Edit from "./pages/Edit";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";

const mockData = [
  {
    id: 1,
    createdAt: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기",
  },
  {
    id: 2,
    createdAt: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기",
  },
  {
    id: 3,
    createdAt: new Date().getTime(),
    emotionId: 3,
    content: "3번 일기",
  },
];
function reducer(state, action) {
  return state;
}
function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  return (
    <>
      {/* <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        text={"123"}
        type={"DEFAULT"}
        onClick={() => {
          console.log("object");
        }}
      /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
