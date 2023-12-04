import React from "react";

/**
 * Представляет состояние добавления элемента списка дел.
 */
export type AddTodoStates = {
    loading: boolean;
}

/**
 * Представляет тип поля с необязательным свойством "todotext".
 */
export type FieldType = {
    todotext?: string;
};

/**
 * Представляет свойства для добавления элемента списка дел.
 * @typedef {Object} AddTodoProps
 * @property {function} onAdd - Функция, которая будет вызвана при добавлении элемента списка дел. Она принимает один параметр `todoText`, который является текстом элемента списка дел.
 */
export type AddTodoProps = {
    onAdd:  (todoText: string) => void;
}

/**
 * Определяет тип для объекта индекса, содержащего массив свойств TodoProps.
 */
export type IndexTypes = {
    todos: TodoProps[];
}

/**
 * Представляет свойства компонента Todo.
 */
export type TodoProps = {
    todotext: string;
    checked: boolean;
}

/**
 * Представляет свойства для компонента Todo.
 * @typedef {Object} TodoPropsComponent
 * @property {string} todotext - Текст элемента списка дел.
 * @property {boolean} checked - Указывает, отмечен ли элемент списка дел или нет.
 * @property {function} toggle - Функция для переключения состояния отметки элемента списка дел.
 * @property {function} remove - Функция для удаления элемента списка дел.
 */
export type TodoPropsComponent = {
    todotext: string;
    checked: boolean;
    toggle: () => void;
    remove: () => void;
}

/**
 * Представляет свойства для компонента TodosList.
 * @typedef {Object} TodosListProps
 * @property {TodoProps[]} todos - Массив элементов списка дел.
 * @property {(index: number) => void} handleToggle - Функция для обработки переключения состояния завершения элемента списка дел.
 * @property {(index: number) => void} handleRemove - Функция для обработки удаления элемента списка дел.
 */
export type TodosListProps = {
    todos: TodoProps[];
    handleToggle: (index: number) => void;
    handleRemove: (index: number) => void;
}
