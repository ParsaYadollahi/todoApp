import { Response, Request } from "express";

const todosController = {
  getTodos: async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).json({ success: true });
    } catch (error) {
      throw error;
    }
  },

  getTodo: async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).json({ success: true });
    } catch (error) {
      throw error;
    }
  },

  createTodo: async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).json({ success: true });
    } catch (error) {
      throw error;
    }
  },

  updateTodo: async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).json({ success: true });
    } catch (error) {
      throw error;
    }
  },

  deleteTodo: async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).json({ success: true });
    } catch (error) {
      throw error;
    }
  },
};

export { todosController };
