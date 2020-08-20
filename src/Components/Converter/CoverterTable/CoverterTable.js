import React, { useEffect, useState } from 'react';
import styles from './CoverterTable.module.css'
import Loading from '../../Loading/Loading';
import DatePickerCurr from './DatePickerCurr/DatePickerCurr';
import TableComp from './TableComp/TableComp';
import { ExchangeByDateAndBase } from '../../../API/GET/exchange';
import { calcMonth } from '../../../functions/functions';

const CoverterTable = ({ currencyOptions }) => {
    console.log('[CoverterTable.js] rerenders')
    const [selectedDate, handleDateChange] = useState(new Date());
    const [CurreciesRates, setCurreciesRates] = useState({
        pickedBase: "ILS",
        latestRate: {},
        yesterdayRate: {},
        isLoading: true,
        latestDate: ""
    });
    useEffect(() => {
        let latestDate, latestRate;
        const pickedDate = selectedDate.getFullYear() + "-" + calcMonth(selectedDate.getMonth() + 1) + "-" + calcMonth(selectedDate.getDate());
        const DateBeforeLates = selectedDate.getFullYear() + "-" + calcMonth(selectedDate.getMonth() + 1) + "-" + calcMonth(selectedDate.getDate() - 1);
        if (!CurreciesRates.isLoading)
        setCurreciesRates({ ...CurreciesRates, isLoading: false});

        ExchangeByDateAndBase(pickedDate, CurreciesRates.pickedBase)
            .then(currencies => {
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
    }, [selectedDate])
    if (CurreciesRates.isLoading)
        return <Loading />
    return (
        <div className={styles.slideInBckCenterTable}>
            <DatePickerCurr
                handleDateChange={(e) => handleDateChange(e)} date={selectedDate} />
            <TableComp
                CurreciesRates={CurreciesRates}
                latestRate={CurreciesRates.latestRate}
                yesterdayRate={CurreciesRates.yesterdayRate}
                latestDate={CurreciesRates.latestDate}
                pickedBase={CurreciesRates.pickedBase} />
        </div>
    )
}
export default CoverterTable;