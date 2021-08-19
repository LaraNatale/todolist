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
    <form className="form-wrapper" onSubmit={props.setItemsList}>
        <input className="text-style" type="text" placeholder="Add a task" onChange={handleInputTask} value={task} />
        <button className="mdc-button mdc-button--raised button-style" type="submit" onClick={addItem} disabled={isTaskDefined()}>
          <span className="mdc-button__label">Add</span>
        </button>
    </form>
 )
}

export default Form;