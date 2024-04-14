import React from 'react';

export default function ToDoItem({ item, getClass, completeItem, removeItem }) {
  return (
    <li onClick={() => completeItem(item)} className={getClass(item)}>
      {item.title}
      <button onClick={(e) => removeItem(e, item.id)}>Remove</button>
    </li>
  );
}
