import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const nav = useNavigate();
  usePageTitle("새 일기 쓰기");
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1);
            }}
            text={"< 뒤로 가기"}
          ></Button>
        }
      ></Header>
      <Editor></Editor>
    </div>
  );
};

export default New;
