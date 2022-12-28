import React, { Component } from 'react';

/* Components */
import TodoItem from '../todo-item/TodoItem';

import './todoList.css';

interface Todos {
    data: Array<{
        id: number,
        body: string,
        completed: boolean,
        vision: boolean,
        edit: boolean
    }>,
    setComplete: (id: number) => void,
    deleteTodo: (id: number) => void,
    setEdit: (id: number) => void,
    editTodo: (id: number, body: string) => void,
}

export default class TodoList extends Component<Todos> {
    render() {
        const todos = this.props.data;
        const setComplete = this.props.setComplete;
        const deleteTodo = this.props.deleteTodo;
        const setEdit = this.props.setEdit;
        const editTodo = this.props.editTodo;

        return (
            <div className="main">
                <ul className="todo-list">
                    {todos.map(todo =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            setComplete={setComplete}
                            deleteTodo={deleteTodo}
                            setEdit={setEdit}
                            editTodo={editTodo}
                        />
                    )}
                </ul>
            </div>
        );
    }
}