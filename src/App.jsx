import "./App.css";
import Header from "./components/AppHeader";
import TodoList from "./components/TodoList";
import SearchPanel from "./components/SearchPanel";
import ItemStatusFilter from "./components/ItemStatusFilter";

function App() {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ];
  return (
    <div className="todo-app">
      <Header
        toDo={1}
        done={3}
      />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
}

export default App;
