import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CoverterAmount.module.css'
import CurrencyRow from '../CurrencyRow/CurrencyRow';
import Loading from '../../Loading/Loading';
import SwitchBetweenCurrecy from '@material-ui/icons/SyncAlt';
import { TodayExchangeRateByBaseAndSymbol } from '../../../API/GET/exchange';
const CoverterAmount = ({ currencyOptions = [] }) => {
    console.log('[CoverterAmount.js] rerender')
    const [amountData, setAmountData] = useState({
        exchangeRate: 0,
        toCurrency: currencyOptions[1],
        fromCurrency: currencyOptions[0],
        amount: 1,
        isSwitchedPlaces: false,
        amountInFromCurrency: true
    });
    const [isLoading, setIsLoading] = useState(true);
    let toAmount, fromAmount
    if (amountData.isSwitchedPlaces) {
        fromAmount = amountData.amount;
        toAmount = amountData.amount / amountData.exchangeRate;
    } else if (amountData.amountInFromCurrency) {
        fromAmount = amountData.amount;
        toAmount = amountData.amount * amountData.exchangeRate;
    } else {
        toAmount = amountData.amount;
        fromAmount = amountData.amount / amountData.exchangeRate;
    }
    useEffect(() => {
        if (amountData.fromCurrency && amountData.toCurrency && !amountData.isSwitchedPlaces) {
            TodayExchangeRateByBaseAndSymbol(amountData.fromCurrency, amountData.toCurrency)
                .then(data => {
                    setAmountData({ ...amountData, exchangeRate: data.rates[amountData.toCurrency] })
                    setIsLoading(false);
                })
        }
    }, [amountData.fromCurrency, amountData.toCurrency])


    const handleFromAmountChange = (e) => {
        setAmountData({ ...amountData, amount: e.target.value, amountInFromCurrency: true });
    }

    const handleToAmountChange = (e) => {
        setAmountData({ ...amountData, amount: e.target.value, amountInFromCurrency: false });
    };
    const onSwithcBetweenCurrencies = () => {
        if (!amountData.isSwitchedPlaces)
            setAmountData({ ...amountData, fromCurrency: amountData.toCurrency, toCurrency: amountData.fromCurrency, isSwitchedPlaces: true })
        else
            setAmountData({ ...amountData, fromCurrency: amountData.toCurrency, toCurrency: amountData.fromCurrency, isSwitchedPlaces: false })
    }
    if (isLoading)
        return <Loading />
    return (
        <div className={styles.coverterMain}>
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
CoverterAmount.propTypes = {
    currencyOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default CoverterAmount;
