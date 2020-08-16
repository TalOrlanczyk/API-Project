import React from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import './TableBody.css';

const TableBody = ({ latestRate, yesterdayRate,PickDataToGraph }) => {
    const classDailyChange = (option) => {
        if (option > 0) return "positive";
        else if (option < 0) return "negative";
        else return "same";
    }
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
    return (
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
    )
}
export default TableBody;