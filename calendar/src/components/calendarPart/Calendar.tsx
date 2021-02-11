import React, {FC} from 'react';
import { Calendar } from 'antd';

interface Iprops {
    id:number
}
export const UserCalendar:FC <Iprops> = ({id}) => {
    return(
        <>
        <Calendar />
        </>
    )
}