import React, { Component } from 'react';

interface Input {
    id: number,
    value: string,
    editTodo: (id: number, body: string) => void,
}

export default class ItemInput extends Component<Input> {
    state = {
        value: this.props.value
    }

    onValueChange = (e : any) : void => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const input = document.getElementById('item-input');
        if (input !== null) {
            input.addEventListener('keydown', (e: any) : void => {
                const changedBody = this.state.value;
                if (e.keyCode === 13) {
                    this.props.editTodo(this.props.id, changedBody);
                }
            })
        }

        return <input
            id="item-input"
            value={this.state.value}
            onChange={(e) => this.onValueChange(e)}
            type="text" className="edit"
            autoFocus
        />
    }
}