import { TodoProps } from "@src/types";

class TodoList {
    public todos: TodoProps[]; // @inputs Массив задач

    constructor(initialValue: TodoProps[]) { // @inputs initialValue: Массив задач
        this.todos = initialValue; // @outputs Устанавливает начальное значение для списка задач
    }

    // @outputs Возвращает список задач
    getTodos = (): TodoProps[] => {
        return this.todos;
    }

    // @inputs todoIndex: Индекс задачи, которую нужно переключить
    // @outputs Возвращает измененный список задач
    toggleTodo = (todoIndex: number): TodoProps[] => {
        this.todos = [
            ...this.todos.slice(0, todoIndex),
            {
                todotext: this.todos[todoIndex].todotext,
                checked: !this.todos[todoIndex].checked
            },
            ...this.todos.slice(todoIndex + 1)
        ];
        return this.todos
    }

    // @inputs todoText: Текст новой задачи
    // @outputs Возвращает новую длину списка задач
    addTodo = (todoText: string): number => {
        return this.todos.push({todotext: todoText, checked: false});
    }

    // @inputs todoIndex: Индекс задачи, которую нужно удалить
    // @outputs Удаляет задачу из списка
    deleteTodo = (todoIndex: number): void => {
        this.todos.splice(todoIndex, 1);
    }
}

export default TodoList;
