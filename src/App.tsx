import React, { Component } from 'react';

/* Components */
import TodoHeader from './todo-header/TodoHeader';
import TodoList from './todo-list/TodoList';
import TodoFooter from './todo-footer/TodoFooter';

import './App.css';

export default class App extends Component {
    state = {
        data: [
            {id: 1, body: 'Go for a walk', completed: false, vision: true, edit: false},
            {id: 2, body: 'Cook dinner', completed: false, vision: true, edit: false},
            {id: 3, body: 'Read a book', completed: false, vision: true, edit: false},
        ],
        filters : [
            {id: 1, body: 'All', active: true},
            {id: 2, body: 'Completed', active: false},
            {id: 3, body: 'Active', active: false},
        ],
        items: 0
    }

    createTodo = (todo: object) : void => {
        this.setState({
            data: [...this.state.data, todo]
        });
    }

    setComplete = (id: number) : void => {
        const _data = this.state.data.map((el) => {
            if (el.id === id) {
                el.completed = !el.completed;
            }

            return el;
        });

        this.setState({
            data: _data
        });
    }

    deleteTodo = (id: number) : void => {
        const _data = this.state.data.filter((el) => el.id !== id);

        this.setState({
            data: _data
        });
    }

    setEdit = (id: number) : void => {
        const _data = this.state.data.map((el) => {
            el.edit = el.id === id;
            return el;
        });

        this.setState({
            data: _data
        });
    }

    editTodo = (id: number, body: string) : void => {
        const _data = this.state.data.map((el) => {
            if (el.id === id) {
                el.body = body;
            }

            el.edit = false;
            return el;
        });

        this.setState({
            data: _data
        });
    }

    handleUncompleted = () : number => {
        return  this.state.data.reduce((sum, el) => {
            if (!el.completed) sum += 1;
            return sum;
        }, 0)
    }

    clearCompleted = () : void => {
        const _data = this.state.data.filter(el => !el.completed);

        this.setState({
            data: _data
        });
    }

    showAll = () : void => {
        const _data = this.state.data.map(el => {
            el.vision = true;
            return el;
        });

        this.setState({
            data: _data,
            filters: [
                {id: 1, body: 'All', active: true},
                {id: 2, body: 'Completed', active: false},
                {id: 3, body: 'Active', active: false},
            ]
        });
    }

    showActive = () : void => {
        const _data = this.state.data.map(el => {
            el.vision = !el.completed;
            return el;
        });

        this.setState({
            data: _data,
            filters: [
                {id: 1, body: 'All', active: false},
                {id: 2, body: 'Completed', active: false},
                {id: 3, body: 'Active', active: true},
            ]
        });
    }

    showCompleted = () : void => {
        const _data = this.state.data.map(el => {
            el.vision = el.completed;

            return el;
        });

        this.setState({
            data: _data,
            filters: [
                {id: 1, body: 'All', active: false},
                {id: 2, body: 'Completed', active: true},
                {id: 3, body: 'Active', active: false},
            ]
        });
    }

    render() {
        return(
            <section className="todoapp">
                <TodoHeader createTodo={this.createTodo}/>
                <TodoList
                    data={this.state.data}
                    setComplete={this.setComplete}
                    deleteTodo={this.deleteTodo}
                    setEdit={this.setEdit}
                    editTodo={this.editTodo}
                />
                <TodoFooter
                    filters={this.state.filters}
                    items={this.handleUncompleted()}
                    clearComplete={this.clearCompleted}
                    showAll={this.showAll}
                    showActive={this.showActive}
                    showCompleted={this.showCompleted}
                />
            </section>
        );
    }
}