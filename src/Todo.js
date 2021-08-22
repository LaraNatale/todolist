import React, { useState } from 'react';
import List from './components/List/list';
import Form from './components/Form/form';
import '../src/todo.css';
import './components/Form/form.css';

const Todo = () => {
  
  const [itemsList, setItemsList] = useState ([]);

  const onAddItem = (newItem) => {
    setItemsList([...itemsList, newItem]);
  }

  const deleteItem = (item) => (state) => {
    const filteredList = itemsList.filter(i => i!==item);
    setItemsList(filteredList);
  }


  return (
    <div className="todo-wrapper">
      <h1 className="todo-title">To Do List</h1>
      
      <Form onAddItem={onAddItem}/>
      <List items={itemsList} onDelete={deleteItem} />  
    </div>
  );
}



export default Todo;
