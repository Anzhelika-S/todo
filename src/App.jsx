import "./App.css";
import Header from "./components/AppHeader";
import TodoList from "./components/TodoList";
import SearchPanel from "./components/SearchPanel";

function App() {
  return (
    <>
      <Header />
      <SearchPanel />
      <TodoList />
    </>
  );
}

export default App;
