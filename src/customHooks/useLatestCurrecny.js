import { useState, useEffect, useCallback } from 'react';
import { TodayExchangeRate } from '../API/GET/exchange';
  
const useLatestCurrecny = () => {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        TodayExchangeRate()
             .then(data => {
                 const firstCurrency = Object.keys(data.rates)[0]
                 let options = [data.base, ...Object.keys(data.rates)];
                 setCurrencyOptions(options);
                 setIsLoading(false)
             })
    },[])
    return [currencyOptions,isLoading];
}
export default useLatestCurrecny;