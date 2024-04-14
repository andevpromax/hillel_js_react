import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDo/ToDoList.jsx';
import ToDoListAlternativeFilter from './components/ToDo/ToDoListAlternativeFilter.jsx';
import ThemeSwitcher from './components/ThemeSwitcher/index.jsx';
import ThemeContext from './context/ThemeContext.jsx';
import UserContext from './context/UserContext.jsx';
import CountryWeather from './components/CountryWeather/index.jsx';

function App() {
  const [theme, setTheme] = useState(`light`);
  const [user, setUser] = useState('Mike');

  return (
    <div className='App'>
      {/* <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider value={user}>
          <ThemeSwitcher />
          <ToDoListAlternativeFilter user={user} />
        </UserContext.Provider>
      </ThemeContext.Provider> */}

      <hr />
      <hr />

      <CountryWeather />
    </div>
  );
}

export default App;
