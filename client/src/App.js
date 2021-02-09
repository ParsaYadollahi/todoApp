import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import TodoItem from './component/TodoItem';
import AddTodo from './component/AddTodo';

// CRUF functions
import { getTodos, addToDo, updateTodo, deleteTodo } from './API';
import Typography from '@material-ui/core/Typography';

// Theme
import themeFile from './util/theme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme(themeFile);

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodo();
    }, []);

    const fetchTodo = () => {
        getTodos()
            .then((formData) => {
                setTodos(formData.data);
            })
            .catch((error) => console.log(error));
    };

    const handleSaveTodo = (formData) => {
        addToDo(formData)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('Todo not saved');
                }
                setTodos([...todos, data]);
            })
            .catch((error) => console.log(error));
    };

    const handleUpdateTodo = (todo) => {
        updateTodo(todo)
            .then(({ status, data }) => {
                if (status !== 200) {
                    // 200 indicates successful request
                    throw new Error('Todo not Updated');
                }
                var index = todos.findIndex((i) => i._id == data._id);
                todos[index] = data;
                setTodos([...todos]);
            })
            .catch((error) => console.log(error));
    };

    const handleDeleteTodo = (_id) => {
        deleteTodo(_id)
            .then(({ status, data }) => {
                if (status !== 200) {
                    throw new Error('Todo not deleted');
                }
                setTodos(todos.filter((todo) => todo._id !== _id));
            })
            .catch((error) => console.log(error));
    };

    return (
        <MuiThemeProvider theme={theme}>
            <Typography
                variant='h4'
                component='h1'
                style={{
                    textAlign: 'center',
                    color: '#ffffff',
                    margin: 50,
                }}
            >
                My List of Todos
            </Typography>
            <AddTodo saveTodo={handleSaveTodo} />
            {todos.map((todo) => (
                <TodoItem
                    key={todo._id}
                    todo={todo}
                    updateTodo={handleUpdateTodo}
                    deleteTodo={handleDeleteTodo}
                />
            ))}
        </MuiThemeProvider>
    );
}

export default App;
