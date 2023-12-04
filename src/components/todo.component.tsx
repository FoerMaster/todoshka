import { TodoPropsComponent } from "@src/types";
import { Button, Checkbox, Flex, Layout } from "antd";
import React, { Component } from "react";
import { DeleteOutlined } from "@ant-design/icons";

const { Content } = Layout;

/**
 * Представляет компонент TodoComponent, который отображает одну задачу.
 * @class TodoComponent
 * @extends Component<TodoPropsComponent>
 */
export class TodoComponent extends Component<TodoPropsComponent> {
    /**
     * Создает новый экземпляр компонента Todo.
     * @param {TodoPropsComponent} props - Объект props, содержащий необходимые данные для компонента.
     * @returns None
     */
    constructor(props: TodoPropsComponent) {
        super(props);
    }

    /**
     * Отображает компонент задачи.
     * @returns {JSX.Element} - Отображаемый компонент задачи.
     */
    render() {
        const { checked, toggle, todotext } = this.props; // @inputs Получаем значения из пропсов для удобства использования

        return (
            <Layout className="layout_todo">
                <Content>
                    <Flex justify={"space-between"} align={"center"}>
                        <Checkbox
                            checked={checked}
                            onClick={toggle} // @inputs Обработчик события для переключения задачи
                        >
              <span
                  style={{
                      textDecoration: !checked ? "none" : "line-through", // @outputs Добавляем стиль для зачеркивания текста, если задача выполнена
                      opacity: checked ? 0.5 : 1, // @outputs Устанавливаем непрозрачность для выделенных задач
                  }}
              >
                {todotext}
              </span>
                        </Checkbox>
                        <Button
                            danger={true}
                            onClick={this.props.remove}
                            type="text"
                            shape="circle"
                            icon={<DeleteOutlined />}
                        />
                    </Flex>
                </Content>
            </Layout>
        );
    }
}
