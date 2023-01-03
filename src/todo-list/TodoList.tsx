import React, {FC} from 'react';

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

const TodoList : FC<Todos> = ({data, setComplete, deleteTodo, setEdit, editTodo}) => {
    return (
        <div className="main">
            <ul className="todo-list">
                {data.map(todo =>
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

export default TodoList;