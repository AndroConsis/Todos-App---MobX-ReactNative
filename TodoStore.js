import { observable, computed, action } from 'mobx';

class TodoStore {
    @observable todos = ["buy milk", "buy eggs"]
    @observable filter = ""
    @observable newTodo = ""
    @observable searchVisible = false;

    @computed get filteredTodos() {
        let matchesFilter = new RegExp(this.filter, "i")
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo));
    }

    @action createTodo = () => {
        if (this.newTodo) {
            this.todos.push(this.newTodo);
            this.newTodo = "";
        }
    }

    @action toggleSearch = () => {
        console.log(this.searchVisible);
        this.searchVisible = !this.searchVisible;
    }

}

export default new TodoStore;