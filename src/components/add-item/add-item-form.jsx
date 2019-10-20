import React from 'react';
import './add-item.css'

const AddItem = ({onAdded})=>{
    return(
        <div className="mt-3 d-flex">
            <div className="input-group mr-1">
                <input type="text" className="form-control" placeholder="What needs to be done?"/>
            </div>
            <button className="btn btn-outline-secondary" onClick={onAdded}>Add</button>
        </div>
    )
};
export default AddItem;