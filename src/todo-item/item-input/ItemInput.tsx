import React, { Component } from 'react';

interface InputProps {
    id: number,
    value: string,
    editTodo: (id: number, body: string) => void,
}

interface InputState {
    input: string
}

export default class ItemInput extends Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);
        this.state = { input: this.props.value }
    }

    onInputChange = (e : any) : void => {
        this.setState({ input: e.target.value });
    }

    onInputEnter = (e: any) : void => {
        if (e.code === 'Enter') {
            this.props.editTodo(this.props.id, this.state.input);
        }
    }

    render() {
        return <input
            value={this.state.input}
            onChange={(e) => this.onInputChange(e)}
            onKeyDown = {(e) => this.onInputEnter(e)}
            type="text" className="edit"
            autoFocus
        />
    }
}