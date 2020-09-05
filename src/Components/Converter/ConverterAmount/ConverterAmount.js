import React from 'react';
import PropTypes from 'prop-types';
import styles from './ConverterAmount.module.css'
import CurrencyRow from '../CurrencyRow/CurrencyRow';
import { amountConverter } from '../../../functions/functions';
import CurrencyAmountActions from './CurrencyAmountActions/CurrencyAmountActions';
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
                compereCurrency={amountData.toCurrency} />
            <CurrencyAmountActions onSwithcBetweenCurrencies={() => onSwithcBetweenCurrencies()}/>
            <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={amountData.toCurrency}
                onChangeCurrency={(e) => setAmountData({ ...amountData, toCurrency: e, isSwitchedPlaces: false })}
                onChangeAmount={(e) => handleToAmountChange(e)}
                amount={toAmount}
                compereCurrency={amountData.fromCurrency}
            />
        </div>
    )
}
ConverterAmount.propTypes = {
   handlers: PropTypes.objectOf(PropTypes.func),
   data: PropTypes.shape({
     amountData: PropTypes.object.isRequired,
     currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired
   })
};
export default ConverterAmount;
