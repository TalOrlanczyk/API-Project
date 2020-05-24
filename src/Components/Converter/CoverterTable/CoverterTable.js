import React, { useEffect, useState } from 'react';
import './CoverterTable.css';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
const BASE_URL = 'https://api.exchangeratesapi.io/';
const CoverterTable = () => {
    const [latestRate, setLatestRate] = useState();
    const [yesterdayRate, setYesterdayRate] = useState();
    const [coinLength, setCoinLength] = useState("");
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
                setCoinLength(Object.keys(allCoins).length)
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
                const DateBeforeLates = DateOfYesterday.getFullYear() + "-" + calcMonth(DateOfYesterday.getMonth()) + "-" + (DateOfYesterday.getDate() - 1);
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

    }, [latestRate, yesterdayRate])
    
    const dailyChange = (option) => {
        let precentege = (option[1] / yesterdayRate[option[0]]) * 100;
        let howFarFromhundred = 100 - precentege;
        let noneDecimel = howFarFromhundred.toString().split(".")[0];
        let onlythreedecimel = howFarFromhundred.toString().split(".")[1];
        onlythreedecimel = onlythreedecimel.substring(0, 3);
        if (onlythreedecimel.length === 2)
            onlythreedecimel = onlythreedecimel + "0";
        else if (onlythreedecimel.length === 1)
            onlythreedecimel = onlythreedecimel + "00";

        return noneDecimel + "." + onlythreedecimel;
    }
    const classDailyChange = (option) => {
        if (option > 0) return "positive";
        else if (option < 0) return  "negative";
        else  return "same" ;
    }
    if (coinLength !== Object.keys(yesterdayRate).length || Object.keys(latestRate).length !== coinLength || Object.keys(latestRate).length !== Object.keys(yesterdayRate).length)
        return 'Loading...'
    return (
        <div className="dd">
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
                                        <td>{option[0]}</td>
                                        <td>{option[1]}</td>
                                        <td className={classDailyChange(dailyChange(option))}>{Math.abs(dailyChange(option)) + "%"}</td>
                                        <td><TrendingUpIcon /></td>
                                    </tr>
                                
                        )}
                </tbody>
            </table>
        </div>
    )
}
export default CoverterTable;