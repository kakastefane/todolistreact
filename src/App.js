import { useState, useEffect } from 'react';

import { PlusIcon, XIcon } from '@heroicons/react/solid';
import './App.css';

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
    <div className='app'>
      <h1 className='app__title'>Todo List</h1>
      <form className='form' onSubmit={handleTodos}>
        <input
          className='form__input'
          type="text"
          placeholder="Enter the task name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button className='form__button' type="submit">
          <PlusIcon /> add
        </button>
      </form>
      <ul className='todolist'>
        {todos.map(todo => (
          <li className='todolist__item' key={todo.id}>
            {todo.name}
            <button className='todolist__button' value={todo.id} onClick={handleDeleteTodo}>
              <XIcon /> del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
