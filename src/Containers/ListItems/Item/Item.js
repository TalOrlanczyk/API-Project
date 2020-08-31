import React, { useState, useEffect, useContext } from 'react';
import styles from './ListItem.module.css';
import { ListItemContext } from '../../../Componet Context/ListItemContext';
const Item = (props) => {
    const { activeItem, handleClick } = useContext(ListItemContext);
    console.log('[ListItem.js] rerender')
    return (
        <>
            <li className={activeItem === props.option ? [styles.listItem,styles.picked].join(" ") : styles.listItem} onClick={()=>handleClick(props.option)}>
                {props.children}
            </li>
        </>
    )
}

export default Item