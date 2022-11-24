const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    return res.json({message: "Hello, World"});
});

const start = async () => {
    try {
        app.listen(3000, () => console.log("Server started on http://localhost:3000"));
    } catch (error){
        console.error(error);
        process.exit(1);
    }
};

start();