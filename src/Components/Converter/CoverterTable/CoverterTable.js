import React, { useEffect, useState } from 'react';
import './CoverterTable.css';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Loading from '../../Loading/Loading';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const BASE_URL = 'https://api.exchangeratesapi.io/';
const dateBorderClasses = {
    classes: {
        underline: 'date-border-color',
        input: 'date-input-color'
    },
}

const dateLabelClass = {
    classes: {
        root: 'date-label-color',
    },
}
const CoverterTable = () => {
    const [currencyOptions, setCurrencyOptions] = useState([])
    const [latestRate, setLatestRate] = useState({});
    const [yesterdayRate, setYesterdayRate] = useState({});
    const [coinLength, setCoinLength] = useState("");
    const [selectedDate, handleDateChange] = useState(new Date());

    useEffect(() => {
        fetch(`${BASE_URL}latest`)
            .then(res => res.json())
            .then(data => {
                let latestDate = data.date
                let DateOfYesterday = new Date(latestDate);
                const calcMonth = (month) => {
                    if (month >= 10) return month
                    return "0" + month
                }
                const allCoins = data.rates;
                allCoins[data.base] = ""
                setCoinLength(Object.keys(allCoins).length);
                setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
                Object.keys(allCoins).map(async (options) => {
                    await fetch(`${BASE_URL}latest?symbols=ILS&base=${options}`)
                        .then(response => response.json())
                        .then(data => {
                            const bases = data.base;
                            const tempRate = latestRate;
                            tempRate[bases] = Object.entries(data.rates)[0][1]
                            setLatestRate({ ...latestRate, ...tempRate[bases] })
                        })
                })
                const DateBeforeLates = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + (DateOfYesterday.getDate() - 1);
                Object.keys(allCoins).map(async (options) => {
                    await fetch(`${BASE_URL}${DateBeforeLates}?symbols=ILS&base=${options}`)
                        .then(response => response.json())
                        .then(data => {
                            const bases = data.base;
                            const tempRate = yesterdayRate;
                            tempRate[bases] = Object.entries(data.rates)[0][1]
                            setYesterdayRate({ ...yesterdayRate, ...tempRate[bases] })
                        })
                })
            })

    }, [])
    const dailyChange = (option) => {
        let precentege = (option[1] / yesterdayRate[option[0]]) * 100;
        let howFarFromhundred = 100 - precentege;
        let noneDecimel = howFarFromhundred.toString().split(".")[0];
        let onlythreedecimel = howFarFromhundred.toString().split(".")[1];
        if (onlythreedecimel != undefined)
            onlythreedecimel = onlythreedecimel.substring(0, 3);
        if (onlythreedecimel.length === 2)
            onlythreedecimel = onlythreedecimel + "0";
        else if (onlythreedecimel.length === 1)
            onlythreedecimel = onlythreedecimel + "00";

        return noneDecimel + "." + onlythreedecimel;
    }
    const classDailyChange = (option) => {
        if (option > 0) return "positive";
        else if (option < 0) return "negative";
        else return "same";
    }
    const handleStuff = (e) => {
        let DateOfYesterday = new Date(selectedDate);
        const calcMonth = (month) => {
            if (month >= 10) return month
            return "0" + month;
        }
        const DateBeforeLates = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + (DateOfYesterday.getDate() - 1);
        const DatePicked = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + (DateOfYesterday.getDate());
        currencyOptions
            .filter(currecy => currecy !== "ILS")
            .map(async (option) => {
                await fetch(`${BASE_URL}${DatePicked}?symbols=ILS&base=${option}`)
                    .then(response => response.json())
                    .then(data => {
                        const bases = data.base;
                        const tempRate = latestRate;
                        tempRate[bases] = Object.entries(data.rates)[0][1]
                        setLatestRate({ ...latestRate, ...tempRate[bases] })
                    })
                await fetch(`${BASE_URL}${DateBeforeLates}?symbols=ILS&base=${option}`)
                    .then(response => response.json())
                    .then(data => {
                        const bases = data.base;
                        const tempRate = yesterdayRate;
                        tempRate[bases] = Object.entries(data.rates)[0][1]
                        setYesterdayRate({ ...yesterdayRate, ...tempRate[bases] })
                    })
            })

    }
    if (coinLength !== Object.keys(yesterdayRate).length || Object.keys(latestRate).length !== coinLength || Object.keys(latestRate).length !== Object.keys(yesterdayRate).length)
        return <Loading />
    return (
        <div className="date-table">
            <div className="date">

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        disableFuture
                        InputLabelProps={dateLabelClass}
                        InputProps={dateBorderClasses}
                        label="Responsive"
                        views={["year", "month", "date"]}
                        value={selectedDate}
                        onChange={date => handleDateChange(date)}
                        format="dd/MM/yyyy"
                    />
                </MuiPickersUtilsProvider>
                <SearchIcon className={"date-search"} onClick={(e) => handleStuff(e)} />
            </div>
            <div className="table">
                <table className="tableCovertor">
                    <thead className="tableHeader">
                        <tr>
                            <td>
                                type
                        </td>
                            <td>
                                rate
                        </td>
                            <td>
                                daily change
                        </td>
                            <td>
                                graph
                        </td>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {Object.entries(latestRate)
                            .filter(latest => latest[0] !== "ILS")
                            .map((option) =>



                                <tr key={option[0]}>
                                    <td className="text-color">{option[0]}</td>
                                    <td className="text-color">{option[1]}</td>
                                    <td className={classDailyChange(dailyChange(option))}>{Math.abs(dailyChange(option)) + "%"}</td>
                                    <td><TrendingUpIcon className="icon-color" /></td>
                                </tr>

                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CoverterTable;