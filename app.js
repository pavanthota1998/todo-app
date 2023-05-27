const express = require("express");
const TodoManager = require("./model/TodoManager")
const app = express();
const timeStamp = () => new Date();

const todoManager = new TodoManager();

app.init = () => {
    console.log("App started and running")
}

app.use(express.json());

app.post('/todo', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    todoManager.createTodo(title, description)
    res.send(`created todo with name ${title}`)
});

app.get('/todos', (req, res) => {
    let todos = todoManager.getTodos();
    res.send(todos)
});

app.post('/item', (req, res) => {
    let todoTitle = req.body.todoTitle;
    let itemTitle = req.body.itemTitle;
    let description = req.body.description;
    todoManager.addItem(todoTitle, itemTitle, description)
    res.send(`Added item in todo ${todoTitle} with title ${itemTitle}`);
});

app.put("/item", (req, res ) => {
    let {todoTitle, itemKey, updatedTitle} = req.body;
    todoManager.updateTodoItem(todoTitle, itemKey, updatedTitle);
    res.send({statusCode: 200, message: "Sucessfully updated item title"})
});

app.delete("/todo/:todoTitle/item/:itemKey", (req, res) => {
    let {todoTitle, itemKey} = req.params
    todoManager.deleteItem(todoTitle, itemKey);
    res.send(`Sucessfully deleted an item from ${todoTitle}`)
});

module.exports = app;
