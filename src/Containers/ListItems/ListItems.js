import React from 'react';
import styles from './ListItems.module.css'
const ListItems = (props) => {
    return (
        <div className={props.open === true ? [styles.colorPicker,styles.open].join(" ") : styles.colorPicker} onClick={(e) => {
            props.setOpen()
        }} >
            {props.children}
        </div>
    )
}

export default ListItems;