import React, { useContext } from 'react';
import styles from './ListItem.module.css';
import PropTypes from 'prop-types';
import { ListItemContext } from '../../../Componet Context/ListItemContext';
const Item = (props) => {
    const { activeItem, handleClick } = useContext(ListItemContext);
    return (
        <>
            <li className={activeItem === props.option ? [styles.listItem,styles.picked].join(" ") : styles.listItem} onClick={()=>handleClick(props.option)}>
                <span>{props.option}</span>
            </li>
        </>
    )
}
Item.propTypes = {
    option: PropTypes.string.isRequired
};
export default Item