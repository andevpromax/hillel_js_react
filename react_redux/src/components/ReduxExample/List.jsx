import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeItemStatus } from './../../store/list/actions';

export default function List() {
  const dispatch = useDispatch(); //store.dispatch

  const { todoList, listStyleType } = useSelector((state) => state.list);
  const { themeColor } = useSelector((state) => state.theme);

  return (
    <ul style={{ background: themeColor, listStyleType }}>
      {todoList.map((item) => (
        <li key={item.id} style={{ color: item.isDone ? `green` : `red` }}>
          {item.title}
          <button onClick={() => dispatch(changeItemStatus(item.id))}>
            Change Status
          </button>
        </li>
      ))}
    </ul>
  );
}
