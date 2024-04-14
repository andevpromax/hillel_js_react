import React, { useState, useEffect } from 'react';
import { getListItem } from '../services/todoService';
import { useParams } from 'react-router-dom';

export default function ToDoItem() {
  const { id } = useParams();
  const [task, setTask] = useState({});

  useEffect(() => {
    (async () => {
      let item = await getListItem(id);
      setTask(item);
    })();
  }, [id]);

  return <div>ToDoItem: {task.title}</div>;
}
