import React from 'react';
import ToDoList from '../components/ToDo/ToDoList/ToDoList';
import Button from '@mui/material/Button';

export default function ToDo() {
  return (
    <div>
      <ToDoList />
      <Button variant='contained'>Hello world</Button>;
    </div>
  );
}
