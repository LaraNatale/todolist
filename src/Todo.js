import React, { useState } from 'react';
import List from './components/List/list';
import Form from './components/Form/form';

const Todo = () => {
  
  const [itemsList, setItemsList] = useState ([]);

  const onAddItem = (newItem) => {
    setItemsList([...itemsList, newItem]);
  }

  const deleteItem = (item) => {
    const filteredList = itemsList.filter(i => i!==item);
    setItemsList(filteredList);
  }

  return (
    <div className="todo-wrapper">
      <h1>TO DO List</h1>
      
      <Form onAddItem={onAddItem}/>
      <List items={itemsList} onDelete={deleteItem}/>  
    </div>
  );
}



export default Todo;
