import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import {
  getList,
  deleteItem,
  updateItem,
  addItem,
  abortFetch,
} from '../../services/toDoServices';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import { useLocalStorage } from '../../hooks/common';
import ThemeContext from '../../context/ThemeContext';
import './style.sass';

export default function ToDoListAlternativeFilter({ user }) {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState('');

  const [filter, setFilter] = useLocalStorage('filter', 'all');
  const [mode, setMode] = useLocalStorage('mode', 'light');

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    getList().then((data) => {
      setList(data.slice(0, 10));
    });
  }, []);

  const getFilteredList = () => {
    if (filter === 'all') {
      return list;
    } else if (filter === 'completed') {
      return list.filter((item) => item.completed);
    } else if (filter === 'progress') {
      return list.filter((item) => !item.completed);
    }
  };

  const filteredList = useMemo(() => getFilteredList(), [list, filter]);

  const completeItem = useCallback(async (item) => {
    const updatedItem = await updateItem(item.id, {
      completed: !item.completed,
    });

    setList((prevState) =>
      prevState.map((el) => {
        if (el.id === item.id) el.completed = updatedItem.completed;
        return el;
      })
    );
  }, []);

  const addTask = useCallback(
    async (e) => {
      e.preventDefault();

      const addedItem = await addItem({ title: title, completed: false });
      setList((prevState) => [...prevState, addedItem]);
      e.target.reset();
    },
    [title]
  );

  const removeItem = useCallback(async (e, id) => {
    e.stopPropagation();
    await deleteItem(id);
    setList((prevState) => prevState.filter((item) => item.id !== id));
  }, []);

  const getClass = (item) => {
    return item.completed ? 'completed' : 'progress';
  };

  const changeTitle = (e) => setTitle(e.target.value);

  return (
    <>
      <ToDoForm submitForm={addTask} changeTitle={changeTitle} />
      <select onChange={(e) => setFilter(e.target.value)} defaultValue={filter}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='progress'>In Progress</option>
      </select>
      <hr />

      <hr />
      {list.length ? (
        <ul className={theme}>
          {filteredList.map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              getClass={getClass}
              completeItem={completeItem}
              removeItem={removeItem}
              user={user}
            />
          ))}
        </ul>
      ) : null}
      <button onClick={abortFetch}>Abort Request</button>
    </>
  );
}
