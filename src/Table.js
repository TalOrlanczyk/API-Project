import React, { useEffect, useState } from 'react';
import './CoverterTable.css';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Loading from '../../Loading/Loading';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Event from '@material-ui/icons/Event';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import CoinGraph from './CoinGraph/CoinGraph';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import ErrorSnackbar from '../../Snackbars/ErrorSnackbar/ErrorSnackbar';
import useCurrecny from '../../customHooks/customeHooks';

const BASE_URL = 'https://api.exchangeratesapi.io/';
const dateBorderClasses = {
    classes: {
        underline: 'date-border-color',
        input: 'date-input-color',
    },
    endAdornment: (
        <InputAdornment position="end">
            <Event className="event-color" />
        </InputAdornment>
    )
}

const dateLabelClass = {
    classes: {
        root: 'date-label-color',
    },
}
const initialObject = {};
const CoverterTable = ({currencyOptions}) => {
    // const [currencyOptions, setCurrencyOptions] = useState([])
    const [latestRate, setLatestRate] = useState({});
    const [yesterdayRate, setYesterdayRate] = useState({});
    const [coinLength, setCoinLength] = useState("");
    const [selectedDate, handleDateChange] = useState(new Date());
    const [openGraph, setOpenGraph] = useState(false);
    const [pickData, setPickData] = useState("");
    const PickDataToGraph = (e, option) => {
        setPickData(option);
        setOpenGraph(true);
        window.scrollTo(0, document.body.scrollHeight + 300);
    }
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
        if (onlythreedecimel != undefined) {

            onlythreedecimel = onlythreedecimel.substring(0, 3);
            if (onlythreedecimel.length === 2)
                onlythreedecimel = onlythreedecimel + "0";
            else if (onlythreedecimel.length === 1)
                onlythreedecimel = onlythreedecimel + "00";
        } else {
            onlythreedecimel = "0";
        }

        return noneDecimel + "." + onlythreedecimel;

    }
    const clearState = (e) => {
        setYesterdayRate({ ...initialObject });
        setLatestRate({ ...initialObject })
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
        clearState();
        currencyOptions
            .filter(currecy => currecy !== "ILS")
            .map((option) => {
                fetch(`${BASE_URL}${DatePicked}?symbols=ILS&base=${option}`)
                    .then(response => response.json())
                    .then(data => {
                        const bases = data.base;
                        const tempRate = latestRate;
                        tempRate[bases] = Object.entries(data.rates)[0][1]
                        setLatestRate({ ...latestRate, ...tempRate[bases] })
                    })
                fetch(`${BASE_URL}${DateBeforeLates}?symbols=ILS&base=${option}`)
                    .then(response => response.json())
                    .then(data => {
                        const bases = data.base;
                        const tempRate = yesterdayRate;
                        tempRate[bases] = Object.entries(data.rates)[0][1]
                        setYesterdayRate({ ...yesterdayRate, ...tempRate[bases] })
                    })
            })

    }
    const isGetToTheSearchLimit = () => {
        if (selectedDate.getFullYear() >= 2011 && selectedDate.getMonth() >= 0 && selectedDate.getDate() > 3)
            return true;
        return false;
    }
    if (coinLength !== Object.keys(yesterdayRate).length ||
        Object.keys(latestRate).length !== coinLength ||
        Object.keys(latestRate).length !== Object.keys(yesterdayRate).length)
        return <Loading />
    return (
        <div className="date-table slide-in-bck-center">
            
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
                <button className="button-class" disabled={!isGetToTheSearchLimit()} onClick={(e) => handleStuff(e)}>
                    <SearchIcon className={isGetToTheSearchLimit() === false ? "disabled" : "date-search"} />
                </button>
            </div>
            {isGetToTheSearchLimit() === false ?
                <ErrorSnackbar
                    text={"cant search data earlier then 04/01/2011"} />
                : null
            }
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
                                    <td><TrendingUpIcon className="icon-color" onClick={(e) => {
                                        PickDataToGraph(e, option[0])
                                    }} /></td>
                                </tr>

                            )}
                    </tbody>
                </table>
            </div>
            {
                openGraph === true ?
                    <CoinGraph
                        openGraph={openGraph}
                        pickData={pickData}
                        closeGraph={(e) => setOpenGraph(false)} />
                    : null
            }
        </div>
    )
}
export default CoverterTable;

            {/* <div className="date">

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
                <button className="button-class" disabled={!isGetToTheSearchLimit()} onClick={(e) => handleStuff(e)}>
                    <SearchIcon className={isGetToTheSearchLimit() === false ? "disabled" : "date-search"} />
                </button>
            </div>
            {isGetToTheSearchLimit() === false ?
                <ErrorSnackbar
                    text={"cant search data earlier then 04/01/2011"} />
                : null
            } */}



            import React, { useEffect, useState } from 'react';
