import { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todolistStorage = localStorage.getItem('@todolist');

    if (todolistStorage) {
      setTodos(JSON.parse(todolistStorage));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@todolist', JSON.stringify(todos));
  }, [todos])

  function handleTodos(e) {
    e.preventDefault();

    setTodos([...todos, {
      id: Math.random() * 9999,
      name: input
    }]);

    setInput('');
  }

  function handleDeleteTodo(e) {
    e.preventDefault();

    const idTodo = e.target.value;

    const todosUpdated = todos.filter(function (item) {
      return item.id != idTodo;
    });

    setTodos(todosUpdated);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleTodos}>
        <input
          type="text"
          placeholder="Enter the task name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.name} <button value={todo.id} onClick={handleDeleteTodo}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
