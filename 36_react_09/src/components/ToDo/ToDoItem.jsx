import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import UserContext from '../../context/UserContext';

export default function ToDoItem({
  item,
  getClass,
  completeItem,
  removeItem,
  user,
}) {
  const { theme } = useContext(ThemeContext);
  // const user = useContext(UserContext);

  return (
    <li onClick={() => completeItem(item)} className={getClass(item)}>
      {item.title} for {user}
      <button
        onClick={(e) => removeItem(e, item.id)}
        style={{ backgroundColor: theme === `light` ? `grey` : `yellow` }}
      >
        Remove
      </button>
    </li>
  );
}
