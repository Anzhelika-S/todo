import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

export default function TodoList({ todos }) {
  const elems = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li
        key={id}
        className="list-group-item"
      >
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elems}</ul>;
}
