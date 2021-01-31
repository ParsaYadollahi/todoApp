import express, { Express } from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { todoRouter } from "./routes/todo";

const app: Express = express();
const PORT = process.env.PORT || 3000;
const DBURL = "mongodb://localhost:27017/todoApp";

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(todoRouter);

mongoose.connect(DBURL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT} ...`);
});
