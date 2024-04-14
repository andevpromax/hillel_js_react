import React, { useState, useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <label>
      Theme mode switcher
      <input
        type='checkbox'
        defaultChecked={theme === 'light'}
        onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
      />
    </label>
  );
}
