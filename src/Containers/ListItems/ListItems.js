import React,{ memo } from 'react';
import styles from './ListItems.module.css'
const ListItems = memo((props) => {
        console.log('[ListItems.js] rerender')
    return (
        <div className={props.open === true ? [styles.colorPicker,styles.open].join(" ") : styles.colorPicker} onClick={(e) => {
            props.setOpen()
        }} >
            {props.children}
        </div>
    )
},
(prev,next) => {
    if(prev.open !== next.open)
        return false;
    return true
})

export default ListItems;