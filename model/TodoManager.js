const Todo =  require("./Todo");

class TodoManager {
    constructor() {
        this.todos = {};
    }

    createTodo(title, description) {
        this.todos[title] = new Todo(title, description);
    }

    addItem(todoTitle, itemTitle) {
        this.getTodo(todoTitle).addItem(itemTitle)
    }

    getTodos() {
        return this.todos;
    }

    updateTodoItem(todoTitle, itemKey, updatedTitle) {
        this.getTodo(todoTitle).updateTitleName(itemKey, updatedTitle);
    }

    deleteItem(todoTitle, itemKey) {
        this.getTodo(todoTitle).deleteItem(itemKey);
    }

    getTodo(todoTitle) {
        return this.todos[todoTitle]
    }
}

module.exports = TodoManager