import './CoverterTable.css';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Loading from '../../Loading/Loading';
import CoinGraph from './CoinGraph/CoinGraph';
import CoverterAmount from '../CoverterAmount/CoverterAmount';
import DatePickerCurr from './DatePickerCurr/DatePickerCurr';

const BASE_URL = 'https://api.exchangeratesapi.io/';

const initialObject = {};
const CoverterTable = ({currencyOptions}) => {
    // const [currencyOptions, setCurrencyOptions] = useState([])
    const [latestRate, setLatestRate] = useState({});
    const [yesterdayRate, setYesterdayRate] = useState({});
    const [coinLength, setCoinLength] = useState(currencyOptions.length);
    const [openGraph, setOpenGraph] = useState(false);
    const [pickData, setPickData] = useState("");
    const PickDataToGraph = (e, option) => {
        setPickData(option);
        setOpenGraph(true);
        window.scrollTo(0, document.body.scrollHeight + 300);
    }
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
                // setCoinLength(Object.keys(allCoins).length);
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
        if (onlythreedecimel != undefined) {

            onlythreedecimel = onlythreedecimel.substring(0, 3);
            if (onlythreedecimel.length === 2)
                onlythreedecimel = onlythreedecimel + "0";
            else if (onlythreedecimel.length === 1)
                onlythreedecimel = onlythreedecimel + "00";
        } else {
            onlythreedecimel = "0";
        }

        return noneDecimel + "." + onlythreedecimel;

    }
    const clearState = (e) => {
        setYesterdayRate({ ...initialObject });
        setLatestRate({ ...initialObject })
    }
    const classDailyChange = (option) => {
        if (option > 0) return "positive";
        else if (option < 0) return "negative";
        else return "same";
    }
    const handleStuff = (e,selectedDate) => {
        let DateOfYesterday = new Date(selectedDate);
        const calcMonth = (month) => {
            if (month >= 10) return month
            return "0" + month;
        }
        const DateBeforeLates = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + (DateOfYesterday.getDate() - 1);
        const DatePicked = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth() + 1) + "-" + (DateOfYesterday.getDate());
        clearState();
        currencyOptions
            .filter(currecy => currecy !== "ILS")
            .map((option) => {
                fetch(`${BASE_URL}${DatePicked}?symbols=ILS&base=${option}`)
                    .then(response => response.json())
                    .then(data => {
                        const bases = data.base;
                        const tempRate = latestRate;
                        tempRate[bases] = Object.entries(data.rates)[0][1]
                        setLatestRate({ ...latestRate, ...tempRate[bases] })
                    })
                fetch(`${BASE_URL}${DateBeforeLates}?symbols=ILS&base=${option}`)
                    .then(response => response.json())
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
            <CoverterAmount currencyOptions={currencyOptions}/>
            <DatePickerCurr handleStuff={(e,selectedDate)=> handleStuff(e,selectedDate)}/>
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
                                    <td><TrendingUpIcon className="icon-color" onClick={(e) => {
                                        PickDataToGraph(e, option[0])
                                    }} /></td>
                                </tr>

                            )}
                    </tbody>
                </table>
            </div>
            {
                openGraph === true ?
                    <CoinGraph
                        openGraph={openGraph}
                        pickData={pickData}
                        closeGraph={(e) => setOpenGraph(false)} />
                    : null
            }
        </div>
    )
}
export default CoverterTable;