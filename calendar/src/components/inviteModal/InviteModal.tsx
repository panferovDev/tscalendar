import React, {FC, useState} from 'react';
import {Modal, Button, Select, DatePicker, Space, Col, Row } from 'antd';
import {RootState} from '../../redux/rootReducer';
import {useSelector, useDispatch} from 'react-redux';
import {meetingAction} from '../../redux/actions';
import style from './style.module.css';

interface Iprops {
  userid: number
}

export const InviteModal: FC<Iprops> =( {userid} ) => {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<number|null>(null);
    const [date, setDate] = useState<string>('');
    const dispatch = useDispatch();
    const allUsers = useSelector((state:RootState) => state.mainReducer.allUsers);
    const { Option } = Select;
    const showModal = ():void => {
        setIsModalVisible(true);
    };

    const handleCancel = ():void => {
        setIsModalVisible(false);
    };
    const userHandler = (value:number):void => {
      setSelectedUser(value)
    }
    const dateHandler = (CalDate:any, dateString:string):void =>{
      setDate(dateString);
    }
    const handleOk = () => {
        if(date !== '' && selectedUser){
          dispatch(meetingAction({id:selectedUser, date:date, organizer: userid}));
          handleCancel()
        }
    }

    return(
        <>
          <Button type="primary" onClick={showModal}>
            Добавить событие
          </Button>
          <Modal title="Добавление события" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Row >

                <Col span={24} className={style.modal}>
                  <span>Выбор даты</span>
                  <Space direction="vertical">
                  <DatePicker
                    placeholder="Выбор даты"
                    style={{ width: 200 }}
                    onChange={dateHandler}
                  />
                  </Space>
                </Col>

                <Col span={24} className={style.modal}>
                <span>Гости</span>
                <Select
                  style={{ width: 200 }}
                  placeholder="Выберите гостя"
                  onChange={userHandler}
                >
                    {allUsers.map(i =>
                        <Option value={i.id}>{i.name}</Option>
                    )}
                </Select>
                </Col>

            </Row>
          </Modal>
        </>
    )
}