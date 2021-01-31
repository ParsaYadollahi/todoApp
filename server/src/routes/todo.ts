import { Router } from "express";
import { todosController } from "../controllers/todo";

const todoRouter: Router = Router();

todoRouter.get("/todos", todosController.getTodos);
todoRouter.post("/todos", todosController.createTodo);
todoRouter.put("/todos/:todoId", todosController.updateTodo);
todoRouter.delete("/todos/:todoId", todosController.deleteTodo);

export { todoRouter };
