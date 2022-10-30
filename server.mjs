import express from "express";
import logger from "morgan";
import cors from "cors";
// import { db } from "./app/database/models/index.js"
import pkg from "./app/routes/operaRoutes.js"
import "dotenv/config"
const {operaRoutes} = pkg
const port = 3001;
const app = express();

//Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



//Routes
app.get("/", (req, res, next) => {
    res.send("Hello World!");
  });
app.use("/operas", function(){return operaRoutes})



app.listen(port, ()=> console.log(`Listening on port ${port}`))

export default app