import React, { useState } from 'react';

const Form = (props) => {
    const [task, setTask] = useState ("");

  const handleInputTask = (event) => {
    let inputTask = event.target.value;
    setTask(inputTask);
  }

  const addItem = (event) => {
    event.preventDefault();
    props.onAddItem(task)
    setTask("");
  }

  const isTaskDefined = () => task==="";

 return (
    <form onSubmit={props.setItemsList}>
        <input type="text" placeholder="Add a task" onChange={handleInputTask} value={task} />
        <button type="submit" onClick={addItem} disabled={isTaskDefined()}>Add</button>
    </form>
 )
}

export default Form;