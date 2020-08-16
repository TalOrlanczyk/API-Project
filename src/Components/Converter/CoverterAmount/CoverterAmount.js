import React, { useState, useEffect, useCallback } from 'react';
import styles from './CoverterAmount.module.css'
import CurrencyRow from '../CurrencyRow/CurrencyRow';
import Loading from '../../Loading/Loading'
import { TodayExchangeRateByBaseAndSymbol } from '../../../API/GET/exchange';
const CoverterAmount = ({ currencyOptions,exchangeRate,setExchangeRate }) => {
    const [fromCurrency, setFromCurrency] = useState(currencyOptions[0])
    const [toCurrency, setToCurrency] = useState(currencyOptions[1])
    const [amountData,setAmountData] = useState({
        amount: 1,
        amountInFromCurrency: true
    });
    const [isLoading,setIsLoading] = useState(true)
    let toAmount, fromAmount
    if (amountData.amountInFromCurrency) {
        fromAmount = amountData.amount
        toAmount = amountData.amount * exchangeRate
    } else {
        toAmount = amountData.amount
        fromAmount = amountData.amount / exchangeRate
    }
    useEffect(() => {
        if (fromCurrency && toCurrency ) {
            TodayExchangeRateByBaseAndSymbol(fromCurrency,toCurrency)
                .then(data => {
                    setExchangeRate(data.rates[toCurrency]);
                    setIsLoading(false);
                })
        }
    }, [fromCurrency, toCurrency])


    const handleFromAmountChange = useCallback((e) => {
        setAmountData({...amountData,amount:e.target.value,amountInFromCurrency:true});
    }, [])

    const handleToAmountChange = useCallback((e) => {
        setAmountData({...amountData,amount:e.target.value,amountInFromCurrency:false});
    }, [])
    if ( isLoading)
        return <Loading />
    return (
            <div className={styles.coverterMain}>
                <CurrencyRow
                    currencyOptions={currencyOptions}
                    selectedCurrency={fromCurrency}
                    onChangeCurrency={(e) => setFromCurrency(e)}
                    onChangeAmount={(e) => handleFromAmountChange(e)}
                    amount={fromAmount}
                    compereCurreny={toCurrency}
                />
                <div className={styles.equals}>=</div>
                <CurrencyRow
                    currencyOptions={currencyOptions}
                    selectedCurrency={toCurrency}
                    onChangeCurrency={(e) => setToCurrency(e)}
                    onChangeAmount={(e) => handleToAmountChange(e)}
                    amount={toAmount}
                    compereCurreny={fromCurrency}
                />
            </div>
           
    )
}
export default CoverterAmount;