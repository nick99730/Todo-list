import React from 'react';
import './item-status-filter.css'

const ItemStatusFilter = ()=>{
    return(
        <div className="btn-group col-md-5 p-0" role="group" aria-label="Status filter">
            <button type="button" className="status_btn btn btn-info">All</button>
            <button type="button" className="status_btn btn btn-outline-secondary">Active</button>
            <button type="button" className="status_btn btn btn-outline-secondary">Done</button>
        </div>
    );
};
export default ItemStatusFilter;