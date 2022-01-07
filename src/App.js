import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {
      name: 'tarefa 1',
      done: false,
    },
    {
      name: 'tarefa 2',
      done: true,
    }
  ]);

  function handleTodos(e) {
    e.preventDefault();

    setTodos([...todos, input]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleTodos}>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ok</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.name}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
