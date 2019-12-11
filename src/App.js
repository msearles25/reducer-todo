import React, { useReducer } from 'react';
import './App.css';

// components
import TodoList from './components/todo/TodoList';
import TodoForm from './components/todo/TodoForm';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
