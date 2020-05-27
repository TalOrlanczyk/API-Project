import React from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import './TableBody.css';

const TableBody = ({ latestRate, dailyChange,PickDataToGraph }) => {
    const classDailyChange = (option) => {
        if (option > 0) return "positive";
        else if (option < 0) return "negative";
        else return "same";
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