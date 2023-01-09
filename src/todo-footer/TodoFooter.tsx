import React, { FC } from 'react';

import './todoFooter.css';

interface Data {
    filters: any,
    items: number,
    clearComplete: () => void,
    showAll: () => void,
    showActive: () => void,
    showCompleted: () => void,
}


const TodoFooter : FC<Data> = ({filters, items, clearComplete, showAll, showActive, showCompleted}) => {
    const [all, completed, active] = filters;

    return(
        <footer className="footer">
            <span className="todo-count">{items} items left</span>
            <ul className="filters">
                <li>
                    <button className={all.active ? "active" : ""} onClick={() => showAll()}>{all.body}</button>
                </li>
                <li>
                    <button className={active.active ? "active" : ""} onClick={() => showActive()}>{active.body}</button>
                </li>
                <li>
                    <button className={completed.active ? "active" : ""} onClick={() => showCompleted()}>{completed.body}</button>
                </li>
            </ul>
            <button onClick={() => clearComplete()} className="clear-completed">Clear completed</button>
        </footer>
    );
}

export default TodoFooter;