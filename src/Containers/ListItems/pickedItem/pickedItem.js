import React, { useContext} from 'react';
import styles from './PickedItem.module.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
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