import React, { Component } from 'react';

/* Components */
import TodoInput from './todo-input/TodoInput';

import './todoHeader.css';

interface Header {
    createTodo: (todo: object) => void
}


export default class TodoHeader extends Component<Header> {
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoInput createTodo={this.props.createTodo}/>
            </header>
        );
    }
}