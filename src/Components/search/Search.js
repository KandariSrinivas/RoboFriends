import React from 'react';
import './search.css';

function Search({handleChange}) {
    
    return (
    <div className="input-group mb-3 comp">
        <input type="text" onChange={handleChange} className="form-control" placeholder="Search for your ROBOFRIEND" />
        <div className ="input-group-append">
            <button className ="btn btn-outline-secondary" onClick={handleChange} type="button" id="button-addon2">Search</button>
        </div>
    </div>
    );
}

export default Search;