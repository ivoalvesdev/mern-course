import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("serevr is ready"));

app.listen(port, console.log("server started on port " + port));
