import React, { useState, useEffect } from 'react';
import styles from './ListItem.module.css';
const ListItem = (props) => {
    return (
        <>
            <li className={props.selectedCurrency === props.option ? [styles.listItem,styles.picked].join(" ") : styles.listItem} onClick={(e) => props.onChangeCurrency()}>
                {props.children}
            </li>
        </>
    )
}

export default ListItem