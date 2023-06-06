import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newItem);
    setTodos((current) => {
      return [
        ...current,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  }
  function toggleCheck(id, completed) {
    setTodos((current) => {
      return current.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((current) => {
      return current.filter((todo) => todo.id !== id);
    });
  }

  console.log(todos);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <h1>TO DO LIST</h1>
      <ul>
        {todos.map((item) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(e) => toggleCheck(item.id, e.target.checked)}
              />
              {item.title}
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
