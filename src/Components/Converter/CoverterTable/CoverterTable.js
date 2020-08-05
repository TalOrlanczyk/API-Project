import React, { useEffect, useState } from 'react';
import './CoverterTable.css';
import Loading from '../../Loading/Loading';
import DatePickerCurr from './DatePickerCurr/DatePickerCurr';
import TableComp from './TableComp/TableComp';
import { TodayExchangeRate, TodatExchangeRateBySymbol, ExchangeByDataAndOption } from '../../../API/GET/exchange';

const BASE_URL = 'https://api.exchangeratesapi.io/';

const initialObject = {};
const CoverterTable = ({ currencyOptions }) => {
    const [latestDate, setLatestDate] = useState("")
    const [latestRate, setLatestRate] = useState({});
    const [yesterdayRate, setYesterdayRate] = useState({});
    const [coinLength] = useState(currencyOptions.length);
    useEffect(() => {
        TodayExchangeRate()
            .then(data => {
                let latestDate = data.date
                let DateOfYesterday = new Date(latestDate);
                const calcMonth = (month) => {
                    if (month >= 10) return month
                    return "0" + month
                }
                const allCoins = data.rates;
                allCoins[data.base] = ""
                setLatestDate(data.date);
                Object.keys(allCoins).map((options) => {
                    TodatExchangeRateBySymbol(options)
                        .then(data => {
                            const bases = data.base;
                            const tempRate = latestRate;
                            tempRate[bases] = Object.entries(data.rates)[0][1]
                            setLatestRate({ ...latestRate, ...tempRate[bases] })
                        })
                })
                const DateBeforeLates = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + calcMonth(DateOfYesterday.getDate() - 1);
                Object.keys(allCoins).map((options) => {
                    ExchangeByDataAndOption(DateBeforeLates, options)
                        .then(data => {
                            const bases = data.base;
                            const tempRate = yesterdayRate;
                            tempRate[bases] = Object.entries(data.rates)[0][1]
                            setYesterdayRate({ ...yesterdayRate, ...tempRate[bases] })
                        })
                })
            })

    }, [])
    const clearState = (e) => {
        setYesterdayRate({ ...initialObject });
        setLatestRate({ ...initialObject })
    }
    const handleStuff = (e, selectedDate) => {
        let DateOfYesterday = new Date(selectedDate);
        const calcMonth = (month) => {
            if (month >= 10) return month
            return "0" + month;
        }
        const DateBeforeLates = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + calcMonth(DateOfYesterday.getDate() - 1);
        const DatePicked = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + calcMonth(DateOfYesterday.getDate());
        clearState();
        currencyOptions
            .filter(currecy => currecy !== "ILS")
            .map((option) => {
                ExchangeByDataAndOption(DatePicked, option)
                    .then(data => {
                        const bases = data.base;
                        const tempRate = latestRate;
                        tempRate[bases] = Object.entries(data.rates)[0][1]
                        setLatestRate({ ...latestRate, ...tempRate[bases] })
                    })
                    ExchangeByDataAndOption(DateBeforeLates, option)
                    .then(data => {
                        const bases = data.base;
                        const tempRate = yesterdayRate;
                        tempRate[bases] = Object.entries(data.rates)[0][1]
                        setYesterdayRate({ ...yesterdayRate, ...tempRate[bases] })
                    })
            })

    }
    if (coinLength !== Object.keys(yesterdayRate).length ||
        Object.keys(latestRate).length !== coinLength)
        return <Loading />
    return (
        <div className="date-table slide-in-bck-center-table">
            <DatePickerCurr handleStuff={(e, selectedDate) => handleStuff(e, selectedDate)} />
            <TableComp latestRate={latestRate} yesterdayRate={yesterdayRate} latestDate={latestDate} />
        </div>
    )
}
export default CoverterTable;