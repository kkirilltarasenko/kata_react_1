import React, { Component } from 'react';

import './todoInput.css';

interface InputProps {
    createTodo: (todo: object) => void,
}

interface InputState {
    input: string
}


export default class TodoInput extends Component<InputProps, InputState> {
    constructor (props: InputProps) {
        super(props);
        this.state = {input: ''}
    }

    onInputChange = (e: any) : void => {
        this.setState({
            input: e.target.value
        });
    }

    onInputEnter = (e: any) : void => {
        if (e.code === 'Enter') {
            const newTodo = {
                id: Math.random(),
                body: this.state.input,
                completed: false,
                vision: true,
                edit: false
            }

            this.props.createTodo(newTodo);

            this.setState({ input: '' });
        }
    }

    render() {
        return <input
            className="new-todo"
            value={this.state.input}
            onChange={e => this.onInputChange(e)}
            onKeyDown={e => this.onInputEnter(e)}
            placeholder="What needs to be done?"
            autoFocus
        />;
    }
}