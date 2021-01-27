import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import TodoItem from './component/TodoItem';
import AddTodo from './component/AddTodo';

// CRUF functions
import { getTodos, addToDo, updateTodo, deleteTodo } from './API';
import { Typography } from '@material-ui/core';

function App() {
    const [todos, setTodos] = useState([]);

    const fetchTodo = () => {
        getTodos()
            .then((data) => {
                setTodos(todos);
            })
            .catch((error) => console.log(error));
    };

    const handleSaveTodo = (e, formData) => {
        e.preventDefault();
        addToDo(formData)
            .then((status, data) => {
                if (status != 201) {
                    throw new Error('Todo not saved');
                }
                setTodos(data.todos);
            })
            .catch((error) => console.log(error));
    };

    const handleUpdateTodo = (todo) => {
        updateTodo(todo)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('Todo not Updated');
                }
                setTodos(data.todos);
            })
            .catch((error) => console.log(error));
    };

    const handleDeleteTodo = (_id) => {
        deleteTodo(_id)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('Todo not deleted');
                }
                setTodos(data.todos);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchTodo();
    });

    return (
        <div>
            <Typography
                variant='h4'
                component='h1'
                style={{ textAlign: 'center' }}
            >
                My List of Todos
            </Typography>
            <AddTodo saveTodo={handleSaveTodo} />
            <TodoItem
                todo={todos}
                updateTodo={handleUpdateTodo}
                deleteTodo={handleDeleteTodo}
            />
        </div>
    );
}

export default App;
