import React, {FC, useState} from 'react';
import {Modal, Button, Select, DatePicker, Space, Col, Row } from 'antd';
import {RootState} from '../../redux/rootReducer';
import {useSelector} from 'react-redux';
import {Iuser} from '../interfaces';
import style from './style.module.css';

export const InviteModal: FC = () => {

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [invte, setInvite] = useState();

    const allUsers = useSelector((state:RootState) => state.mainReducer.allUsers);
    const { Option } = Select;
    const showModal = ():void => {
        setIsModalVisible(true);
    };

    const handleCancel = ():void => {
        setIsModalVisible(false);
    };

    return(
        <>
          <Button type="primary" onClick={showModal}>
            Добавить событие
          </Button>
          <Modal title="Добавление события" visible={isModalVisible}  onCancel={handleCancel}>
            <Row >

                <Col span={24} className={style.modal}>
                  <span>Выбор даты</span>
                  <Space direction="vertical">
                  <DatePicker
                    placeholder="Выбор даты"
                    style={{ width: 200 }}
                  />
                  </Space>
                </Col>

                <Col span={24} className={style.modal}>
                <span>Гости</span>
                <Select
                  style={{ width: 200 }}
                  placeholder="Выберете гостя"
                >
                    {allUsers.map(i =>
                        <Option value={i.name}>{i.name}</Option>
                    )}
                </Select>
                </Col>

            </Row>
          </Modal>
        </>
    )
}