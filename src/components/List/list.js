import React from 'react';
import '../List/list.css';

const List = (props) => {


 return( 
        <ul className="todo-list">
            {props.items.map(item => (
            <li className="item-style" >
                <input type="checkbox" />{item}
                <button key = {item} onClick={props.onDelete(item)}>Delete</button>
            </li> ))}
        </ul>
    )
}

export default List;