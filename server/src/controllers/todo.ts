import { Response, Request } from "express";
import { Todo, ITodoModel } from "../models/todo";

const todosController = {
  getTodos: async (req: Request, res: Response): Promise<void> => {
    try {
      const todos: ITodoModel[] = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  createTodo: async (req: Request, res: Response): Promise<void> => {
    try {
      const todo: ITodoModel = await Todo.create({
        ...req.body,
      });

      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateTodo: async (req: Request, res: Response): Promise<void> => {
    try {
      const { todoId } = req.params;

      const newTodo = await Todo.findByIdAndUpdate(
        todoId,
        { $set: req.body },
        { new: true },
      );

      if (!newTodo) {
        res.status(404).json({
          status: 404,
          message: "Todo not found",
        });
      } else {
        res.status(200).json(newTodo);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteTodo: async (req: Request, res: Response): Promise<void> => {
    try {
      const { todoId } = req.params;

      const deletedTodo = await Todo.findByIdAndDelete(todoId);
      if (!deletedTodo) {
        res.status(404).json({
          status: 404,
          message: "Todo not found",
        });
      } else {
        res.status(200).json(deletedTodo);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export { todosController };
