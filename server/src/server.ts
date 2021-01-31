import express, { Express } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { todoRouter } from "./routes/todo";

const app: Express = express();
const PORT = process.env.PORT || 3000;
const DBURL = "mongodb://localhost:27017/todoApp";

app.use(cors());
app.use(todoRouter);

mongoose.connect(DBURL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.set("useCreateIndex", true);

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT} ...`);
});
