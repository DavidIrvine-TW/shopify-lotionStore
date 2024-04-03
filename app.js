const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.json());

const todos = ["get milk", "get butter", "learn JavaScript"];

app.get("/", (req, res) => {
    res.render("index", { todos });
});

app.post("/todo", (req, res) => {
    try {
        todos.push(req.body.todo);
        res.json(req.body);
        console.log(todos)
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to add todo' });
    }  
});

app.use((req, res, next) => {
    if (req.url.endsWith('.js')) {
        res.set('Content-Type', 'application/javascript');
    }
    next();
});



module.exports = app;
