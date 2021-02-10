import React, { FC, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/rootReducer';
import {messageAction} from '../../redux/actions';
import { Row, Col, Form, Input, Button,Alert } from 'antd';
import style from './style.module.css';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

export const LoginForm: FC = () => {

  const [login, setLogin] = useState<number|string>('');
  const [password, setPassword] = useState<number|string>('');
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.mainReducer.message);


  const handleSubmit = ():void => {
    dispatch(messageAction('Неверный логин или пароль'))
  }

    return (
        <Row className={style.form}>
            <Col span={24}>
                <h3>WELCOME</h3>
            </Col>
            <Col  offset={8} span={6}>
                <Form
                  {...layout}
                  onFinish={handleSubmit}

                >
                    <Form.Item
                      label="Имя"
                      name="login"
                      rules={[{ required: true, message: 'Введите имя!' }]}
                    >
                        <Input
                          value={login}
                          onChange={e => setLogin(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                      label="Пароль"
                      name="password"
                      rules={[{ required: true, message: 'Введите пароль!' }]}
                    >
                       <Input.Password
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                       />
                    </Form.Item>
                    <Form.Item
                      {...tailLayout}
                    >
                      <Button type="primary" htmlType="submit">Авторизоваться</Button>
                    </Form.Item>

                </Form>

            </Col>
           {message &&
            <Col span={4} offset={10}>
              <Alert message={message} type="error" />
            </Col>
           }

        </Row>
    )
}