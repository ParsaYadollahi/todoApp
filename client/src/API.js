import axios from 'axios';

const baseUrl = 'http://localhost:3000/';
// Read
export const getTodos = async () => {
    try {
        const todos = await axios.get(baseUrl + '/todos');
        return todos;
    } catch (error) {
        throw new Error(error);
    }
};

// Create
export const addToDo = async (formData) => {
    try {
        const todo = {
            name: formData.name,
            description: formData.description,
            status: false,
        };
        const saveTodo = await axios.post(baseUrl + '/add-todo', todo);
        return saveTodo;
    } catch (error) {
        throw new Error(error);
    }
};

// Update
export const updateTodo = async (todo) => {
    try {
        const todoUpdate = {
            status: true,
        };
        const updatedTodo = await axios.put(
            `${baseUrl}/edit-todo/${todo._id}`,
            todoUpdate
        );
        return updatedTodo;
    } catch (error) {
        throw new Error(error);
    }
};

// Delete
export const deleteTodo = async (_id) => {
    try {
        const deleteTodo = await axios.delete(`${baseUrl}/delete-todo/${_id}`);
        return deleteTodo;
    } catch (error) {
        throw new Error(error);
    }
};
