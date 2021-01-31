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

    const fetchTodo = () => {
        getTodos()
            .then((data) => {
                setTodos(todos);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchTodo();
    }, []);

    const handleSaveTodo = (e, formData) => {
        // preventdefault cancels the event if it is cancelable (in this case it's to cancel the submit button so that we can save it)
        e.preventDefault();
        addToDo(formData)
            .then(({ status, data }) => {
                if (status !== 201) {
                    // 201 indicates a successful creation
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
                    // 200 indicates successful request
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
            <TodoItem
                todo={todos}
                updateTodo={handleUpdateTodo}
                deleteTodo={handleDeleteTodo}
            />
        </MuiThemeProvider>
    );
}

export default App;
