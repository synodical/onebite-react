import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List✔</h4>
      <input
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      ></input>
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            ></TodoItem>
          );
        })}
      </div>
    </div>
  );
};
export default List;
