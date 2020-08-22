import { useState, useEffect, useCallback } from 'react';
import { ExchangeByDateAndBase } from '../API/GET/exchange';
import { calcMonth } from '../functions/functions';
import PropTypes from 'prop-types';

const useExchangeByDateAndBase = (initalValue={date:new Date(),pickedBase:"ILS"}) => {
    const [selectedDate, setSelectedDate] = useState(initalValue.date);
    const [CurreciesRates, setCurreciesRates] = useState({
        pickedBase: initalValue.pickedBase,
        latestRate: {},
        yesterdayRate: {},
        isLoading: true,
        latestDate: ""
    });
    const [isHaveError, setIsHaveError] = useState(false);

    useEffect(() => {
        let latestDate, latestRate;
        const pickedDate = selectedDate.getFullYear() + "-" + calcMonth(selectedDate.getMonth() + 1) + "-" + calcMonth(selectedDate.getDate());
        const DateBeforeLates = selectedDate.getFullYear() + "-" + calcMonth(selectedDate.getMonth() + 1) + "-" + calcMonth(selectedDate.getDate() - 1);
        if (!CurreciesRates.isLoading)
            setCurreciesRates({ ...CurreciesRates, isLoading: false });

        ExchangeByDateAndBase(pickedDate, CurreciesRates.pickedBase)
            .then(currencies => {
                if (currencies?.error) {
                    throw new Error(currencies?.error)
                }
                const currenciesList = currencies.rates;
                Object.keys(currenciesList).forEach(currency => currenciesList[currency] = 1 / currenciesList[currency]);
                latestDate = currencies.date;
                latestRate = { ...currenciesList }
                return ExchangeByDateAndBase(DateBeforeLates, CurreciesRates.pickedBase);
            })
            .then(pastCurrencies => {
                const pastCurrenciesList = pastCurrencies.rates;
                Object.keys(pastCurrenciesList).forEach(currency => pastCurrenciesList[currency] = 1 / pastCurrenciesList[currency]);
                setCurreciesRates({ ...CurreciesRates, isLoading: false, yesterdayRate: { ...pastCurrenciesList }, latestDate, latestRate });
            })
            .catch((err) => {
                setIsHaveError(true);
            })
    }, [selectedDate])
    return [{ CurreciesRates, isHaveError, selectedDate }, { setIsHaveError: () => setIsHaveError(false), setSelectedDate: (e) => setSelectedDate(e) }];
}
export default useExchangeByDateAndBase;