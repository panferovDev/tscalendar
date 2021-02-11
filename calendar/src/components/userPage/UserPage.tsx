import React, {FC} from 'react';
import {UserCalendar} from '../calendarPart/Calendar';
import { Row, Col, Avatar, Button, PageHeader  } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import {InviteModal} from '../inviteModal/InviteModal';
import {userAction} from '../../redux/actions';
import {RootState} from '../../redux/rootReducer';
import style from './style.module.css'

export const UserPage:FC = () => {
  const logUser = useSelector((state: RootState) => state.mainReducer.user);
  const dispatch = useDispatch();

  const userHeandler = () => {
      dispatch(userAction(null))
  }
    
    return(
        <>
        <PageHeader
          className={style.header}
          extra={[
              <Avatar key={1}>{logUser?.name}</Avatar>,
              <Button
                key={2}
                onClick={userHeandler}
              >
                  Выйти
              </Button>
          ]}
        />
        <UserCalendar id={logUser!.id}/>
        <Row className={style.buttonPart}>
            <Col>
              <InviteModal/>
            </Col>
        </Row>
        </>
    )
}