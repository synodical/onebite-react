import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import { useReducer, useRef, createContext } from "react";
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
    createdAt: new Date("2025-03-01").getTime(),
    emotionId: 1,
    content: "1번 일기",
  },
  {
    id: 2,
    createdAt: new Date("2025-03-23").getTime(),
    emotionId: 2,
    content: "2번 일기",
  },
  {
    id: 3,
    createdAt: new Date("2025-04-01").getTime(),
    emotionId: 3,
    content: "3번 일기",
  },
  {
    id: 4,
    createdAt: new Date("2025-04-02").getTime(),
    emotionId: 4,
    content: "4번 일기",
  },
  {
    id: 5,
    createdAt: new Date("2025-04-05").getTime(),
    emotionId: 5,
    content: "5번 일기",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) => {
        if (item.id === action.data.id) {
          return {
            ...item,
            content: action.data.content,
          };
        }
        return item;
      });
    case "DELETE":
      return state.filter((item) => item.id !== action.data.id);
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const idRef = useRef(0);
  const [data, dispatch] = useReducer(reducer, mockData);
  // 새로운 일기 추가
  const onCreate = (emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdAt: new Date().getTime(),
        emotionId: emotionId,
        content: content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        content,
      },
    });
  };
  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id,
      },
    });
  };
  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
