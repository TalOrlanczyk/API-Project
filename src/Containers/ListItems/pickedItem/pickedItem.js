import React, {useState,useEffect, useContext} from 'react';
import styles from './PickedItem.module.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import PropTypes from 'prop-types';
import { ListItemContext } from '../../../Componet Context/ListItemContext';
const PickedItem = () => {
    const { activeItem } = useContext(ListItemContext);
    return (
        <div className={[styles.MoneyValue,styles.listItem].join(" ")} >{activeItem}<ArrowDownwardIcon className={styles.arrowdown} /></div>
    )
}
PickedItem.propTypes = {
};

export default PickedItem;