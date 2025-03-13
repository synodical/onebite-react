import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  // html 태그를 반환하는 함수. 컴포넌트
  // 부모 컴포넌트
  return (
    <>
      <Header></Header>
      <h1>안녕 리액트!</h1>
    </>
  );
}

export default App;
