import React, { useEffect, useState } from 'react';
import styles from './CoverterTable.module.css'
import Loading from '../../Loading/Loading';
import DatePickerCurr from './DatePickerCurr/DatePickerCurr';
import TableComp from './TableComp/TableComp';
import { TodayExchangeRate, TodatExchangeRateBySymbol, ExchangeByDataAndOption, TodayExchangeRateBase, ExchangeByDateAndBase } from '../../../API/GET/exchange';

const initialObject = {};
const CoverterTable = ({ currencyOptions }) => {
    const calcMonth = (month) => {
        if (month >= 10) return month
        return "0" + month
    }
    const [latestDate, setLatestDate] = useState("");

    const [latestRate, setLatestRate] = useState({});
    const [yesterdayRate, setYesterdayRate] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [coinLength] = useState(currencyOptions.length);
    useEffect(() => {
        setIsLoading(true);
        if (Object.keys(yesterdayRate).length === 0 || Object.keys(latestRate).length === 0) {

            TodayExchangeRateBase("ILS")
                .then(currencies => {
                    let latestDate = new Date(currencies.date);
                    const DateBeforeLates = latestDate.getFullYear() + "-" + calcMonth(latestDate.getMonth() + 1) + "-" + calcMonth(latestDate.getDate() - 1);
                    const currenciesList = currencies.rates;
                    Object.keys(currenciesList).forEach(currency => currenciesList[currency] = 1 / currenciesList[currency]);
                    setLatestDate(currencies.date);
                    setLatestRate({ ...latestRate, ...currenciesList });
                    return ExchangeByDateAndBase(DateBeforeLates, "ILS");
                })
                .then(pastCurrencies => {
                    const pastCurrenciesList = pastCurrencies.rates;
                    Object.keys(pastCurrenciesList).forEach(currency => pastCurrenciesList[currency] = 1 / pastCurrenciesList[currency]);
                    setYesterdayRate({ ...yesterdayRate, ...pastCurrenciesList });
                    setIsLoading(false);
                })
        } else {
            ExchangeByDateAndBase(latestDate, "ILS")
            .then(currencies => {
                let latestDate = new Date(currencies.date);
                const DateBeforeLates = latestDate.getFullYear() + "-" + calcMonth(latestDate.getMonth() + 1) + "-" + calcMonth(latestDate.getDate() - 1);
                const currenciesList = currencies.rates;
                Object.keys(currenciesList).forEach(currency => currenciesList[currency] = 1 / currenciesList[currency]);
                setLatestDate(currencies.date);
                setLatestRate({ ...currenciesList });
                return ExchangeByDateAndBase(DateBeforeLates, "ILS");
            })
            .then(pastCurrencies => {
                const pastCurrenciesList = pastCurrencies.rates;
                Object.keys(pastCurrenciesList).forEach(currency => pastCurrenciesList[currency] = 1 / pastCurrenciesList[currency]);
                setYesterdayRate({ ...pastCurrenciesList });
                setIsLoading(false);
            })
        }
    }, [latestDate])
    const handleChangeDateExchange = (e, selectedDate) => {
        let DateOfYesterday = new Date(selectedDate);
        const DatePicked = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + calcMonth(DateOfYesterday.getDate());
        setLatestDate(DatePicked)
    }
    if (isLoading)
        return <Loading />
    return (
        <div className={styles.slideInBckCenterTable}>
            <DatePickerCurr handleChangeDateExchange={(e, selectedDate) => handleChangeDateExchange(e, selectedDate)} date={latestDate} />
            <TableComp latestRate={latestRate} yesterdayRate={yesterdayRate} latestDate={latestDate} />
        </div>
    )
}
export default CoverterTable;