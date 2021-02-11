import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from './redux/rootReducer';
import { Row, Col } from 'antd';
import {LoginForm} from './components/loginForm/LoginForm';
import {UserPage} from './components/userPage/UserPage';
import 'antd/dist/antd.css';

function App() {
  
  const logUser = useSelector((state: RootState) => state.mainReducer.user);

  return (
    <div className="App">
      <Row>
        <Col span={24}>

          {logUser ? <UserPage/>:<LoginForm/>}

        </Col>
      </Row>

    </div>
  );
}

export default App;
