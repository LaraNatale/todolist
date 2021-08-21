import React from 'react';

const List = (props) => {


 return(
        <ul className="todo-list">
            {props.items.map(item => (<li key = {item} onClick={props.onDelete}>{item}</li> ))}
        </ul>
    )
}

export default List;