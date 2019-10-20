import React from 'react';
import TodoListItem from "./todo-list-item";
import './todo-list.css'


const TodoList = ({todoList})=>{
    todoList = todoList.map((item)=>{
        return(
        <li className="list-group-item row align-items-center" key={item.id}>
            <div className="col-4">
            <TodoListItem {...item}/>
            </div>
            <div className="col-4 offset-4">
                <button type="button" className="btn btn-outline-success float-right my-1"><i className="fa fa-exclamation"/></button>
                <button type="button" className="btn btn-outline-danger float-right my-1 mr-1"><i className="fa fa-trash-o"/></button>
            </div>
        </li>)});
    return(
        <ul className="list-group todo-list">
            {todoList}
        </ul>

    );
};

export default TodoList;