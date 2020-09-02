import { useState, useEffect } from 'react';
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
        let latestDate, latestRate,DateBeforeLates;
        const pickedDate = selectedDate.getFullYear() + "-" + calcMonth(selectedDate.getMonth() + 1) + "-" + calcMonth(selectedDate.getDate());
        if (selectedDate.getDate() !== 1)
        DateBeforeLates = selectedDate.getFullYear() + "-" + calcMonth(selectedDate.getMonth() + 1) + "-" + calcMonth(selectedDate.getDate() - 1);
        else {
            selectedDate.setDate(selectedDate.getDate() - 1)
            DateBeforeLates = selectedDate.getFullYear() + "-" + calcMonth(selectedDate.getMonth() + 1) + "-" + calcMonth(selectedDate.getDate());
        }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDate])
    return [{ CurreciesRates, isHaveError, selectedDate }, { setIsHaveError: () => setIsHaveError(false), setSelectedDate: (e) => setSelectedDate(e) }];
}
useExchangeByDateAndBase.propTypes = {
    initalValue: PropTypes.shape({
        date: PropTypes.instanceOf(Date),
        pickedBase: PropTypes.string,
      }),
}
export default useExchangeByDateAndBase;