import { useState, useEffect } from 'react';
const BASE_URL = 'https://api.exchangeratesapi.io/latest';
const useLatestCurrecny = () => {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setExchangeRate] = useState()

    useEffect(()=> {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                const firstCurrency = Object.keys(data.rates)[0]
                // setFromCurrency(data.base)
                // setToCurrency(firstCurrency)
                // setExchangeRate(data.rates[firstCurrency])
                setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            })
    },[])
    return [currencyOptions];
}
export default useLatestCurrecny;