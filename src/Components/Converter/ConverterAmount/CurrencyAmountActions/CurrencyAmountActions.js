import React from 'react';
import styles from './CurrencyAmountActions.module.css';
import SwitchBetweenCurrecy from '@material-ui/icons/SyncAlt';
import PropTypes from 'prop-types';
const CurrencyAmountActions = ({onSwithcBetweenCurrencies}) => {
    return (
        <div className={styles.CurrencyActions}>
                <div className={styles.action} onClick={() => onSwithcBetweenCurrencies()}><SwitchBetweenCurrecy /></div>
                <div className={styles.action}>=</div>
            </div>
    )
}
CurrencyAmountActions.propTypes = {
    onSwithcBetweenCurrencies: PropTypes.func.isRequired
};

export default CurrencyAmountActions;