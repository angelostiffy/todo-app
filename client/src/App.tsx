import React, { useEffect, useState } from 'react';
import './App.css'
import Form from './components/Form';
import TodoList from './components/TodoList';
import { ITodoType } from './components/Todo';
import { getTodos } from './services';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<ITodoType[]>([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState<ITodoType[]>([]);

  const filterTodos = () => {
    switch (filter) {
      case 'completed':
        setFilteredTodos(todos.filter((t) => t.done));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((t) => !t.done));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const getTodosHandler = async () => {
    const response = await getTodos();
    setTodos(response);
  };

  useEffect(() => {
    getTodosHandler().catch(console.error);
  }, []);

  useEffect(() => {
    filterTodos();
  }, [todos, filter]);

  return (
    <div className="App">
      <header>
        <h1>TODOs</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setFilter={setFilter}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}

export default App
