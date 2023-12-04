import React, { Component } from "react";
import { TodoComponent } from "@src/components/todo.component";
import { TodoProps, TodosListProps} from "@src/types";

/**
 * Represents a component that renders a list of todos.
 * @class TodoListComponent
 * @extends Component<TodosListProps, {}>
 */
export class TodoListComponent extends Component<TodosListProps, {}> {
    /**
     * Creates a new instance of the TodosList component.
     * @param {TodosListProps} props - The props object containing the necessary data for the component.
     * @constructor
     */
    constructor(props: TodosListProps) {
        super(props);
    }

    /**
     * Renders a list of todos as a React component.
     * @returns {JSX.Element} - The rendered component.
     */
    render() {
        return (
            <div className={"todos_list"}>
                <p className={"title"}>Список дел</p>
                {this.props.todos.map((value: TodoProps, index) => {
                    return (
                        <TodoComponent
                            remove={()=>this.props.handleRemove(index)}
                            toggle={() => this.props.handleToggle(index)}
                            checked={value.checked}
                            todotext={value.todotext}
                            key={index}
                        />
                    );
                })}
            </div>
        );
    }
}
