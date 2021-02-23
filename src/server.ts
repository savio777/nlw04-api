import express, { Request, Response } from "express";

const port = 3333;

const app = express();

/*
  GET    -> Search
  POST   -> Criar
  PUT    -> Change
  DELETE -> Exclude
*/

app.get("/", (_, res: Response) => res.json({ message: "hello world" }));

app.post("/", (_, res: Response) => res.json({ message: `hello POST` }));

app.listen(port, () => {
  console.log(`server is running in localhost:${port} ✅`);
});
