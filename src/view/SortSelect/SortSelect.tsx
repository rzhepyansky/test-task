import React from 'react';
import "./SortSelect.css"
import Store from "../../store/Store";

const SortSelect = () => {

    const changeHandler = (value: string) => {
        Store.setCurrentSort(value)
    }

    return (
        <div className="select-wrapper">
            <div>Sort by</div>
            <select name="select" id="select-form"
                onChange={(e) => changeHandler(e.target.value)}
                defaultValue='default'
            >
                <option value="default">Default</option>
                <option value="year-asc">Year ascending</option>
                <option value="year-desc">Year descending</option>
                <option value="price-asc">Price ascending</option>
                <option value="price-desc">Price descending</option>
            </select>
        </div>

    );
};

export default SortSelect;