import React from 'react';
import './App.css';
import TodoList from "./components/todo-list/todo-list";
import SearchPanel from "./components/search-panel/search-panel";
import Header from "./components/app-header/app-header";
import ItemStatusFilter from "./components/item-status-filter/item-status-filter";
let todoList = [{todo_item:'first',important:true, id:1},
    {todo_item:'second',important:false, id:2},
    {todo_item:'third', important:true, id:3}];

let countsList = {todo_count:1, done_count:3};

function App() {
    return (
        <div className="App container">
            <div className="row d-flex justify-content-center mt-4">
                <div className="col-10 col-lg-5">
                    <Header {...countsList}/>
                    <div className="row mb-3">
                        <SearchPanel/>
                        <ItemStatusFilter/>
                    </div>
                    <TodoList todoList={todoList}/>
                </div>
            </div>
        </div>
    );
}

export default App;
