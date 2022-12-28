import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

/* Components */
import ItemInput from './item-input/ItemInput';

import './todoItem.css';

interface Todo {
    todo: {
        id: number,
        body: string,
        completed: boolean,
        vision: boolean,
        edit: boolean
    },
    setComplete: (id: number) => void,
    deleteTodo: (id: number) => void,
    setEdit: (id: number) => void,
    editTodo: (id: number, body: string) => void,
}


export default class TodoItem extends Component<Todo> {
    render() {
        const { id, body, completed, vision, edit } = this.props.todo;
        const setComplete = this.props.setComplete;
        const deleteTodo = this.props.deleteTodo;
        const setEdit = this.props.setEdit;
        const editTodo = this.props.editTodo;
        const date = formatDistanceToNow(new Date());

        return !edit ? (
            <li className={vision ? "todo-item" : "hidden"}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={() => setComplete(id)} />
                    <label>
                        <span className={completed ? "completed" : "description"}>{body}</span>
                        <span className="created">created {date}</span>
                    </label>
                    <button onClick={() => setEdit(id)} className="icon icon-edit"></button>
                    <button onClick={() => deleteTodo(id)} className="icon icon-destroy"></button>
                </div>
            </li>
        ) : (
            <li className="editing">
                <ItemInput id={id} value={body} editTodo={editTodo} />
            </li>
        );
    }
}