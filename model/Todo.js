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

    updateTitleName(itemKey, updatedTitle) {
        this.items[itemKey].title = updatedTitle;
    }

    deleteItem(itemKey) {
        delete(this.items[itemKey])
    }
}

module.exports = Todo