import React, { Component } from 'react';

import './todoFooter.css';

interface Data {
    filters: any,
    items: number,
    clearComplete: () => void,
    showAll: () => void,
    showActive: () => void,
    showCompleted: () => void,
}


export default class TodoFooter extends Component<Data> {
    render() {
        const [ all, completed, active ] = this.props.filters
        const items = this.props.items;
        const clearCompleted = this.props.clearComplete;
        const showAll = this.props.showAll;
        const showActive = this.props.showActive;
        const showCompleted = this.props.showCompleted;

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
                <button onClick={() => clearCompleted()} className="clear-completed">Clear completed</button>
            </footer>
        );
    }
}