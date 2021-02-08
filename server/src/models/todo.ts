import { ITodo } from "../types/todo";
import { Document, Model, model, Schema } from "mongoose";

export interface ITodoModel extends ITodo, Document {}

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

const Todo: Model<ITodoModel> = model("Todo", todoSchema);

export { Todo };
