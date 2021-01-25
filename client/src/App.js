import './App.css';
import axios from 'axios';

// Components
import AddTodo from './component/AddTodo';

const baseUrl = 'http://localhost:3000/';

//////////////////////
//////// CRUD ////////
//////////////////////

// Read
const getTodos = async () => {
    try {
        const todos = await axios.get(baseUrl + '/todos');
        return todos;
    } catch (error) {
        throw new Error(error);
    }
};

// Create
const addToDo = async (data) => {
    try {
        const todo = {
            name: data.name,
            description: data.description,
            status: false,
        };
        const saveTodo = await axios.post(baseUrl + '/add-todo', todo);
        return saveTodo;
    } catch (error) {
        throw new Error(error);
    }
};

// Update
const updateTodo = async (todo) => {
    try {
        const todoUpdate = {
            status: true,
        };
        const updateTodo = await axios.put(
            `${baseUrl}/edit-todo/${todo._id}`,
            todoUpdate
        );
        return todoUpdate;
    } catch (error) {
        throw new Error(error);
    }
};

const deleteTodo = async (_id) => {
    try {
        const deleteTodo = await axios.delete(`${baseUrl}/delete-todo/${_id}`);
        return deleteTodo;
    } catch (error) {
        throw new Error(error);
    }
};

function App() {
    return <div>hello from app.js</div>;
}

export default App;
