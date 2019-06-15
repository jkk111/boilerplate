import express from "express";
import http from "http";
import routes from "./routes";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(routes);

http.createServer(app).listen(PORT);
