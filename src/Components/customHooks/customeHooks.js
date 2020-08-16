import { useState, useEffect, useRef, useCallback } from 'react';
import { TodayExchangeRate } from '../../API/GET/exchange';
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
    const [exchangeRate,setExchangeRate] = useState(0)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        TodayExchangeRate()
             .then(data => {
                 const firstCurrency = Object.keys(data.rates)[0]
                 let options = [data.base, ...Object.keys(data.rates)];
                 setCurrencyOptions(options);
                 setExchangeRate(data.rates[firstCurrency])
                 setIsLoading(false)
             })
    },[])
    return [currencyOptions,exchangeRate,isLoading,useCallback((data)=>setExchangeRate(data))];
}
export default useLatestCurrecny;