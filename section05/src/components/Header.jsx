const Header = () => {
  // 반드시 첫 글자는 대문자
  // 자식 컴포넌트
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};
// 리액트의 모든 컴포넌트는 화면에 렌더링되기 위해
// 앱 컴포넌트(루트 컴포넌트)의 자식 컴포넌트로 포함되어야 한다.
export default Header;
