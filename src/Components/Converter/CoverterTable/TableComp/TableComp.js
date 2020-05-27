import React, { useState } from 'react';
import './TableComp.css';
import CoinGraph from '../CoinGraph/CoinGraph';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';

const TableComp = ({ latestRate, yesterdayRate,latestDate }) => {
    const [openGraph, setOpenGraph] = useState(false);
    const [pickData, setPickData] = useState("");
    const PickDataToGraph = (e, option) => {
        setPickData(option);
        setOpenGraph(true);
        // window.scrollTo(0, document.body.scrollHeight + 300);
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
        <>
            <div className="table">
                <table className="tableCovertor">
                    <TableHeader />
                    <TableBody 
                        latestRate={latestRate} 
                        dailyChange={(option)=>dailyChange(option)}  
                        PickDataToGraph={(e,option) => PickDataToGraph(e,option)}/>
                </table>
            </div>
            {
                openGraph === true ?
                    <CoinGraph
                        latestDate={latestDate}
                        openGraph={openGraph}
                        pickData={pickData}
                        closeGraph={(e) => setOpenGraph(false)} />
                    : null
            }
        </>
    )
}
export default TableComp;