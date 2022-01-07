import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    'tarefa 1',
    'tarefa 2'
  ]);

  function handleTodos(e) {
    e.preventDefault();

    setTodos([...todos, input]);
  }

  return (
    <div>
      <h1>Tarefas</h1>
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
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
