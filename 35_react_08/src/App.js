import React from 'react';
import './App.css';
import ToDoList from './components/ToDo/ToDoList.jsx';
import ToDoListAlternativeFilter from './components/ToDo/ToDoListAlternativeFilter.jsx';

function App() {
  return (
    <div className='App'>
      <ToDoListAlternativeFilter />
    </div>
  );
}

export default App;
