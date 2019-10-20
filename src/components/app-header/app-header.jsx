import React from 'react';
import './app-header.css'

const Header = ({todo_count, done_count})=>{
    return(
        <div className="row justify-content-between mb-3">
            <h2>Todo List</h2>
            <div className="counter">
                <p className="mt-4 mb-0">{todo_count} more to do, {done_count} done</p>
            </div>
        </div>
    );
};
export default Header;