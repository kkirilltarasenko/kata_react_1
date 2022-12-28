import React, { Component } from 'react';

import './todoInput.css';

interface Input {
    createTodo: (todo: object) => void
}


export default class TodoInput extends Component<Input> {
    state = {
        value: ''
    }

    onEnterClick = (e: any) : void => {
        if (e.keyCode === 13) {
            const todo = {
                id: Math.random(),
                body: this.state.value,
                completed: false,
                vision: true,
                edit: false
            };

            this.props.createTodo(todo);

            this.setState({
                value: ''
            });
        }
    }

    render() {
        const input = document.getElementById('input');
        if (input !== null) {
            input.addEventListener('keydown', this.onEnterClick);
        }

        return <input
            id="input"
            className="new-todo"
            value={this.state.value}
            onChange={(e) => this.setState({value: e.target.value})}
            placeholder="What needs to be done?"
            autoFocus
        />;
    }
}