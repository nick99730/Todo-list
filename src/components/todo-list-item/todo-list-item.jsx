import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({todo_item, important}) =>{
    const style={
        color:important ? 'steelblue': 'black',
        fontWeight: important ? 700: 500
    };
    return(
      <span style={style} className="todo_item">
          {todo_item}
      </span>
    );
};
export default TodoListItem;