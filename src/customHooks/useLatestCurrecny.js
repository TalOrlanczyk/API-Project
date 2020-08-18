import { useState, useEffect, useCallback } from 'react';
import { TodayExchangeRate } from '../API/GET/exchange';
  
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