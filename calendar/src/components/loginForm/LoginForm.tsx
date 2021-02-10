import React, { FC } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import style from './style.module.css';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

export const LoginForm: FC = () => {

    return (
        <Row className={style.form}>
            <Col span={24}>
                <span>Календарь</span>
            </Col>
            <Col  offset={8} span={6}>
                <Form
                  {...layout}

                >
                    <Form.Item
                      label="Имя"
                      rules={[{ required: true, message: 'Введите имя!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                      label="Пароль"
                      name="password"
                      rules={[{ required: true, message: 'Введите пароль!' }]}
                    >
                       <Input.Password />
                    </Form.Item>
                    <Form.Item
                      {...tailLayout}
                    >
                      <Button type="primary" htmlType="submit">Авторизоваться</Button>
                    </Form.Item>

                </Form>
            </Col>
        </Row>
    )
}