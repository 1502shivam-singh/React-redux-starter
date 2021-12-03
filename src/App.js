import React from 'react';
import { Counter } from './features/counter/Counter';
import { Todolist } from './features/todolist/Todolist';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Todolist />
    </div>
  );
}

export default App;
