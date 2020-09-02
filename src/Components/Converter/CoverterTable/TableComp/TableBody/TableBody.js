import React from 'react';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import './TableBody.css';
import Table from '../../../../../Containers/Table/Table';

const TableBody = ({ latestRate, yesterdayRate,PickDataToGraph,pickedBase }) => {
    console.log('[TableBody.js] rerender')
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
        if (onlythreedecimel !== undefined) {

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
        <>
            {Object.entries(latestRate)
                .filter(latest => latest[0] !== pickedBase)
                .map((option) =>
                    <Table.Row key={option[0]}>
                        <Table.Data className="text-color"><span>{option[0]}</span></Table.Data>
                        <Table.Data className="text-color"><span>{option[1]}</span></Table.Data>
                        <Table.Data className={classDailyChange(dailyChange(option))}><span>{Math.abs(dailyChange(option)) + "%"}</span></Table.Data>
                        <Table.Data><TrendingUpIcon className="icon-color" onClick={(e) => {
                            PickDataToGraph(e, option[0])
                        }} /></Table.Data>
                    </Table.Row>

                )}
        </>
    )
}
export default TableBody;