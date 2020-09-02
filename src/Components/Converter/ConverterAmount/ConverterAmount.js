import React from 'react';
import PropTypes from 'prop-types';
import styles from './ConverterAmount.module.css'
import CurrencyRow from '../CurrencyRow/CurrencyRow';
import SwitchBetweenCurrecy from '@material-ui/icons/SyncAlt';
import { amountConverter } from '../../../functions/functions';
const ConverterAmount = ({ data: { amountData, currencyOptions }, handlers: { handleFromAmountChange, handleToAmountChange, onSwithcBetweenCurrencies, setAmountData } }) => {
    let { toAmount, fromAmount } = amountConverter(amountData.isSwitchedPlaces, amountData.amountInFromCurrency, amountData.amount, amountData.exchangeRate)
    return (
        <div className={styles.coverterCurrencies}>
            <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={amountData.fromCurrency}
                onChangeCurrency={(e) => setAmountData({ ...amountData, fromCurrency: e, isSwitchedPlaces: false })}
                onChangeAmount={(e) => handleFromAmountChange(e)}
                amount={fromAmount}
                compereCurreny={amountData.toCurrency} />
            <div className={styles.CurrencyActions}>
                <div className={styles.equals} onClick={() => onSwithcBetweenCurrencies()}><SwitchBetweenCurrecy /></div>
                <div className={styles.equals}>=</div>
            </div>
            <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={amountData.toCurrency}
                onChangeCurrency={(e) => setAmountData({ ...amountData, toCurrency: e, isSwitchedPlaces: false })}
                onChangeAmount={(e) => handleToAmountChange(e)}
                amount={toAmount}
                compereCurreny={amountData.fromCurrency}
            />
        </div>
    )
}
ConverterAmount.propTypes = {
   handlers: PropTypes.objectOf(PropTypes.func),
};
export default ConverterAmount;
