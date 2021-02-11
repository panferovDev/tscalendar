import React, {FC} from 'react';
import { Calendar} from 'antd';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/rootReducer';

interface Iprops {
    id:number
}
export const UserCalendar:FC <Iprops> = ({id}) => {

    const meetings = useSelector((state: RootState) => state.mainReducer.userMeetings);

    function dateCellRender(date:any) {
        let list = meetings.filter(i => i.date === date.format('YYYY-MM-DD') && (id === i.id || id === i.organizer))
        return (
          <ul className="events">
            {list.map((item,index) => (
              <li key={index}>
                {id === item.organizer ? 'Вы назначили встречу' : "Вам назначили встречу"}
              </li>
            ))}
          </ul>
        );
      }


    return(
        <>
        <Calendar dateCellRender={dateCellRender}/>
        </>
    )
}