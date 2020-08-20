import React, { useState, useEffect } from 'react';
import styles from './ListItem.module.css';
import { memo } from 'react';
const ListItem = (props) => {
    console.log('[ListItem.js] rerender')
    return (
        <>
            <li className={props.selectedCurrency === props.option ? [styles.listItem,styles.picked].join(" ") : styles.listItem} onClick={(e) => props.onChangeCurrency()}>
                {props.children}
            </li>
        </>
    )
}

export default ListItem