import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DB from "./database.js";
import { productRouter } from "./productRoute.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

DB();

app.use(productRouter)

app.get("/", (req,res) => {
    res.send("Hello world")
})

app.listen(process.env.PORT, () => {console.log("Server running on PORT", process.env.PORT)});
