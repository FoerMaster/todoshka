import { AddTodoProps, AddTodoStates, FieldType } from "@src/types";
import { Button, Flex, Form, FormInstance, Input, Layout } from "antd";
import React from "react";
import { Component } from "react";

const { Content } = Layout;

/**
 * Представляет компонент для добавления элемента списка дел.
 * @class
 * @extends Component<AddTodoProps, AddTodoStates>
 */
export class AddTodoComponent extends Component<AddTodoProps, AddTodoStates> {
    private formRef = React.createRef<FormInstance<FieldType>>();

    /**
     * Создает новый компонент AddTodo с заданными свойствами.
     * @param {AddTodoProps} props - Свойства для компонента AddTodo.
     * @returns None
     */
    constructor(props: AddTodoProps) {
        super(props);
        this.state = {
            loading: false,
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * Обработчик события отправки формы
     * @param formData - данные формы
     */
    async onSubmit(formData: FieldType) {
        this.setState({ loading: true });
        await new Promise((r) => setTimeout(r, 1000)); // Имитация задержки с сервера, 1 секунда
        this.props.onAdd(formData.todotext);
        this.formRef.current?.resetFields(); // Сбросить поля формы
        this.setState({ loading: false });
    }

    /**
     * Рендерит компонент формы с полем ввода и кнопкой отправки.
     * @returns {JSX.Element} - Рендеренный компонент формы.
     */
    render() {
        return (
            <Layout className="layout">
                <Content className={"layout_index"}>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        onFinish={this.onSubmit}
                        ref={this.formRef}
                    >
                        <Flex>
                            <Form.Item<FieldType>
                                name="todotext"
                                style={{ marginRight: 10, minWidth: 400 }}
                                rules={[
                                    { required: true, message: "Пожалуйста введите в поле описание задачи!" },
                                ]}
                            >
                                <Input size={"large"} placeholder={"Введите описание задачи"} />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    size={"large"}
                                    type="primary"
                                    htmlType="submit"
                                    loading={this.state.loading}
                                >
                                    Добавить
                                </Button>
                            </Form.Item>
                        </Flex>
                    </Form>
                </Content>
            </Layout>
        );
    }
}
