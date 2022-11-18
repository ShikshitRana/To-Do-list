import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import ConnectDB from "./database/db.js";
import Routes from "./routes/route.js";

//setup app
const app = express();
app.use(cors());
ConnectDB();

//middlewares
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Routes);

//server
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started successfully on port ${port}`));
