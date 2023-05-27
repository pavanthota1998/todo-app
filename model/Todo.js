class Todo {
    #idCounter = 0;

    constructor(title, description) {
        this.title = title
        this.description = description
        this.items = {}
    }

    addItem(title) {
        this.items[this.#idCounter++] = {title};
    }

    markDone() {}
}

module.exports = Todo