import React, { useState, useEffect, useCallback } from 'react';
import './CoverterAmount.css';
import CurrencyRow from '../CurrencyRow/CurrencyRow';
const BASE_URL = 'https://api.exchangeratesapi.io/latest';
const CoverterAmount = () => {
    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(1)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.rates)[0]
                setCurrencyOptions([data.base, ...Object.keys(data.rates)])
                setFromCurrency(data.base)
                setToCurrency(firstCurrency)
                setExchangeRate(data.rates[firstCurrency])
            })
    }, [])

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency])


    const handleFromAmountChange = useCallback((e) => {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    },[])

    const handleToAmountChange = useCallback((e) => {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    },[])
    if ( fromCurrency == null || toCurrency == null || currencyOptions == null || fromAmount == null || exchangeRate == null)
    return 'Loading....'
    return ( 
            <div className="coverter-main">
                <CurrencyRow
                    currencyOptions={currencyOptions}
                    selectedCurrency={fromCurrency}
                    onChangeCurrency={(e) => setFromCurrency(e)}
                    onChangeAmount={(e) =>handleFromAmountChange(e)}
                    amount={fromAmount}
                    compereCurreny={toCurrency}
                />
                <div className="equals">=</div>
                <CurrencyRow
                    currencyOptions={currencyOptions}
                    selectedCurrency={toCurrency}
                    onChangeCurrency={(e) => setToCurrency(e)}
                    onChangeAmount={(e) =>handleToAmountChange(e)}
                    amount={toAmount}
                    compereCurreny={fromCurrency}
                />
            </div>
    )
}
export default CoverterAmount;