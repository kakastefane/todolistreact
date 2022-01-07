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
      name: input,
      done: false
    }]);

    setInput('');
  }

  function handleDeleteTodo() {
    //todo - create function to remove todo from todos list.
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
          <li key={todo.name}>{todo.name} <button onClick={handleDeleteTodo}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
