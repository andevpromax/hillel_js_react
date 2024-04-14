import React, { useState, useEffect, Link } from 'react';
import { getList } from '../../../services/todoService';

export default function ToDoList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      let todo = await getList();
      setList(todo.slice(0, 10));
    })();
  }, []);

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <a href={`todo/${item.id}`}>{item.title}</a>
          {/* <Link to={`/todo/${item.id}`}>{item.title}</Link> */}
        </li>
      ))}
    </ul>
  );
}
