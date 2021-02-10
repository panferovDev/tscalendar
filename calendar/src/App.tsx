import React, {useState, useEffect} from 'react';
import { Row, Col } from 'antd';
import {LoginForm} from './components/loginForm/LoginForm';
import logo from './logo.svg';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <LoginForm/>
        </Col>
      </Row>

    </div>
  );
}

export default App;
