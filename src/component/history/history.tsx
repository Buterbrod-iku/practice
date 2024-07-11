import React from 'react';
import style from "./history.module.scss";
import ItemHistory from "../itemHistory/itemHistory";

const History = () => {
    return (
        <div className={style.history}>
            <ItemHistory name={'Hello'} value={2302} type={true} date={'2 April'}/>
            <ItemHistory name={'Hello'} value={2302} type={false} date={'2 April'}/>
            <ItemHistory name={'Hello'} value={2302} type={false} date={'2 April'}/>
            <ItemHistory name={'Hello'} value={2302} type={false} date={'2 April'}/>
            <ItemHistory name={'Hello'} value={2302} type={false} date={'2 April'}/>
            <ItemHistory name={'Hello'} value={2302} type={true} date={'2 April'}/>
            <ItemHistory name={'Hello'} value={2302} type={false} date={'2 April'}/>
            <ItemHistory name={'Hello'} value={2302} type={true} date={'2 April'}/>
            <ItemHistory name={'Hello'} value={2302} type={true} date={'2 April'}/>
        </div>
    );
};

export default History;