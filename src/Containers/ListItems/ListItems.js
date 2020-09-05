import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ListItems.module.css';
import Item from './Item/Item';
import PickedItem from './pickedItem/pickedItem';
import { ListItemContext } from '../../Componet Context/ListItemContext';
const { Provider } = ListItemContext
const ListItems = forwardRef((props, ref) => {
    const { value, onChangeCurrency, open, setOpen, classes, ...other } = props
    const ListWrapperClassName = classes?.ListWrapper ? classes.ListWrapper : styles.Picker
    return (
        <Provider value={{ activeItem: value, handleClick: onChangeCurrency }}>

            <div className={open === true ? [ListWrapperClassName, styles.open].join(" ") : ListWrapperClassName} onClick={(e) => {
                setOpen()
            }} >
                <PickedItem />
                {open && (<ul className={styles.list} ref={open ? ref : null} >

                    {other.children}
                </ul>)}
            </div>

        </Provider>
    )
})
ListItems.Item = Item;

ListItems.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    classes: PropTypes.object,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChangeCurrency: PropTypes.func.isRequired,
};
export default ListItems;