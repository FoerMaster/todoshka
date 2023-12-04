import React, { Component } from "react";
import { AddTodoComponent } from "@src/components/addtodo.component";
import TodoList from "@src/hooks/todolist.hook";
import { IndexTypes, TodoProps } from "@src/types";
import { TodoListComponent } from "@src/components/todolist.components";

/**
 * Представляет компонент главной страницы приложения.
 * @class IndexPage
 * @extends Component
 * @param {} props - Свойства компонента.
 * @param {IndexTypes} state - Состояние компонента.
 */
export class IndexPage extends Component<{}, IndexTypes> {
    private todo: TodoList = new TodoList([{ todotext: "Тестовая задача", checked: false }]);

    /**
     * Конструктор компонента.
     * @param {Object} props - Свойства компонента.
     * @returns None
     */
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            todos: this.todo.getTodos(),
        };
    }

    /**
     * Обрабатывает добавление новой задачи.
     * @param {string} todoText - Текст новой задачи.
     * @returns None
     */
    handleAddTodo = (todoText: string) => {
        this.todo.addTodo(todoText);
        this.setState({ todos: this.todo.getTodos() });
    };

    /**
     * Обрабатывает переключение состояния задачи.
     * @param {number} todoIndex - Индекс задачи, которую нужно переключить.
     * @returns None
     */
    handleToggle = (todoIndex: number) => {
        this.todo.toggleTodo(todoIndex);
        this.setState({ todos: this.todo.getTodos() });
    };

    /**
     * Обрабатывает удаление задачи из списка.
     * @param {number} todoIndex - Индекс задачи, которую нужно удалить.
     * @returns None
     */
    handleRemoveTodo = (todoIndex: number) => {
        this.todo.deleteTodo(todoIndex);
        this.setState({ todos: this.todo.getTodos() });
    }

    /**
     * Метод отрисовки компонента.
     * @returns {JSX.Element} - Отрисованные элементы JSX.
     */
    render() {
        return (
            <>
                <AddTodoComponent onAdd={this.handleAddTodo} />
                <TodoListComponent handleRemove={this.handleRemoveTodo} todos={this.state.todos} handleToggle={this.handleToggle} />
            </>
        );
    }
}
