import { useState, useEffect, useRef } from 'react';
const BASE_URL = 'https://api.exchangeratesapi.io/latest';
export const useInterval = (callback, delay) =>{
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  
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