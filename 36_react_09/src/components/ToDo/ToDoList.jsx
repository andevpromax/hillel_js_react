import React, { useEffect, useState, useCallback } from 'react';
import {
  getList,
  deleteItem,
  updateItem,
  addItem,
  abortFetch,
} from '../../services/toDoServices';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import './style.sass';

export default function ToDoList() {
  console.log('Start ToDoList');

  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    getList().then((data) => {
      setList(data.slice(0, 10));
    });
  }, []);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  useEffect(() => {
    handleFilterList();
  }, [filter, list]);

  // useCallback(() => {}, []);

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

  const handleFilterList = () => {
    if (filter === 'completed') {
      setFilteredList(list.filter((item) => item.completed));
    } else if (filter === 'progress') {
      setFilteredList(list.filter((item) => !item.completed));
    } else if (filter === 'all') {
      setFilteredList(list);
    }
  };

  console.log('Before Return ToDoList');

  const changeTitle = (e) => setTitle(e.target.value);

  // const handleAbortRequest = () => {}

  return (
    <>
      <ToDoForm submitForm={addTask} changeTitle={changeTitle} />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='progress'>In Progress</option>
      </select>
      {filteredList.length ? (
        <ul>
          {filteredList.map((item) => (
            <ToDoItem
              key={item.id}
              item={item}
              getClass={getClass}
              completeItem={completeItem}
              removeItem={removeItem}
            />
          ))}
        </ul>
      ) : null}
      <button onClick={abortFetch}>Abort Request</button>
    </>
  );
}
