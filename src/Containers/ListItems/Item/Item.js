import React, { useContext } from 'react';
import styles from './ListItem.module.css';
import PropTypes from 'prop-types';
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
Item.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
export default Item