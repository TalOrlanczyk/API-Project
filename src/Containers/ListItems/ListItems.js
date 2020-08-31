import React, { memo, useState } from 'react';
import styles from './ListItems.module.css';
import Item from './Item/Item';
import PickedItem from './pickedItem/pickedItem';
import { ListItemContext } from '../../Componet Context/ListItemContext';
const { Provider } = ListItemContext
const ListItems = memo((props) => {
    console.log('[ListItems.js] rerender')
    return (
        <Provider value={{activeItem:props.value,handleClick: props.onChangeCurrency}}>
            
            <div className={props.open === true ? [styles.colorPicker, styles.open].join(" ") : styles.colorPicker} onClick={(e) => {
                props.setOpen()
            }} >
                {props.children}
            </div>
            
        </Provider>
    )
},
    (prev, next) => {
        if (prev.open !== next.open)
            return false;
        return true
    })
ListItems.Item = Item;
ListItems.Picked = PickedItem;
export default ListItems;