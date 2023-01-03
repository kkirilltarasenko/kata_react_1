import React, { FC } from 'react';

/* Components */
import TodoInput from './todo-input/TodoInput';

import './todoHeader.css';

interface Header {
    createTodo: (todo: object) => void,
}

const TodoHeader : FC<Header> = ({ createTodo }) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <TodoInput 
                createTodo={createTodo}
            />
        </header>
    );
}

export default TodoHeader;