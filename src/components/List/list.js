import React from 'react';
import '../List/list.css';

const List = (props) => {


 return(
        <ul className="todo-list">
            {props.items.map(item => (<li className="item-style" key = {item} onClick={props.onDelete(item)}>{item}</li> ))}
        </ul>
    )
}

export default List;