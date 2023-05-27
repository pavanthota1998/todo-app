const Todo =  require("./Todo");

class TodoManager {
    constructor() {
        this.todos = {}
    }

    createTodo(title, description) {
        this.todos[title] = new Todo(title, description);
    }

    addItem(todoTitle, itemTitle) {
        this.todos[todoTitle].addItem(itemTitle)
    }

    markDone() {}

    getTodos() {
        return this.todos;
    }
}

module.exports = TodoManager